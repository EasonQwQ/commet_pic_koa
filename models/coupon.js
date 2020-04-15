const SequelizeOp = require('sequelize');
const db = require('../config/db');

const Sequelize = db.sequelize;
const Coupon = Sequelize.import('../schema/coupon');
const { Op } = SequelizeOp;
Coupon.sync({ force: false });
class CouponModel {
  static async add(data) {
    const ret = await Coupon.create(data);
    return ret;
  }
}
module.exports = CouponModel;
