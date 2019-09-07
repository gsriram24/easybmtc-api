/* eslint-disable max-len */
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

const busRouter = require('./routes/busRoute');
app.get('/', function(req, res) {
  res.send('Welcome to this API! Navigate to /api/v1/busses/:busReg to view the results!');
});
app.use('/api/v1/busses', busRouter);
module.exports = app;
