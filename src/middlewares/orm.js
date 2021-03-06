const orm = require('orm'); 
const { db } = require('../config'); //配置信息

// 中间件的形式跟express结合,将数据库表映射
module.exports = orm.express(`mysql://${db.username}:${db.password}@${db.host}/${db.database}`, {
    define: function (db, models, next) {
        models.user = db.define("user", {
            id: { type: 'serial', key: true },
            username: String,
            password: String,
            mobile: String,
            email: String,
            created_at: Number,
        });
        models.verifyCode = db.define("verify_code", {
            id: { type: 'serial', key: true },
            code: String,
            mobile: String,
            action: String,
            expired_at: Number,
            created_at: Number,
        });
        models.recipe = db.define("recipe", {
            id: { type: 'serial', key: true },
            user_id: Number,
            name: String,
            cover: String,
            description: String,
            created_at: Number,
            look_count: Number
        });
        models.recipeStep = db.define("recipe_step", {
            id: { type: 'serial', key: true },
            recipe_id: Number,
            description: String,
            pic_url: String,
            order: Number,
            created_at: Number,
        });
        models.recipeComment = db.define("recipe_comment", {
            id: { type: 'serial', key: true },
            user_id: Number,
            recipe_id: Number,
            content: String,
            created_at: Number,
            user_name: String,
        });
        models.recipeCollection = db.define("recipe_collection", {
            id: { type: 'serial', key: true },
            name: String,
            cover: String,
            menu: String,
            derection: String,
        });
        next();
    }
});