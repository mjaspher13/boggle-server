var router = require('express').Router();

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile('index.html', {root: './resources/views/game'});
});

router.get('/score', function(req, res, next) {
	res.sendFile('score.html', {root: './resources/views/game'});
});

module.exports = router;  