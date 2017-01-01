var express = require('express');
var request = require('request');
var router = express.Router();

GTARequest(router, '/:playerID?/:sessionID?', 'modal', {
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
})

module.exports = router;
