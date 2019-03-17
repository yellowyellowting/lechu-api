const axios = require('axios');
const { SMS_ACTION_REGISTER } = require('../config/constant');
const { ucpaas } = require('../config');

/**
 * 默认的短信验证码有效时间 (30m)
 */
const DEFAULT_EXPIRE_TIME = 30 * 60 * 1000;

/**
 * 重发限制时间 (60s)
 */
const DEFAULT_RESEND_LIMIT_TIME = 60 * 1000;

/**
 * 是否允许重发验证码
 */
const isAllowResend = (lastSendTime, resendLimitTime = DEFAULT_RESEND_LIMIT_TIME) => {
    return new Date().getTime() - lastSendTime > resendLimitTime;
};

/**
 * 生成随机验证码
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

        const code = generateCode();
        const createdAt = new Date().getTime();
        const expiredAt = expireTime + createdAt;
        const frendlyExpiredTime = convertFrendlyExpiredTime(expireTime);

        axios({
            method: 'post',
            url: ucpaas.url,
            data: {
                sid: ucpaas.sid,
                token: ucpaas.token,
                appid: ucpaas.appid,
                templateid: templateId,
                param: `${code},${frendlyExpiredTime}`,
                mobile: mobile,
                uid: ucpaas.uid
            },
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Accept": "application/json"
            }
        }).then(({ data }) => {
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