const fs = require('fs')
const busses = require('../models/busModel')


exports.getBus = async (req, res) => {
    console.log(req.params);
    try {
        const bus = await busses.findOne({
            busReg: req.params.busReg
        })
        res.status(200).json({
            status: 'Success',
            data: {
                bus
            }
        });
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 'Fail',
            message: 'Not found'
        })
    }
    // const tour = tours.find((el) => el.id === id);

};