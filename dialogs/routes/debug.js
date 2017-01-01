var express = require('express');
var router = express.Router();

router.get('/:playerID?/:sessionID?', function(req, res, next) {
    console.log(req.params);
    if (req.params.playerID !== undefined && req.params.playerID !== undefined) {
        res.render('debug', {
            playerID: req.params.playerID,
            sessionID: req.params.sessionID
        });
    } else {
        res.render('invalid');
    }
});

module.exports = router;
