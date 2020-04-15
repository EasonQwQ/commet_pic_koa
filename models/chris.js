
const db = require('../config/db');

const Sequelize = db.sequelize;
const chris = Sequelize.import('../schema/chris');
chris.sync({ force: false });
class ChrisModel {
  static async add(data) {
    const res = await chris.create(data);
    return res;
  }

  static async getByUidAndDate(uid, date) {
    const res = await chris.findOne({
      where: {
        uid, date,
      },
    });
    return res;
  }
}
module.exports = ChrisModel;
