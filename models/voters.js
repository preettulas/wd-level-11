'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voters extends Model {
  
    static associate(models) {
      
      voters.belongsTo(models.election, {
        foreignKey: "elecId",
      });
    }
    static addVoters(voterId,elecId,password){
      return this.create({
        voterId:voterId,
        voted:false,
        password:password,
        elecId:elecId
      })
    }
    static modify(voterId,password){
      return this.update({
        password:password,
      },
      {
        where:{
          voterId:voterId,
        }
      })
    }
    static getVoters(elecId){
      return this.findAll({
        where:{
          elecId,
        }
      })
    }
    static countVoters(elecId){
      return this.count({
        where:{
          elecId
        }
      })
    }
    static deleteVoter(voterId){
      return this.destroy({
        where:{
          id:voterId
        }
      })
    }
  }
  voters.init({
    voterId: DataTypes.STRING,
    voted: DataTypes.BOOLEAN,
    case: DataTypes.STRING,
    password: DataTypes.STRING,
    elecId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'voters',
  });
  return voters;
};
