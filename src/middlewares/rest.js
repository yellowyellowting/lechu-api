function success(data) {
    if (this.isJsonp && this.isJsonp == true) {
        return this.jsonp({
            code: 0,
            message: 'api success',
            data
        });
    }

    return this.json({
        code: 0,
        message: 'api success',
        data
    });
}

function error(code, message) {
    code = code || -1;
    message = message || 'api error';

    if (this.isJsonp && this.isJsonp == true) {
        return this.jsonp({
            code,
            message
        });
    }

    return this.json({
        code,
        message
    });
}

// api middleware
module.exports = function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    res.success = success;
    res.error = error;

    next();
};