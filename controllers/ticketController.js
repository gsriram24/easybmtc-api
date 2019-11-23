const ticket = require('../models/ticketModel');

exports.createTicket = async (req, res) => {
  // console.log(req.body)
  try {
    const newTicket = await ticket.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {ticket: newTicket},
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getTicket = async (req, res) => {
  console.log(req.params);
  try {
    const ticket1 = await ticket.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: {
        ticket1,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: 'Not found',
    });
  }
  // const tour = tours.find((el) => el.id === id);
};
