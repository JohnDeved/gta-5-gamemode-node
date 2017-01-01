var express = require('express');
var request = require('request');
var router = express.Router();

GTARequest(router, '/:playerID?/:sessionID?', 'start', {
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
