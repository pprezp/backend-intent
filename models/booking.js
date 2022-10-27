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
    description: DataTypes.STRING(1000),
    shortDescription: DataTypes.STRING(1000),
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    bannerurl: DataTypes.STRING,
    storeurl: DataTypes.STRING,
    type: DataTypes.TINYINT,
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
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
      order:[
        ['date', 'ASC']
      ]
      ,
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
      order:[
        ['date', 'ASC']
      ],
      limit: 12
    });
    return eventos;
  }

  return booking;
};