var express = require('express');
var router = express.Router();

router.get('/:playerID?/:sessionID?/:title?/:text?/:icon?/:background?', function(req, res, next) {
    console.log(req.params);
    if (req.params.playerID !== undefined && req.params.sessionID !== undefined) {
        res.render('modal', {
            playerID: req.params.playerID,
            sessionID: req.params.sessionID,
            title: req.params.title || 'Development Server',
            text: req.params.text ? JSON.parse(req.params.text) : ["This Server is currently in development.", " Only developers are arround here, not much to see here.", " want to continue"],
            icon: req.params.icon || 'warning sign icon',
            background: req.params.background || 'rgba(0, 0, 0, 0)'
        });
    } else {
        res.render('invalid');
    }
});

module.exports = router;
