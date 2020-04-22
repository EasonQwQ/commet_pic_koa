
const db = require('../config/db');
const util = require('../utils/util');

const Sequelize = db.sequelize;
const Picture = Sequelize.import('../schema/pic');
Picture.sync({ force: false });
class PictureModel {
  static async create(data) {
    console.log('PictureModel -> create -> data', data);
    try {
      const res = await Picture.create(data);
      return res;
    } catch (err) {
      console.log('er', err);
    }
  }

  static async getPicAndAllCount(uid, pageIndex, pageSize) {
    const res = await Sequelize.query(`select
    a.total , b.longurl ,b.shorturl,b.createdAt ,b.id,b.imgurl
  from
    (
      select 
        count(t2.id)  as total
      from 
      pic_comment.pictures as t2
      where
        uid = ${uid} and deleted = 0
    ) as a,
    (
      select 
        t1.longurl as longurl,t1.shorturl as shorturl,t1.createdAt as createdAt ,t1.id as id,t1.imgurl as imgurl
      from
      pic_comment.pictures as t1
      where
        uid = ${uid} and deleted = 0
    ) as b
  order by
  b.createdAt desc
  limit
      ${pageIndex * pageSize},${pageSize}
  `);
    console.log('res', res);
    return res;
  }

  static async deleteByPidAndUid(pid, uid) {
    const res = await Picture.update({
      deleted: 1,
    }, {
      where: {
        id: pid,
        uid,
      },
    });
    console.log('delete', res, pid, uid);
    return res;
  }
}
module.exports = PictureModel;
