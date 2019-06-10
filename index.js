// Include Express Framework
const express = require('express')
// // CORS
// const Cors = require('cors')
// Random generate token
const uuid = require('uuid/v4')
// Session
const session = require('express-session')
// Sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// Define Port
const port = 4000;
// Create WebApp Server
const app = express()
// Logger
const logger = require('morgan');
// Body-parser
const bodyParser = require('body-parser');
// Use Passport for Auth
var passport = require('passport');
// OS
var os = require('os');

var networkInterfaces = os.networkInterfaces();

var http = require('http').createServer(app);
// DB Connection
//require("./database/connection")


require('./config/passport.js')(passport);

// Log requests to the console.
// app.use(logger('dev'));




// app.use(Cors);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Initialiaze Passport



// Static File Path
app.use(express.static('public/'))

// Route
// mount the router on the app
app.use('/', require('./routes/router'));

var countOfPlayers = 0
var timer = 30
var time;
var timeleft = timer
var players = [];

const server = http.listen(port, '', () => {

});

var ip = require("ip");

console.log('Listening on IP:' + ip.address());
console.dir ( ip.address() );

// Include Socket.io 
var io = require('socket.io').listen(server); // Check if player connected
io.on('connect', onConnect);

function onConnect(socket) {

    socket.emit('connected', {
        'ip': ip.address(),
        'port': port
    })

    socket.on('playerLogin', function (data) {
        
        players.push({
            "username": data.playerName,
            "socket_id": socket.id
        })
        countOfPlayers = players.length
        countDown(countOfPlayers)
        io.emit('playersConnected', { 'count': countOfPlayers });
        console.log(io.sockets.clients());
        //console.log("Connected---"+players);
    })

    // Check if player disconnected
    socket.on('disconnect', function () {
        //players.filter(el => el['socket_id'] !== socket.id);
        players = players.filter(player => {
            
            return player.socket_id !== socket.id
        }
        )
        countOfPlayers = players.length
        countDown(countOfPlayers)
        io.emit('playersConnected', { 'count': countOfPlayers });
        //console.log(io.sockets.clients());
        console.log("Disconnected---" + socket.id)
    })

}

function countDown(countOfPlayers) {

    if (countOfPlayers > 1) {
        startTime(true)
    } else {
        startTime(false)
    }
}

function startTime(start) {
    if (start == true) {
        time = setInterval(function () {
            if (timeleft > 0 && start == true) {
                --timeleft
                io.emit('timer', {
                    time: timeleft
                });
            }
        }, 1000)
    } else {
        clearInterval(time);
        timeleft = timer
        io.emit('timer', {
            time: timeleft
        });
    }
}

function countReset() {
    io.emit('timer', {
        time: timer
    });
}