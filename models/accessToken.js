const SequelizeOp = require('sequelize');
const db = require('../config/db');

const { Op } = SequelizeOp;
const Sequelize = db.sequelize;
const AT = Sequelize.import('../schema/accessToken');
AT.sync({ force: false });
class ATModel {
  static async updateAt(at) {
    const res = await AT.create({ id: 2, at });
    // const ress = await AT.update({ at }, { where: { id: 2 } });
    return res;
  }

  static async getAt() {
    try {
      const res = await AT.findOne({ where: { id: 2 } });
      console.log(res.dataValues.at);
      return res.dataValues.at;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = ATModel;
