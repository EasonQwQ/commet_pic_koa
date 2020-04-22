const moment = require('moment');

module.exports = (sequelize, DataTypes) => sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'name',
  },
  openid: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'openid',
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'token',
  },
  sex: {
    field: 'sex',
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  mobile: {
    field: 'mobile',
    allowNull: true,
    type: DataTypes.STRING,
  },
});
