const path = require('path'); 
const ucpaas = require('./ucpaas'); // 导入云之讯配置信息
const db = require('./db') //导入数据库账号信息

// 汇总所有配置信息
module.exports = {
    ucpaas,
    db,
    port: 3000,
    tokenSecret: 'lechu',
    tokenExpire: 3600 * 24 * 7,
    uploadUrl: '/uploads',
    uploadDir: path.resolve(__dirname, '../../public/uploads'), //把图片移动到指定的目录，这个目录需要是绝对路径, path.resolve()方法可以将路径或者路径片段解析成绝对路径,__dirname是__directory+name的缩写
};