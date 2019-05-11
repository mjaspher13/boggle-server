// create new Router instance for api routes
var router = require('express').Router();

router.use('/', require('./player')); 
router.use('/server', require('./server')); 

module.exports = router;

