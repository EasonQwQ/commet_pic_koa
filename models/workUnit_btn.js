const db = require('../config/db');

const Sequelize = db.sequelize;
const workUnitBtn = Sequelize.import('../schema/workUnitBtn');
workUnitBtn.sync({ force: false });


class workUnitBtnModel {

}
module.exports = workUnitBtnModel;
