const router = require('koa-router')();
const UrlController = require('../controller/url');

router.get('/redrict', UrlController.redirect);
module.exports = router.routes();
