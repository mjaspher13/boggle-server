var UserModel = require('../../app/Models/user');
var UserController = require('../../app/Http/Controllers/User/UserController');
const userCtrl = new UserController(UserModel);
var router = require('express').Router();

// individual server routes
router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +'/resources/views/player/index.html');
});

router.post('/register',userCtrl.create);

module.exports = router;  
