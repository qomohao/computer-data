var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入数据库模块开始
//连接数据库
let mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/computerData");
//数据库连接状态
let db = mongoose.connection;
//数据库连接成功
db.on('open',function () {
  console.log('数据库连接成功!');
});
//数据库连接失败
db.on('error',function (err) {
  console.log(err.stack);
  console.log("数据库连接失败！");
});
// 引入数据库模块结束

// 路由模块导入开始
var goods = require('./routes/goods');
var order = require('./routes/order');
var users = require('./routes/users');
// 路由模块导入结束
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由使用开始
app.use('/goods', goods);
app.use('/order', order);
app.use('/users', users);
// 路由使用结束

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
