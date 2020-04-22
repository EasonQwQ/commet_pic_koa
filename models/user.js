
const db = require('../config/db');

const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/user');
User.sync({ force: false });
class UserModel {
  static async findOrCreate(openid) {
    try {
      const ret = await User.findOrCreate({
        where: {
          openid,
        },
      });
      return ret;
    } catch (err) {
      console.log('err', '在models创建失败');
      console.log('errr', err);
      return false;
    }
  }

  static async get(id) {
    const res = await User.findOne({
      where: {
        id,
      },
    });
    return res;
  }
}
module.exports = UserModel;
