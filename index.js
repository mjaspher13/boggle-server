// Include Express Framework
const express = require('express')
// Env
const { port } = require('./config/config');
// Random generate token
const uuid = require('uuid/v4')
// Session
const session = require('express-session')
// Sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store)
// Define Port
// const port = process.env.PORT;
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
app.use(logger('dev'));

var myStore = new SequelizeStore({
    db: sequelize
})
app.use(session({
    genid: (req) => {
        console.log('Inside session middleware genid function')
        console.log(`Request object sessionID from client: ${req.sessionID}`)
        return uuid() // use UUIDs for session IDs
    },
    secret: 'word cosmos',
    store: myStore,
    resave: true,
    saveUninitialized: true,
    proxy: true
}))

myStore.sync();

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
app.use(express.static('public'))

// Route
// mount the router on the app
app.use('/', require('./routes/router'));

var countOfPlayers = 0
var timer = 30

// Check if player connected
io.on('connect', onConnect);



function onConnect(socket) {
    countOfPlayers = socket.client.conn.server.clientsCount
    io.emit('playerLobby', {
        playerCount: countOfPlayers
    })

    countDown(socket, countOfPlayers)
    
    // Check if player disconnected
    socket.on('disconnect', function () {
        countOfPlayers = socket.client.conn.server.clientsCount
        io.emit('playerLobby', {
            playerCount: countOfPlayers
        })

        countDown(socket, countOfPlayers)
    })

}

function countDown(socket, countOfPlayers) {

    if (countOfPlayers > 1) {
        startTime()
    } else {
        countReset();
    }
}


function startTime() {
    var timeleft = time;
    var downloadTimer = setInterval(function () {
        timeleft -= 1;
        if (timeleft <= 0 || start == false) {
            io.emit('timer', {
                time: timeleft
            });
            clearInterval(downloadTimer);
        }
    }, 1000);
}

function countReset() {

    io.emit('timer', {
        time: timer
    });
}




// io.on('connection', function(socket) {

//     countOfPlayers =  socket.client.conn.server.clientsCount
//     socket.emit('playerLobby', {playerCount: countOfPlayers })
//     console.log(countOfPlayers);

//     if( countOfPlayers < 4 )
//     {


//     }
//     else
//     {
//         console.log('You cannot enter!');
//     }
//     //
//     // checkClientList()
//     socket.on('startgame', (msg) => {
//         // Trigger boggle Shaker
//         //Get all Letters [];
//          // -- Server is checking for all possible words
//         //Throw to all Players
//         //sync time ()
//         // start count down
//         // Game Start()
//     });

//     socket.on('endgame', (msg) => {
//         //STore in temp array/ Db
//         // Eliminate All words that are same/ or used twice
//         // CHeck if word is valid
//         //Compare all words check if correct from boggle server AI results
//         //Tally Score
//         //Game is Over

//     });

//     // Check if user disconnected
//     socket.on('disconnect', () => {
//         console.log(`Socket ${socket.id} disconnected.`);
//         countOfPlayers = socket.client.conn.server.clientsCount
//         socket.emit('playerLobby', {playerCount: countOfPlayers })
//     });
// });

// // Check Socket Client List
// function checkClientList() {
//     io.clients((error, clients) => {
//         if (error) throw error;
//         console.log(clients)
//         return clients.length
//     })
// }

const server = http.listen(port, () => {
    console.log('Listening on port:', server.address().port);
});