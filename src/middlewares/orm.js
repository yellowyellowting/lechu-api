const orm = require('orm');
const { db } = require('../config');

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
        next();
    }
});