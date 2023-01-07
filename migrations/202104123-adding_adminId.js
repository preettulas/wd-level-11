'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("elections", "adminId", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("elections",{
      fields: ["adminId"],
      type: "foreign key",
      references: {
        table: "Admins",
        field: "id",
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("elections", "adminId");
    
  }
};
