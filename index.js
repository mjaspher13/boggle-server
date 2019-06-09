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
const port = 3000;
// Create WebApp Server
const app = express()
// Logger
const logger = require('morgan');
// Body-parser
const bodyParser = require('body-parser');
// Use Passport for Auth
var passport = require('passport');

var http = require('http').createServer(app);
// DB Connection
require("./database/connection")
// Include Socket.io 
var io = require('socket.io')(http);

require('./config/passport.js')(passport);

// Log requests to the console.
// app.use(logger('dev'));

var myStore = new SequelizeStore({
    db: sequelize
})
app.use(session({
    genid: (req) => {
        // console.log('Inside session middleware genid function')
        // console.log(`Request object sessionID from client: ${req.sessionID}`)
        return uuid() // use UUIDs for session IDs
    },
    secret: 'word cosmos',
    store: myStore,
    resave: true,
    saveUninitialized: true,
    proxy: true
}))

myStore.sync();


// app.use(Cors);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Initialiaze Passport
app.use(passport.initialize());
// User passport for sessions
app.use(passport.session());


// Static File Path
app.use(express.static('public/'))

// Route
// mount the router on the app
app.use('/', require('./routes/router'));

var countOfPlayers = 0
var timer = 30
var time;
var timeleft = timer

// Check if player connected
io.on('connect', onConnect);

function onConnect(socket) {
    countOfPlayers = socket.client.conn.server.clientsCount - 1

    io.emit('playerLobby', {
        playerCount: countOfPlayers
    })

    countDown(socket, countOfPlayers)

    // Check if player disconnected
    socket.on('disconnect', function () {
        countOfPlayers = socket.client.conn.server.clientsCount - 1
        io.emit('playerLobby', {
            playerCount: countOfPlayers
        })

        countDown(socket, countOfPlayers)
    })

}

function countDown(socket, countOfPlayers) {

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

const server = http.listen(port, () => {
    console.log('Listening on port:', port);
});