const express = require('express');
const router = express.Router();
const bookingController = require('../../controllers/bookingController');


module.exports = () => {
    router.get('/', bookingController.getEventsByRangeDateFromNow);
    router.get('/searchEvent', bookingController.searchEventById);

    return router;
}