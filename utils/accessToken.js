const rp = require('request-promise');
// const redis = require('../config/redis');
const miniProgramConfig = require('../config/miniConfig.json');
const AtModel = require('../models/accessToken');


const getAccessToken = async () => {
  try {
    const req = await rp({
      url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${miniProgramConfig.appid}&secret=${miniProgramConfig.secret}`,
      method: 'get',
    });
    console.log('atreq', req);
    const res = await AtModel.updateAt(JSON.parse(req).access_token);
  } catch (err) {
    console.log('err', err);
  }

  // console.log(res);
  // try {
  //   newRedis.set('access_token', JSON.parse(req).access_token);
  //   const testA = await RedisGet('access_token');
  //   console.log('111', testA);
  //   console.log('data:', new Date());
  // } catch (err) {
  //   console.log('data:', new Date());
  //   console.log(err);
  // }
};
const schedule = () => {
  getAccessToken();

  setInterval(getAccessToken, 1000 * 60 * 60 * 1.9);
};
schedule();
