const express = require('express');
const busController = require('./../controllers/busController');
// eslint-disable-next-line new-cap
const router = express.Router();

router.route('/:busReg').get(busController.getBus);

module.exports = router;
