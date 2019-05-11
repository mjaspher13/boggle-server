// Include Express Framework
const express = require('express')
// Define Port
const port = 4000
// Create WebApp Server
const app = express()
//Logger
const logger = require('morgan');
var http = require('http').createServer(app);
//DB Connection
require("./database/connection")
// Include Socket.io 
var io = require('socket.io')(http);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static File Path
app.use(express.static('public'))
app.use(express.static('resources'))


// Route
// mount the router on the app
app.use('/', require('./routes/router'));

var countOfPlayers = 0
var timer = 30
var countDownTime = timer

// Check if player connected
io.on('connect', onConnect);
// Check if player disconnected


function onConnect(socket) {
    countOfPlayers = socket.client.conn.server.clientsCount
    io.emit('playerLobby', {
        playerCount: countOfPlayers
    })

    if (countOfPlayers > 1) {
        countDown(socket, true, countDownTime);
    } else {
        countDown(socket, false, timer);
    }

    socket.on('disconnect', function () {
        countOfPlayers = socket.client.conn.server.clientsCount
        io.emit('playerLobby', {
            playerCount: countOfPlayers
        })
    })
}

function countDown(socket, start, time) {
    if (start) {
        var timeleft = time;
        var downloadTimer = setInterval(function () {
            timeleft -= 1;
        if (timeleft <= 0 || start == false){
            io.emit('timer', {
                time: timeleft
            }); 
            clearInterval(downloadTimer);
        }
        }, 1000);
    } else {
        io.emit('timer', {
            time: timer
        });
    }
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

http.listen(port, () => console.log(`App listening on port ${port}!`))