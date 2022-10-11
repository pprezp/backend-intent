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
      name: 'Taller num ' + (index + 1),
      speaker: 'Pablo Perez',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis turpis a massa vulputate semper. Suspendisse vel pretium orci. Mauris suscipit dui et ultrices aliquet. Fusce accumsan consequat nulla vitae lobortis.',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis turpis a massa vulputate semper. Suspendisse vel pretium orci. Mauris suscipit dui et ultrices aliquet. Fusce accumsan consequat nulla vitae lobortis.',
      date: randomDate(),
      status: 1,
      type: randomValue(1,2),
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
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
