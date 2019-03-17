const { tokenSecret } = require('../config');
const jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, tokenSecret, (err, decoded) => {
            if (err) {
                return res.error(401, '无效的token');
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.error(401, 'token不能为空');
    }
}

/**
 * 非登陆用户也允许查看
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.tryAuth = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, tokenSecret, function (err, decoded) {
            if (err) {
                //即使token错误也可以继续访问
                return next();
            } else {
                req.decoded = decoded;
                return next();
            }
        });
    } else {
        return next();
    }
}