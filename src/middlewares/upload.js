const upload = require('jquery-file-upload-middleware'); // 文件上传中间件
const { uploadUrl, uploadDir } = require('../config'); // 默认进入index.js文件

upload.configure({
    uploadDir,
    uploadUrl,
    imageVersions: {
        // thumbnail: {
        //     width: 150,
        //     height: 150
        // }
    }
});

module.exports = upload;