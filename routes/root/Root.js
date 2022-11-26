const express = require('express');
const router = express.Router();


module.exports = () => {
    router.get('/', (req, res) => {
        res.status(200).send("Has entrado al root del backend")
    });

    return router;
}