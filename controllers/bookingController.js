const booking = require('../models').booking;
const moment = require('moment')

exports.getEventsByRangeDateFromNow = async (req, res) => {

    /**
     * @params  monthDate = anno-month (2022-10)
     *
     */
    const { eventType, monthDate } = req.query;

    let date = moment();
    let startDate = moment(monthDate + '-01');
    let endDate = moment(monthDate + '-01').add(1, 'months').format('YYYY-MM-DD');

    startDate = ( date.isAfter(startDate) ) ? date.format('YYYY-MM-DD') : startDate.format('YYYY-MM-DD');

    try {
        let eventos = (eventType < 3) ? await booking.searchEventsByType(eventType, startDate, endDate) : await booking.searchEvents(startDate, endDate);
        if( eventos.length > 0 ){
            res.status(200).json({
                error: false,
                data: eventos
            });
        }else{
            res.status(200).json({
                error: false,
                message: "No se han encontrado eventos creados."
            });
        }
    } catch (error) {
        console.log(error)
        res.status(200).send({
            error: true,
            message: "Ha ocurrido un error, intentalo de nuevo."
        });
    }
}

exports.searchEventById = async(req, res, next) => {
    let { idEvento } = req.query;
    try {
        let evento = await booking.searchEventsById(idEvento);
        if (evento) {
            res.status(200).json({
                success: true,
                evento: evento
            });
        }else{
            res.status(200).json({
                success: false
            });            
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
}