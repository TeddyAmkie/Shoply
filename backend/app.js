
const express = require('express');
const ExpressError = require('./helpers/expressError');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// var whitelist = ['http://localhost:3000', 'http://localhost:3001']

// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors());

app.use(express.json());

// add logging system
app.use(morgan('tiny'));


// Routes

const productRoutes = require("./routes/products");


app.use('/products', productRoutes);
// app.use('/cart', orderingRoutes)


/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.error(err.stack);

  return res.json({
    status: err.status,
    message: err.message
  });
});


module.exports = app;
