var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    console.log(req.params);
    var toUnicode = (str) => {
        newStr = ""
        for (var i = 0; i < str.length; i++) {
            newStr += str.charCodeAt(i) + ' '
        }
        return newStr
    }
    mysqlVerify = (socialclub_id, session_id) => {
      request({
          url: 'http://185.62.188.120:3001/VerifyUser',
          method: 'post',
          form: {
            socialclub_id: socialclub_id,
            session_id: session_id
          }
      }, function (error, response, body) {
          if(error) {
              mysqlCallback(false);
          } else {
              console.log(response.statusCode, body);
              mysqlCallback(body == "1");
          }
      });
      return true;
    }
    mysqlCallback = (result) => {
        console.log("result is",result);
        if (result) {
            res.setHeader('Access-Control-Allow-Origin', 'http://185.62.188.120:3001/');

            res.render('modal', {
                playerID: req.params.playerID,
                sessionID: req.params.sessionID,
                title: req.params.title || 'Development Server',
                text: req.params.text ? JSON.parse(req.params.text) : ["This Server is currently in development.", " Only developers are arround here, not much to see here.", " want to continue"],
                icon: req.params.icon || 'warning sign icon',
                background: req.params.background || 'rgba(0, 0, 0, 0)',
                buttons: {
                    yes: {
                        command: 'CEF_CLOSE',
                        args: 'modalCEF',
                        isFnc: false
                    },
                    no: {
                        command: 'PLAYER_DISCONNECT',
                        args: "Bye",
                        isFnc: false
                    }
                }
            });
        } else {
            console.log("ERROR: ",result);
            res.render('invalid');
        }
    }
    mysqlVerify(req.params.playerID, req.params.sessionID)
});


module.exports = router;
