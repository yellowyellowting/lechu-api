const router = require('express').Router();
const user = require('../controllers/user');
const recipe = require('../controllers/recipe');
const upload = require('../controllers/upload');
const authMiddleware = require('../middlewares/auth');

router.post('/user/login', user.login);
router.post('/user/register', user.register);
router.get('/user/profile', authMiddleware.auth, user.profile);
router.post('/user/sendSMS', user.sendSMS);

router.get('/recipe/pop', recipe.pop);
router.get('/recipe/rising', recipe.rising);

router.post('/upload/recipe', upload.uploadRecipe);

module.exports = router;