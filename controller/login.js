const rp = require('request-promise');
const setToken = require('./../utils/setToken');
const miniProgramaConfig = require('./../config/miniConfig.json');
const UserModel = require('./../models/user');

class UserController {
  static async login(ctx) {
    const { body } = ctx.request;
    const req = await rp({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${miniProgramaConfig.appid}&secret=${miniProgramaConfig.secret}&js_code=${body.code}&grant_type=authorization_code`,
      method: 'get',
    });
    const { openid } = JSON.parse(req);
    const list = await UserModel.findOrCreate(openid);
    ctx.body = {
      token: setToken.setToken(list[0].id),
      userInfo: list[0],
    };
  }
}
module.exports = UserController;
