const router = require('express').Router(); // 路由对象
const user = require('../controllers/user'); // 登录、注册、token模块
const recipe = require('../controllers/recipe'); // 创建菜谱、详情页请求模块
const comment = require('../controllers/comment'); // 创建评论
const upload = require('../controllers/upload'); // 创建评论
const spider = require('../controllers/spider'); // 爬取流行菜谱数据
const authMiddleware = require('../middlewares/auth'); //token验证

// 后端接口汇总文件

// //设置跨域访问（设置在所有的请求前面即可）
// app.all("*", function (req, res, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers", "content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method == 'OPTIONS')
//         res.send(200); //让options尝试请求快速结束
//     else
//         next();
// });

/**
 * 用户相关的api
 */
router.post('/user/login', user.login); // 登录，已完成
router.post('/user/register', user.register); // 注册，已完成
router.get('/user/profile', authMiddleware.auth, user.profile); // 获取用户信息，已完成
router.post('/user/sendSMS', user.sendSMS); // 发送验证码，已完成

/**
 * 菜谱相关的api
 */
router.post('/recipe/create', authMiddleware.auth, recipe.create); // 创建菜谱，已完成
router.get('/recipe/detail', recipe.detail);  // 创建菜谱，已完成
router.get('/recipe/pop', recipe.pop);  // 流行菜谱，已完成
router.get('/recipe/rising', recipe.rising); //新秀，未完成

/**
 * 评论相关的api
 */
router.post('/comment/create', authMiddleware.auth, comment.create);
router.get('/comment/list', comment.list);

/**
 * 上传相关的api
 */
router.post('/upload/recipe', upload.uploadRecipe);

/**
 * 爬虫相关的api
 */
router.get('/spider/popRecipe', spider.fetchPopRecipes);
router.get('/spider/recipeDetail', spider.fetchRecipeDetail);

module.exports = router;