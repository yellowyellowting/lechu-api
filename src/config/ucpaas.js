const { SMS_ACTION_REGISTER } = require('../config/constant');

const ucpaas = {
    url: 'https://open.ucpaas.com/ol/sms/sendsms',
    sid: '3550344c4a362cffbb14ca55b4683772',
    token: '2e3fcf93c16a77209145f74e3c234532',
    appid: 'bca40827d22748a2911a404f3816b1d1',
    templateIds: {
        [SMS_ACTION_REGISTER]: '442849',
    }
};

module.exports = ucpaas;