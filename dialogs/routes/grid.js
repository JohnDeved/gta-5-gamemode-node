var express = require('express')
var request = require('request')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.render('grid')
})

module.exports = router
