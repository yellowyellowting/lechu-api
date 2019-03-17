const path = require('path'); 
const ucpaas = require('./ucpaas'); // 导入云之讯信息
const db = require('./db') //导入数据库账号信息

// 汇总所有配置信息
module.exports = {
    ucpaas,
    db,
    port: 3000,
    tokenSecret: 'lechu',
    tokenExpire: 3600 * 24 * 7,
    uploadUrl: '/uploads',
    uploadDir: path.resolve(__dirname, '../../public/uploads'),
};