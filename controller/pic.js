const rp = require('request-promise');
const PictureModel = require('../models/pic');
const secret = require('../config/secret.json');
const util = require('../utils/util');

class PictureController {
  static async create(ctx) {
    const { body } = ctx.request;
    // const wxApi = await rp({
    //   uri: `https://api.weixin.qq.com/wxa/media_check_async?access_token=${at}`,
    //   method: 'post',
    //   body: {
    //     media_url: `http://${body.longurl}`,
    //     media_type: 2,
    //   },
    //   json: true,
    // });
    const dwzRes = await rp({
      uri: 'https://dwz.cn/admin/v2/create',
      method: 'post',
      headers: {
        /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
        token: secret.dwzToken,
      },
      body: {
        Url: `https://www.bbtjym.com:8100/url/redirect?url=https://${body.longurl}`,
        TermOfValidity: '1-year',
      },
      json: true,
    });
    if (dwzRes.Code === 0) {
      const picDate = {
        longurl: dwzRes.LongUrl,
        shorturl: dwzRes.ShortUrl,
        uid: ctx.user.uid,
        imgurl: `https://${body.longurl}`,
      };
      console.log('PictureController -> create -> picDate', picDate);
      const res = await PictureModel.create(picDate);
      if (res) {
        ctx.body = {
          res,
          code: 0,
        };
      }
    } else {
      ctx.body = {
        dwzRes,
      };
    }
  }

  static async getPicAndAllCount(ctx) {
    const { query } = ctx.request;
    const res = await PictureModel.getPicAndAllCount(ctx.user.uid, query.pageIndex, query.pageSize);
    ctx.body = {
      res,
    };
  }

  static async delete(ctx) {
    const pid = parseInt(ctx.params.pid, 10);
    const { uid } = ctx.user;
    const res = await PictureModel.deleteByPidAndUid(pid, uid);
    ctx.body = {
      res,
    };
  }
}
module.exports = PictureController;
