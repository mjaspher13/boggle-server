var router = require('express').Router();
const path = require('path')

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/server/index.html');
	
});

// individual server routes
router.get('/ingame', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/server/inprogress.html');
	
});

module.exports = router;
