var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// server start
async function recreateDB() {
  // Delete everything
  await winter.deleteMany();
  let instance1 = new
  winter({
    wTemp:70,
    wArea:"Maryville",
    wMonth:"Sept"
  });
  let instance2 = new
  winter({
    wTemp:55,
    wArea:"Kansas City",
    wMonth:"Oct"
  });
  let instance3 = new
  winter({
    wTemp:40,
    wArea:"St. Louis",
    wMonth:"Nov"
  });  
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var winterRouter = require('./routes/winter');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
const winter = require('./models/winter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/winter', winterRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
