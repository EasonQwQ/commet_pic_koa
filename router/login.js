const router = require('koa-router')();
const LoginController = require('../controller/login');

router.post('/', LoginController.login);

module.exports = router.routes();
