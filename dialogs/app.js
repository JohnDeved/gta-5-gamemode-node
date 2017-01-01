var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

mysqlVerify = (socialclub_id, session_id) => {

    if(!socialclub_id || !session_id) {
        console.log("Invalid!");
        return false;
    } else {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'EKbYU6DJNVEwpDTJNFwV3jiG3',
            database: 'gta_server'
        });

        connection.connect();

        connection.query('SELECT IFNULL((SELECT (session_id = \''+session_id+'\') FROM security WHERE socialclub_id=\''+socialclub_id+'\'),0) AS valid', function(err, results, fields) {
            console.log("RES: ",(results[0].valid));
            connection.end();
            return results[0].valid;
        });
    }
}

var WebTest = require('./routes/WebTest');
var modal = require('./routes/modal');
var debug = require('./routes/debug');
var start = require('./routes/start');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/WebTest', WebTest);
app.use('/modal', modal);
app.use('/debug', debug);
app.use('/start', start);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
