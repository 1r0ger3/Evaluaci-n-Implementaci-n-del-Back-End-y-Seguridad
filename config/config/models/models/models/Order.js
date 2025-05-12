const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  total: DataTypes.FLOAT,
});

module.exports = Order;
