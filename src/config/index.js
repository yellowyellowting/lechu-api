const path = require('path');
const ucpaas = require('./ucpaas');
const db = require('./db')

module.exports = {
    ucpaas,
    db,
    port: 3000,
    tokenSecret: 'lechu',
    tokenExpire: 3600 * 24 * 7,
    uploadUrl: '/uploads',
    uploadDir: path.resolve(__dirname, '../../public/uploads'),
};