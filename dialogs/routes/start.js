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
    GTARequest(router, req, res, 'start', {
        playerID: req.params.playerID,
        sessionID: req.params.sessionID,
        buttons: {
            abbrechen: {
                command: 'CEF_CLOSE',
                args: "startCEF"
            },
            erstellen: {
                command: 'REGISTER',
                args: toUnicode(JSON.stringify({
                    vorname: "$('#vorname').val()",
                    nachname: "$('#nachname').val()",
                    gender: "$('#Mann').hasClass('is-checked')"
                })),
                isObj: true
            }
        }
    })
})

module.exports = router;
