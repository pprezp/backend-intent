const bodyParser    = require("body-parser");
const express       = require ("express");
const dotenv        = require('dotenv');
const path          = require('path');
const app           = express();
const cors          = require('cors');

/**Seteando configuracion de las variables de entorno */
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});
const port    = process.env.PORT;

/* Importacion de rutas del backend */
const booking = require('./routes/booking/Booking');


app.use( cors({
  origin: '*',
}) )

app.use(bodyParser.json())
app.use( bodyParser.urlencoded( { extended: false } ) );

/**USo de las rutas importadas */
app.use('/booking', booking())


app.listen(port,  () => {
    console.log('Servidor iniciado en el puerto: ' + port);
})