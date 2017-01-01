var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    GTARequest(router, req, res, 'start', {
        playerID: req.params.playerID,
        sessionID: req.params.sessionID,
        buttons: {
            abbrechen: {
                command: 'CEF_CLOSE',
                args: "startCEF",
                isFnc: false
            },
            erstellen: {
                command: 'CEF_CLOSE',
                args: "startCEF",
                isFnc: false
            }
        }
    })
})

module.exports = router;
