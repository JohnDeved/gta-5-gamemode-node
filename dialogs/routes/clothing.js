var express = require('express')
var router = express.Router()

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    GTARequest(router, req, res, 'clothing', {
        playerID: req.params.playerID,
        sessionID: req.params.sessionID,
        buttons: {
            buy: {
                command: 'CEF_CLOSE',
                args: 'clothCEF',
                isFnc: false,
                isObj: false
            },
            select: {
                command: 'CEF_CLOSE',
                args: 'clothCEF',
                isFnc: false,
                isObj: false
            },
            close: {
                command: 'CEF_CLOSE',
                args: 'clothCEF',
                isFnc: false,
                isObj: false
            }
        }
    }, "getAllClothes")
})

module.exports = router
