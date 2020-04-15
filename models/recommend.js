const SequelizeOp = require('sequelize');
const db = require('../config/db');

const { Op } = SequelizeOp;
const Sequelize = db.sequelize;
const recommend = Sequelize.import('../schema/recommend');
recommend.sync({ force: false });
class recommendModel {
  static async add(data) {
    const ret = await recommend.create(data);
    return ret;
  }

  static async creater(data) {
    const ret = await recommend.create(data);
    return ret;
  }
}
module.exports = recommendModel;
