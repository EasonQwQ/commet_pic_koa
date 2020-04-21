const db = require('../config/db');

const Sequelize = db.sequelize;
const workUnit = Sequelize.import('../schema/workUnit');
const workUnitBtn = Sequelize.import('../schema/workUnitBtn');
workUnit.sync({ force: false });

class workUnitModel {
  static async getByfullName(name) {
    const isoTime = new Date().valueOf();
    workUnit.hasMany(workUnitBtn, {
      as: `wk_btns${isoTime}`,
      foreignKey: 'btn_id',
      sourceKey: 'button_id',
    });

    const ret = await workUnit.findOne({

      where: {
        full_name: name,
      },
      include: [{
        model: workUnitBtn, // 指定关联的model
        as: `wk_btns${isoTime}`, // 由于前面建立映射关系时为class表起了别名，那么这里也要与前面保持一致，否则会报错
      }],
    });
    // ret.dataValues.isoTime = isoTime;
    if (ret.dataValues) {
      console.log(ret.dataValues);
      ret.dataValues.isoTime = isoTime;
    }
    return ret;
  }
}

module.exports = workUnitModel;
