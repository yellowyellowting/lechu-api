
/**
 * 创建评论
 */
exports.create = function (req, res) {
    const content = req.body.content;
    const recipeId = req.body.recipeId;
    const username = req.body.username;
    const userId = req.decoded.userId;
    
    if (!content) {
        res.error(500, '评论内容不能为空');
        return;
    }

    if (!recipeId) {
        res.error(500, '菜谱ID不能为空');
        return;
    }

    const RecipeComment = req.models.recipeComment;
    RecipeComment.create({
        user_id: userId,
        recipe_id: recipeId,
        content: content,
        user_name: username,
        created_at: new Date().getTime()
    }, (err, comment) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        res.success(comment);
        
    });
}

/**
 * 评论列表
 */
exports.list = function (req, res) {
    const recipeId = req.query.recipeId;
    // console.log(recipeId)
    if (!recipeId) {
        res.error(500, '菜谱ID不能为空');
        return;
    }

    const RecipeComment = req.models.recipeComment;
    RecipeComment.find({ recipe_id: recipeId }, (err, comments) => {
        if (err) {
            res.error(500, '数据库出错，' + err);
            return;
        }

        res.success(comments || []);

    });
}