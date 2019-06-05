var router = require('express').Router();
const path = require('path')

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/game/index.html');
});

router.get('/score', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/game/score.html');
});

module.exports = router;  