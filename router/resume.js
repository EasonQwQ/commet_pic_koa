const router = require('koa-router')();

const main = async (ctx) => {
  await ctx.render('resume');
};
router.get('/', main);
module.exports = router.routes();
