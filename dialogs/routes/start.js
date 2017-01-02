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
                command: 'PLAYER_DISCONNECT',
                args: "Registrierung abgebrochen",
                isFnc: false,
                isObj: false
            },
            erstellen: {
                command: 'REGISTER',
                args: toUnicode(JSON.stringify({
                    vorname: "$('#vorname').val()",
                    nachname: "$('#nachname').val()",
                    gender: "$('#Mann').hasClass('is-checked')"
                })),
                isFnc: false,
                isObj: true
            }
        }
    })
})

module.exports = router;
