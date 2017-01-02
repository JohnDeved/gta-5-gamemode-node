var express = require('express');
var request = require('request');
var router = express.Router();

var toUnicode = (str) => {
    newStr = ""
    for (var i = 0; i < str.length; i++) {
        newStr += str.charCodeAt(i) + ' '
    }
    return newStr
}

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    GTARequest(router, req, res, 'debug', {
        playerID: req.params.playerID,
        sessionID: req.params.sessionID,
        buttons: {
            execute: JSON.stringify({
                command: 'ADMIN_EVAL',
                args: toUnicode('$("#code").val()'),
                isFnc: true
            }),
            close: JSON.stringify({
                command: 'CEF_CLOSE',
                args: "debugCEF",
                isFnc: false
            })
        }
    })
})

module.exports = router;
