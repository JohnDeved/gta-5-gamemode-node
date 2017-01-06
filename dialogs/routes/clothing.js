var express = require('express')
var router = express.Router()

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    GTARequest(router, req, res, 'clothing', {
        playerID: req.params.playerID,
        sessionID: req.params.sessionID,
        buttons: {
            yes: {
                command: 'CEF_CLOSE',
                args: 'modalCEF',
                isFnc: false,
                isObj: false
            },
            no: {
                command: 'PLAYER_DISCONNECT',
                args: 'Bye',
                isFnc: false,
                isObj: false
            }
        }
    })
})

module.exports = router
