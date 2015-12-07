var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var md5 = require('MD5');

var routes = require('./routes/index');
var worker = require('./routes/worker');
var type = require('./routes/type');

var app = express();

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Allow Cross Domain
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,Connection,'
        + 'Content-Length,X-Requested-With,X-Powered-By,ETag,Accept,Cache-Control,Pragma'
        + 'Referer,Origin,Host,Accept-Encoding,Accept-Language');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.status(200).end();
    }
    else {
      next();
    }
});

app.use('/', routes);
app.use('/worker',worker);
app.use('/type', type);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
