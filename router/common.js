const router = require('koa-router')();
const CommonControl = require('../controller/common');

// router.get('/accessToken', CommonControl.getAccessToken);
router.get('/token', CommonControl.getToken);
module.exports = router.routes();
