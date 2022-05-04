var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var history = require('connect-history-api-fallback');
var cors = require('cors');

var indexRouter = require('./routes/index');
var memoRouter = require('./routes/apimemo');
var commentRouter = require('./routes/apicomment');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(history());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/memo', memoRouter);
app.use('/api/comment', commentRouter);

module.exports = app;
