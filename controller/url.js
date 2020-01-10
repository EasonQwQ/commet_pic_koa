
class UrlController {
  static async redirect(ctx) {
    const { url } = ctx.request.query;
    console.log(url);
    await ctx.render('index', {
      url,
    });
  }
}
module.exports = UrlController;
