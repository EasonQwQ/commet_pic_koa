const SequelizeOp = require('sequelize');
const db = require('../config/db');

const { Op } = SequelizeOp;
const Sequelize = db.sequelize;
const feedback = Sequelize.import('../schema/feedback');
feedback.sync({ force: false });
class feedbackModel {
  static async creater(data) {
    const res = await feedback.create(data);
    if (res) {
      return res;
    }
    throw new Error('创建错误');
  }

  static async getListRewardNotNull() {
    const res = await feedback.findAll({
      where: {
        reward: {
          [Op.ne]: null,
        },

      },
      order: [
        ['date', 'DESC'],
      ],
    });
    return res;
  }
}
module.exports = feedbackModel;
