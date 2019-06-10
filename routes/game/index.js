var router = require('express').Router();
const path = require('path')
const exec = require('child_process').exec;

// individual server routes
router.get('/', function (req, res, next) {
  res.sendFile(process.cwd() + '/resources/views/game/index.html');
});

router.get('/ongoing', function (req, res, next) {
  res.sendFile(process.cwd() + '/resources/views/game/ongoing.html');
});

// wait for other players to join
router.get('/loading', function (req, res, next) {
  res.sendFile(process.cwd() + '/resources/views/game/loading.html');
});

//Tally Score
router.get('/score', function (req, res, next) {
  res.sendFile(process.cwd() + '/resources/views/game/score.html');
});

router.get('/shake', function (req, res, next) {

  // exec('python /home/pi/shaker.py', (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);
  // })

  // setTimeout(function () {
  //   console.log('capture image')

  //   exec('/home/pi/capture.sh', (err, stdout, stderr) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(stdout);
  //   })


  // }, 25000);
  res.sendFile(process.cwd() + '/resources/views/game/shaker.html');
});


router.get('/reshake', function (req, res, next) {

  exec('python /home/pi/shaker.py', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  })

  setTimeout(function () {
    console.log('capture image')

    exec('/home/pi/capture.sh', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    })


  }, 25000);
  res.sendFile(process.cwd() + '/resources/views/game/shaker.html');
});

module.exports = router;  