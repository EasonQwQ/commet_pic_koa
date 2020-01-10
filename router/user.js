const router = require('koa-router')();
const UserController = require('../controller/user');

router.get('/', UserController.get);
module.exports = router.routes();
