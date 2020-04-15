const crypto = require('crypto');
// const redis = require('../config/redis');

// const { RedisGet } = redis;
class UserController {
  // static async getAccessToken(ctx) {
  //   const accessToken = await RedisGet('access_token');
  //   ctx.body = {
  //     code: 0,
  //     accessToken,
  //   };
  // }

  static async getToken(ctx) {
    const {
      timestamp, signature, nonce, echostr,
    } = ctx.request.query;

    const token = 'bbtjym1';
    const arr = [token, nonce, timestamp].sort().join('');
    const tempToken = crypto.createHash('sha1').update(arr).digest('hex');
    console.log('return ', tempToken === signature);
    ctx.body = tempToken === signature ? echostr : '';
    // return tempToken === signature ? echostr : '';
  }
}
module.exports = UserController;
