const router = require('express').Router(); // 路由对象
const user = require('../controllers/user'); // 登录、注册、token模块
const recipe = require('../controllers/recipe'); // 创建菜谱、详情页请求模块
const comment = require('../controllers/comment'); // 创建评论
const upload = require('../controllers/upload'); // 创建评论
const spider = require('../controllers/spider'); // 爬取流行菜谱数据
const authMiddleware = require('../middlewares/auth'); //

/**
 * 用户相关的api
 */
router.post('/user/login', user.login);
router.post('/user/register', user.register);
router.get('/user/profile', authMiddleware.auth, user.profile);
router.post('/user/sendSMS', user.sendSMS);

/**
 * 菜谱相关的api
 */
router.post('/recipe/create', authMiddleware.auth, recipe.create);
router.get('/recipe/detail', recipe.detail);
router.get('/recipe/pop', recipe.pop);
router.get('/recipe/rising', recipe.rising);

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

module.exports = router;