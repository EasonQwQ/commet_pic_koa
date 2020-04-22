const jwt = require('jsonwebtoken');
const util = require('util');

const verify = util.promisify(jwt.verify);
const secret = require('./../config/secret.json');

const jwtToken = async (ctx, next) => {
  try {
    const token = ctx.header.authorization;
    if (token) {
      try {
        const uid = await verify(token.split(' ')[1], secret.sign);
        ctx.user = {
          uid: uid.uid,
        };
      } catch (err) {
        console.log('token verify fail :', err.message);
      }
    }
    await next();
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        message: err.message,
      };
    } else {
      err.status = 404;
      ctx.body = {
        code: 404,
        message: err.message,
      };
    }
  }
};
module.exports = { jwtToken };
