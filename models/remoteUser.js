
const db = require('../config/remoteDb');

const Sequelize = db.sequelize;
const RemoteUser = Sequelize.import('../schema/remoteUser');
RemoteUser.sync({ force: false });
class RemoteUserModel {
  static async getAllUser() {
    try {
      const ret = await RemoteUser.findAll();
      return ret;
    } catch (err) {
      console.log('err', '在models创建失败');
      console.log('errr', err);
      return false;
    }
  }

  // static async getByid(data) {
  //   const { id } = data;
  //   try {
  //     const res = await User.findOne({
  //       attributes: ['id', 'discount11', 'discount11status', 'has11Discount'],
  //       where: {
  //         id,
  //       },
  //     });
  //     if (res) {
  //       return res;
  //     }
  //     return this.add(data);
  //   } catch (err) {
  //     console.log('error models:', err);
  //     throw new Error('error models:', err);
  //   }
  // }

  // static async updateDiscount(id, discount11) {
  //   try {
  //     const ret = await User.update({
  //       discount11,
  //     }, {
  //       where: {
  //         id,
  //       },
  //     });
  //     console.log('retdiscount11', ret);
  //     return ret;
  //   } catch (err) {
  //     console.log('err', err);
  //     return false;
  //   }
  // }

  // static async updateDiscountStatus(id, status) {
  //   try {
  //     const ret = await User.update({
  //       discount11status: status,
  //     }, {
  //       where: {
  //         id,
  //       },
  //     });
  //     return ret;
  //   } catch (err) {
  //     console.log('err', err);
  //     return false;
  //   }
  // }

  // static async get11Status(id) {
  //   try {
  //     const ret = await User.findOne({
  //       where: {
  //         id,
  //       },
  //     });
  //     return ret;
  //   } catch (err) {
  //     console.log('err', err);
  //     return false;
  //   }
  // }
}
module.exports = RemoteUserModel;
