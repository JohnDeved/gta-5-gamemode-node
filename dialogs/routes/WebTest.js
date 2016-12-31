var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:playerID/:sessionID', function(req, res, next) {
    console.log(req.params);
    res.render('WebTest', {
        title: 'WebTest',
        data: req.headers,
        playerID: req.params.playerID,
        sessionID: req.params.sessionID
    });
});

module.exports = router;
