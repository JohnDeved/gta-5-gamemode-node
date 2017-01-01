var express = require('express');
var router = express.Router();

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    console.log(req.params);
    if (req.params.playerID !== undefined && req.params.playerID !== undefined) {
        res.setHeader('Access-Control-Allow-Origin', 'http://185.62.188.120:3001/');
        var toUnicode = (str) => {
            newStr = ""
            for (var i = 0; i < str.length; i++) {
                newStr += str.charCodeAt(i) + ' '
            }
            return newStr
        }

        res.render('debug', {
            playerID: req.params.playerID,
            sessionID: req.params.sessionID,
            buttons: {
                execute: {
                    command: 'ADMIN_EVAL',
                    args: toUnicode('document.getElementById("code").value'),
                    isFnc: true
                },
                close: {
                    command: 'CEF_CLOSE',
                    args: "debugCEF",
                    isFnc: false
                }
            }
        });
    } else {
        res.render('invalid');
    }
});

module.exports = router;
