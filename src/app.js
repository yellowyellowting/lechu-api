const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');
const orm = require('./middlewares/orm'); // 中间件
const rest = require('./middlewares/rest');  // 失败、成功函数模块
const routes = require('./routes'); // 路由
const { port } = require('./config');

const app = express();
/**
 * 配置关系型数据库中间件
 */
app.use(orm);

/**
 * 配置api相应中间件
 */
app.use(rest);

// /**
//  * 处理文件上传的中间件
//  */
// app.use(upload);

/**
 * 解析request body为json的中间件
 */
app.use(bodyParser.json());

/**
 * 处理url encoded加密的中间件
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 配置路由
 */
app.use(routes);

/**
 * 静态资源路由
 */
app.use(express.static(path.join(__dirname, '../public')))  // Express目前唯一内置的一个中间件。用来处理静态资源文件。

/**
 * 启动服务器
 */
app.listen(port, function () {
    console.log('服务器构建完成，访问地址为 http://127.0.0.1:' + port);
});