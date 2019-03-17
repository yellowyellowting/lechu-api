//请求成功的函数，转化成对象
function success(data) {
    return this.json({
        code: 0,
        message: 'api success',
        data
    });
}

//请求失败的函数
function error(code, message) {
    code = code || -1;
    message = message || 'api error';

    return this.json({
        code,
        message
    });
}

// api middleware 中间件
module.exports = function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    res.success = success;
    res.error = error;

    next();
};