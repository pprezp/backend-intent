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
      description: Sequelize.STRING,
      shortDescription: Sequelize.STRING,
      date: Sequelize.DATE,
      bannerurl: Sequelize.STRING,
      status: Sequelize.TINYINT,
      type: Sequelize.TINYINT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};