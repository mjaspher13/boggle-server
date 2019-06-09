var router = require('express').Router();
const path = require('path')

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/game/index.html');
});

// wait for other players to join
router.get('/loading', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/game/loading.html');
});

//Tally Score
router.get('/score', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/game/score.html');
});

module.exports = router;  