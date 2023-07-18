const { DataTypes } = require('sequelize')
const database = require('../../config/database')

// Transaction Model
module.exports = database.define('transaction', {
  label: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
})
