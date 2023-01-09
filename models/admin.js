'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    
    static associate(models) {
      // define association here
      Admin.hasMany(models.election, {
        foreignKey: "adminId",
      });
    }
  }
  Admin.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    case:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
