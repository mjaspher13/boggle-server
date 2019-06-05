var router = require('express').Router();
const path = require('path')

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/server/index.html');
});

module.exports = router;
