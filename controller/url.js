
class UrlController {
  static async redirect(ctx) {
    const { url } = ctx.request.query;
    await ctx.render('index', {
      url,
    });
  }
}
module.exports = UrlController;
