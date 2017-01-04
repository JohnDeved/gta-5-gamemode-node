var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var request = require('request')

debugModus = false

var toUnicode = (str) => {
    newStr = ''
    for (var i = 0; i < str.length; i++) {
        newStr += str.charCodeAt(i) + ' '
    }
    return newStr
}

GTARequest = (router, req, res, renderPage, renderPageParms) => {
    console.log(req.params)

    mysqlVerify = (socialclub_id, session_id) => {
        request({
            url: 'http://185.62.188.120:3001/VerifyUser',
            method: 'post',
            form: {
                socialclub_id: socialclub_id,
                session_id: session_id
            }
        }, function(error, response, body) {
            if (error) {
                mysqlCallback(false)
            } else {
                console.log(response.statusCode, body)
                mysqlCallback(body == '1')
            }
        })
    }
    mysqlCallback = (result) => {
        console.log('result is', result)
        if ((result || debugModus) && (req.params.playerID && req.params.sessionID)) {
            res.setHeader('Access-Control-Allow-Origin', 'http://185.62.188.120:3001/')

            res.render(renderPage, renderPageParms)
        } else {
            console.log('ERROR:', result)
            res.render('invalid')
        }
    }
    mysqlVerify(req.params.playerID, req.params.sessionID)
}

var modal = require('./routes/modal')
var debug = require('./routes/debug')
var start = require('./routes/start')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/modal', modal)
app.use('/debug', debug)
app.use('/start', start)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
