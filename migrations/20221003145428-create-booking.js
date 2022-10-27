'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking', {
      clBooking: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: Sequelize.STRING,
      speaker: Sequelize.STRING,
      description: Sequelize.STRING(1000),
      shortDescription: Sequelize.STRING(1000),
      date: Sequelize.DATE,
      location: Sequelize.STRING,
      bannerurl: Sequelize.STRING,
      storeurl: Sequelize.STRING,
      status:{ 
        type: Sequelize.TINYINT,
        defaultValue: 1
      },
      type: Sequelize.TINYINT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};