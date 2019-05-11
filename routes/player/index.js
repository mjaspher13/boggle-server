var router = require('express').Router();

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile('index.html', {root: './resources/views/player'});
});

module.exports = router;  
