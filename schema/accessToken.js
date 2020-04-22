const moment = require('moment');

module.exports = (sequelize, DataTypes) => sequelize.define('access_token', {

  at: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'at',
  },
}, {
  timestamps: true,
});
