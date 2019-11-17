const express = require('express');
const ticketController = require('./../controllers/ticketController');
const ticketRouter = express.Router();

ticketRouter.route('/').post(ticketController.createTicket);
ticketRouter.route('/:id').get(ticketController.getTicket);

module.exports = ticketRouter;
