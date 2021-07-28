require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var yelpAPIRouter = require("./routes/yelpAPI");
// var indexRouter = require('./routes/index');
var cors = require("cors");
var app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/yelpAPI", yelpAPIRouter);
app.get('*', (req, res) => {
  const filePath = 'client/build/index.html';
  // const resolvedPath = path.resolve(filePath);
  // console.log(resolvedPath);
  res.sendFile(path.join(__dirname, filePath));
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   // res.render('error');
// });

module.exports = app;
