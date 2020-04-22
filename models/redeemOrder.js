const SequelizeOp = require('sequelize');
const db = require('../config/db');

const Sequelize = db.sequelize;
const Redeem = Sequelize.import('../schema/redeemOrders');
const { Op } = SequelizeOp;
Redeem.sync({ force: false });
class RedeemOrderModel {
  static async add(data) {
    const ret = await Redeem.create(data);
    return ret;
  }
}
module.exports = RedeemOrderModel;
