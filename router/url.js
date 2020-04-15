const router = require('koa-router')();
const UrlController = require('../controller/url');

router.get('/redirect', UrlController.redirect);
module.exports = router.routes();
