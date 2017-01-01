var express = require('express');
var request = require('request');
var router = express.Router();

GTARequest(router, '/:playerID?/:sessionID?', 'start', {
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

module.exports = router;
