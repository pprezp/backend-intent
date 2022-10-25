'use strict';
const moment = require('moment')

/** @type {import('sequelize-cli').Migration} */


const randomDate = () => {

  let random = false;
  let start = moment();
  let end = moment().add(2, 'months');

  random = moment( start.valueOf() + Math.random() * ( end.valueOf() - start.valueOf() ) )
  console.log(random.format('YYYY-MM-DD HH-mm-ss'))
  return random.format('YYYY-MM-DD HH:mm:ss');
}

const randomValue = (min, max) => {

  let random = Math.floor( Math.random() * ( max - min + 1) + min );
  return (random)
}


const fillData = () => {

  let data = [];

  for (let index = 0; index < 50; index++) {
    
    data.push({
      name: 'Descubriéndome desde el cuerpo',
      speaker: 'Mari Sierra',
      description: 'Mar Sierra es educadora somática, danzadora, diseñadora y creadora de programas de bienestar. Funda Cuerpo Criolla para expandir la cultura somática, bajo la premisa de que mente-cuerpo-corazón-creación son un mismo pulso creador y hay que aprender a cultivarlos. Forma parte del equipo fundador de Oye Wellness, una plataforma de bienestar creativo.',
      shortDescription: 'La mujer creativa es la que se conoce.|La que sabe usar su poder en beneficio de todxs.|La que se sabe auto-regular, sanar y sana a lxs demás con su mera presencia.|En este taller nos acercamos al campo sutil de la energía vibrando en el cuerpo.|Tocaremos los lugares donde la energía no fluye idóneamente. Reconocemos el eco de las heridas del pasado que carga nuestra postura. Las danzamos, las nombramos e incluso las trazamos en un mapa para transmutarlas y liberarlas. Parte clase de movimiento consciente, parte meditación de regresión y parte arte-terapia, Mar Sierra nos guiará por una potente reconexión con las historias que habitan en nuestros cuerpos.|Un ritual para honrar el cuerpo como vasija de nuestra fuerza creadora.',
      date: randomDate(),
      location: 'Casa in-Tent Orizaba 101, Roma Norte. CDMX.',
      bannerurl: 'https://sms.comonsens.com.mx/assets/Imagenes/taller1.jpeg',
      storeurl: 'https://store.in-tent.mx/products/26oct22-power-yoga-con-jaque-meschoulam',
      type: randomValue(1,2)
    })
    
  }



  return data;
}

var data = fillData()
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('booking', data,{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
