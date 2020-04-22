const router = require('koa-router')();
const PictureController = require('./../controller/pic');

router.post('/', PictureController.create);
router.get('/picAndAllCount', PictureController.getPicAndAllCount);
router.delete('/:pid', PictureController.delete);
module.exports = router.routes();
