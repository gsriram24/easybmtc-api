const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

const busRouter = require('./routes/busRoute');
app.use('/api/v1/busses', busRouter);
module.exports = app;
