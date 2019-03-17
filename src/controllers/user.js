const bcrypt = require('bcrypt'); // 加密模块,对密码加密
const jwt = require('jsonwebtoken'); // jwt模块
const { SMS_ACTION_REGISTER } = require('../config/constant');  // 引入一个常量 register
const { tokenSecret, tokenExpire } = require('../config'); // 导入配置， { tokenSecret, tokenExpire } 为解构方法，只取出 tokenSecret, tokenExpire 两个数据
const { isAllowResend, sendSms } = require('../utils/sms');  // 发送验证码信息

/**
 * 用户登录
 */
exports.login = (req, res) => {
    const mobile = req.body.mobile;
    const password = req.body.password;
    if (!mobile) {
        res.error(500, '请输入手机号');
        return;
    }
    if (!password) {
        res.error(500, '请输入密码');
        return;
    }

    const User = req.models.user;
    User.find({ mobile: mobile }, function(err, result) {   //orm插件方法find ，查找
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        const user = result && result[0];
        if (!user) {
            res.error(500, '账号或者密码错误！');
            return;
        }

        // 验证密码
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (!isCorrect) { // 密码不对
            res.error(500, '账号或者密码错误！');
            return;
        }

        //生成token
        var token = jwt.sign({ userId: user.id }, tokenSecret, { expiresIn: tokenExpire });
        res.success({
            token: token,
            user: {
                id: user.id,
                username: user.username,
                mobile: user.mobile,
                email: user.email,
                created_at: user.created_at
            }
        });
    });
}

/**
 * 用户注册
 */
exports.register = (req, res) => {
    const mobile = req.body.mobile;
    const code = req.body.code;
    const password = req.body.password;

    if (!mobile) {
        res.error(500, '手机号不能为空');
        return;
    }
    if (!code) {
        res.error(500, '验证码不能为空');
        return;
    }
    if (!password || password.length < 9) {
        res.error(500, '密码不能少于9位');
        return;
    }

    const User = req.models.user;
    User.exists({ mobile: mobile }, (err, exists) => {   //orm插件方法exists ，是否存在
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        if (exists) {
            res.error(500, '该手机号已注册！');
            return;
        }

        const VerifyCode = req.models.verifyCode;
        VerifyCode.find({ mobile, action: SMS_ACTION_REGISTER }, ['created_at', 'Z'], 1, (err, result) => {
            if (err) {
                res.error(500, '数据库出错，' + err);
                return;
            }

            const found = result && result[0];
            if (!found || found.code !== code) {
                res.error(500, '验证码不正确！');
                return;
            }

            // 加密保存密码
            const passwordHash = bcrypt.hashSync(password, 10);
            const currTime = new Date().getTime();
            User.create({
                username: '乐厨' + currTime,
                mobile,
                password: passwordHash,
                created_at: currTime
            }, (err, result) => {
                if (err) {
                    res.error(500, '数据库出错' + err);
                    return;
                }

                // 去除password属性，不暴露给外部
                let user = { ...result };
                delete user.password;

                res.success(user);
            });
        });
    });
}

/**
 * 注册发送验证码
 */
exports.sendSMS = function (req, res) {
    const mobile = req.body.mobile;
    if (!mobile) {
        res.error(500, '手机号不能为空');
        return;
    }

    // 查询是否发送过滤频繁（30秒内不能再次输入）
    const VerifyCode = req.models.verifyCode;
    VerifyCode.find({ mobile }, ['created_at', 'Z'], 1, (err, result) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        const found = result && result[0];
        if (found && !isAllowResend(found.created_at)) {
            res.error(500, '验证码发送太频繁，请稍候再试！');
            return;
        }

        const User = req.models.user;
        User.exists({ mobile: mobile }, (err, exists) => {
            if (err) {
                res.error(500, '数据库出错，' + err);
                return;
            }

            if (exists) {
                res.error(500, '该手机号已注册！');
                return;
            }

            sendSms(mobile, SMS_ACTION_REGISTER)
            .then(({ code, createdAt, expiredAt, action }) => {
                VerifyCode.create({
                    code,
                    mobile,
                    action,
                    expired_at: expiredAt,
                    created_at: createdAt,
                }, (err) => {
                    if (err) {
                        res.error(500, '数据库出错' + err);
                        return;
                    }

                    // 不需要数据
                    res.success(null);
                });
            })
            .catch(error => {
                res.error(500, `验证码发送失败，原因：${error}`);
            });
        });
    });
}

/**
 * 获取用户信息
 */
exports.profile = (req, res) => {
    const userId = req.decoded.userId;
    if (!userId) {
        res.err(500, '系统错误：读取用户ID失败');
        return;
    }
    const User = req.models.user;
    User.find({ id: userId }, (err, result) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        const found = result && result[0];
        if (!found) {
            res.error(500, '未找到该用户信息');
            return;
        }
        
        // 去除password属性，不暴露给外部
        const user = { ...found }
        delete user.password;

        res.success(user);
    });
}