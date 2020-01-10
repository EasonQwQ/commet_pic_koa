const UserModel = require('../models/user');

class UserController {
  static async test(ctx) {
    ctx.body = {
      uid: ctx.user.uid,
    };
  }

  static async get(ctx) {
    const res = await UserModel.get(ctx.user.uid);
    ctx.body = {
      userInfo: res,
    };
  }
}
module.exports = UserController;
