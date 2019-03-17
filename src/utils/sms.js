const axios = require('axios'); // 后端网球请求模块
const { SMS_ACTION_REGISTER } = require('../config/constant'); //引入 'regester' 常量
const { ucpaas } = require('../config'); //  配置信息

/**
 * 默认的短信验证码有效时间 (30m)
 */
const DEFAULT_EXPIRE_TIME = 30 * 60 * 1000;

/**
 * 重发限制时间 (60s)
 */
const DEFAULT_RESEND_LIMIT_TIME = 60 * 1000;  // 限制时间，避免频繁操作

/**
 * 是否允许重发验证码,限制时间内不允许重新发送
 */
const isAllowResend = (lastSendTime, resendLimitTime = DEFAULT_RESEND_LIMIT_TIME) => {  
    return new Date().getTime() - lastSendTime > resendLimitTime;
};

/**
 * 生成随机验证码，转换成字符串，因为随机数为小叔，取出最后6位
 */
const generateCode = () => Math.random().toString().slice(-6); 

/**
 * 转化为友好地显示失效时间，如xx秒、xx分钟、xx小时
 */
const convertFrendlyExpiredTime = (expireTime) => {
    if (expireTime < 60 * 1000) {
        return Math.floor(expireTime / 1000) + '秒';
    } else if (expireTime < 60 * 60 * 1000) {
        return Math.floor(expireTime / ( 60 * 1000)) + '分钟';
    } else if (expireTime < 24 * 60 * 60 * 1000) {
        return Math.floor(expireTime / ( 60 * 60 * 1000)) + '小时';
    } else {
        return Math.floor(expireTime / ( 24 * 60 * 60 * 1000)) + '天';
    }
}

/**
 * 发送验证码
 */

// 参数说明：（手机号，操作（默认值位 [SMS_ACTION_REGISTER] ）， 失效时间），返回一个Promise对象，可以使用then 方法处理
const sendSms = (mobile, action = SMS_ACTION_REGISTER, expireTime = DEFAULT_EXPIRE_TIME) => {
    return new Promise((resolve, reject) => {
        if (!mobile || mobile.length != 11) {
            reject('手机号不正确');
            return;
        }

        const templateId = ucpaas.templateIds[action];
        if (!templateId) {
            reject('不支持的action');
            return;
        }

        const code = generateCode(); // 生成验证码
        const createdAt = new Date().getTime(); // 获取当前时间
        const expiredAt = expireTime + createdAt; // 设置过期时间
        const frendlyExpiredTime = convertFrendlyExpiredTime(expireTime); //转化为友好地显示失效时间

        // 因为后端没有feth ajax等方法，使用axios
        axios({
            method: 'post',
            url: ucpaas.url,
            data: {
                sid: ucpaas.sid,  //云之讯提供
                token: ucpaas.token, //云之讯提供
                appid: ucpaas.appid, //云之讯提供
                templateid: templateId,  //云之讯提供，模板ID，一个ID只能进行一个操作
                param: `${code},${frendlyExpiredTime}`, //云之讯需要传入的参数，验证码和过期时间
                mobile: mobile, 
                uid: ucpaas.uid  //云之讯提供
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8", //告诉云之讯传入数据位application/json ，
                "Accept": "application/json"  //告诉云之讯接收数据位application/json
            }
        }).then(({ data }) => {               //解构获取data
            if (data.code == '000000') {
                resolve({ 
                    mobile: data.mobile,
                    smsid: data.smsid,
                    uid: data.uid,
                    action,
                    code,
                    createdAt,
                    expiredAt,
                });
            } else {
                reject(data.msg);
            }
        }).catch(error => {
            reject(error);
        });
    });
};

module.exports = {
    isAllowResend,
    generateCode,
    sendSms
}