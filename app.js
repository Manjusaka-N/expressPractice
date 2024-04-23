require('module-alias/register')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const timeout = require('connect-timeout');   //请求超时中间件

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/db');
var testRouter = require('./routes/test');
var loginRouter = require('./routes/login');
var imageRouter = require('./routes/image');


const StatusResult = require('@/result/statusResult')
// 添加别名的路径到 Node.js 的模块解析中
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 设置超时时间为5秒s
app.use(timeout('5s'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/db', myController,dbRouter);
app.use('/test', testRouter);
app.use('/login', loginRouter);
app.use('/image', imageRouter);

// catch 404 and forward to error handler


// app.use(function(req, res, next) {
//   next(createError(404));
// });

function myController(req, res, next) {
  next()
};


app.get('*', function (req, res) {
  // res.send('404 not found', 404);
  return res.status(404).send(StatusResult.apiNotFound(null));
});



// 控制器函数


// 请求超时中间件
app.use(function (err, req, res, next) {
  if (req.timedout === true) {
    if (res.headersSent) {
      next(err);
    } else {
      return res.status(503).send(StatusResult.timeOut(null));
    }
  } else {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('未知异常！');
  }
});


// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('未知异常！');
// });

module.exports = app;
