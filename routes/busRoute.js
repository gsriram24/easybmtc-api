const express = require('express')
const busController = require('./../controllers/busController')
const router = express.Router();

router.route('/:busReg').get(busController.getBus)

module.exports = router