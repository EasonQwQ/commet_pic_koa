const SequelizeOp = require('sequelize');
const db = require('../config/db');

const { Op } = SequelizeOp;
const Sequelize = db.sequelize;
const friendCicle = Sequelize.import('../schema/friendCicle');
friendCicle.sync({ force: false });
class friendCicleModel {
  static async creater(data) {
    const res = await friendCicle.create(data);
    if (res) {
      return res;
    }
    throw new Error('创建错误');
  }
}

module.exports = friendCicleModel;
