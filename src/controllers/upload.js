const uploadMiddleware = require('../middlewares/upload');

exports.uploadRecipe = function(req, res) {
    uploadMiddleware.fileHandler()(req, res);
}