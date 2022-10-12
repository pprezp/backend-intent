'use strict';
const {
  Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    clBooking:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    speaker: DataTypes.STRING,
    description: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    date: DataTypes.DATE,
    bannerurl: DataTypes.STRING,
    status: DataTypes.TINYINT,
    type: DataTypes.TINYINT,

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'booking',
    freezeTableName: true
  });

  booking.searchEventsById = async (id) => {
    let evento = await booking.findOne({
      where:{
        clBooking: id
      }
    });
    return evento
  }

  booking.searchEventsByType = async (type, startDate, endDate) => {
    let eventos = await booking.findAll({
      where:{
        type: type,
        status: 1,
        date:{
          [ Op.between ]: [ startDate, endDate ]
        }
      },
      limit: 8
    });
    return eventos;
  }

  booking.searchEvents = async(startDate, endDate) => {
    let eventos = await booking.findAll({
      where:{
        status:1,
        date:{
          [ Op.between ]: [ startDate, endDate ]
        }
      },
      limit: 12
    });
    return eventos;
  }

  return booking;
};