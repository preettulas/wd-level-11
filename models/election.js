'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class election extends Model {
  
    static getElections(adminId) {
      return this.findAll({
        where:{
          adminId,
        },
        order:[["id","ASC"]]
      })
    }
    static startElection(id){
      return this.update({
        start:true,
      },
      {
        where:{
          id : id
        }
      })
    }
    static endElection(id){
      return this.election.update({
        end:true,
      },
      {
        where:{
          id:id
        }
      })
    }
    static addElection({elecName,publicurl,adminId}){
      return this.create({
        elecName,
        publicurl,
        adminId,
      })
    }
  
  static associate(models) {
    // define association here
    election.belongsTo(models.Admin, {
      foreignKey: "adminId",
    });
    election.hasMany(models.question,{
      foreignKey: "elecId"
    });
    election.hasMany(models.voters,{
      foreignKey: "elecId"
    })
  }
}
  election.init({
    elecName: DataTypes.STRING,
    start: DataTypes.BOOLEAN,
    end: DataTypes.BOOLEAN,
    publicurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'election',
  });
  return election;
};
