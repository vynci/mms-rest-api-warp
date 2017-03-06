// References
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// Configure Warp Server
var api = require('./app/server/api');

// Configure app
var app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Prepare routes
app.use('/', require('./app/server/routers/index'));
app.use('/api/1', api.router());

// Page not found - Handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use(function(err, req, res, next) {
    console.error('[Error]', err.status, err.message, err.stack, err.result);
    res.status(err.status || 500);
    res.json({ status: err.code || err.status || 404, message: err.message, result: err.result });
});

module.exports = app;