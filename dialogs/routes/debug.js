var express = require('express')
var request = require('request')
var router = express.Router()

var toUnicode = (str) => {
    newStr = ''
    for (var i = 0; i < str.length; i++) {
        newStr += str.charCodeAt(i) + ' '
    }
    return newStr
}

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    request({
        url: config.UDPlistener + 'getAllPlayers',
        method: 'post',
        form: {
            socialclub_id: socialclub_id,
            session_id: session_id
        }
    }, function(error, response, body) {
        if (error || body == 0) {
            error = error || body == 0 ? 'versuchter getAllPlayers zugriff!' : 'undefined'
            console.log('getAllPlayers POST error:',error)
        } else {
            var allPlayers = JSON.parse(body)
            GTARequest(router, req, res, 'debug', {
                playerID: req.params.playerID,
                sessionID: req.params.sessionID,
                allPlayers: allPlayers,
                buttons: {
                    execute: {
                        command: 'ADMIN_EVAL',
                        args: toUnicode('$("#code").val()'),
                        isFnc: true,
                        isObj: false
                    },
                    close: {
                        command: 'CEF_CLOSE',
                        args: 'debugCEF',
                        isFnc: false,
                        isObj: false
                    }
                }
            })
        }
    })
})

module.exports = router
