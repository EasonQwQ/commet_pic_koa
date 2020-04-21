const moment = require('moment');

module.exports = (sequelize, DataTypes) => sequelize.define('pictures', {
  longurl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'longurl',
  },
  shorturl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'shorturl',
  },
  imgurl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'imgurl',
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'uid',
  },
  longterm: {
    field: 'longterm',
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  deleted: {
    field: 'deleted',
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  trace_id: {
    field: 'trace_id',
    allowNull: true,
    type: DataTypes.INTEGER,
  },

});
