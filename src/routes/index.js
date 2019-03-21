const router = require('express').Router(); // 路由对象
const user = require('../controllers/user'); // 登录、注册、token模块
const recipe = require('../controllers/recipe'); // 创建菜谱、详情页请求模块
const comment = require('../controllers/comment'); // 创建评论
const upload = require('../controllers/upload'); // 创建评论
const spider = require('../controllers/spider'); // 爬取流行菜谱数据
const authMiddleware = require('../middlewares/auth'); //token验证

// 后端接口汇总文件

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
router.get('/recipe/self', authMiddleware.auth, recipe.selfrecipe) // 获取用户名
router.get('/recipe/pop', recipe.pop);  // 流行菜谱，已完成
router.post('/recipe/pop', recipe.pop); 
router.get('/recipe/rising', recipe.rising); //新秀，未完成
router.get('/recipe/collection', recipe.collection);
router.get('/recipe/getcollection', recipe.getcollection);

/**
 * 评论相关的api
 */
router.post('/comment/create', authMiddleware.auth, comment.create);  //结束时加上“” 重要
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

/**
 * 主页列表
 */
router.get('/')

module.exports = router;