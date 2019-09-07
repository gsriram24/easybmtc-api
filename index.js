const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');

app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.static('public'))
// const tourRouter = require('./routes/tourRoutes')
// const userRouter = require('./routes/userRoutes')
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);
module.exports = app