const upload = require('jquery-file-upload-middleware');
const { uploadUrl, uploadDir } = require('../config');

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