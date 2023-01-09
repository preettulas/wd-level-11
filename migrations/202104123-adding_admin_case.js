'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Admins", "case", {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "admin" ,
    });
  
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn("Admins", "case");
        
  }
};
