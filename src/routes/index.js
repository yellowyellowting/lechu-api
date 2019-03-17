const router = require('express').Router();
const user = require('../controllers/user');
const recipe = require('../controllers/recipe');
const comment = require('../controllers/comment');
const upload = require('../controllers/upload');
const spider = require('../controllers/spider');
const authMiddleware = require('../middlewares/auth');

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
 * 爬虫相关的api
 */
router.get('/spider/popRecipe', spider.fetchPopRecipes);

module.exports = router;