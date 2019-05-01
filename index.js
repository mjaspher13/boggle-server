// Include Express Framework
const express = require('express')
// Define Port
const port = 3000
// Create WebApp Server
const app = express()
var http = require('http').createServer(app);
// Include Socket.io 
var io = require('socket.io')(http);

// Static File Path
app.use(express.static('public'))
app.use(express.static('resources'))

// Route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/resources/views/player/index.html');
});

app.get('/server', function(req, res){
    res.sendFile(__dirname + '/resources/views/server/index.html');
});

 var countOfPlayers = 0;

// Check if user connected
io.on('connection', function(socket){
    console.log(`Socket ${socket.id} connected.`);
    io.clients((error, clients) => { countOfPlayers = clients.length})

    if( countOfPlayers < 4 )
    {
        
    }
    else
    {
        console.log('You cannot enter!');
    }
    //
    // checkClientList()
    socket.on('startgame', (msg) => {
        // Trigger boggle Shaker
        //Get all Letters [];
         // -- Server is checking for all possible words
        //Throw to all Players
        //sync time ()
        // start count down
        // Game Start()
    });

    socket.on('endgame', (msg) => {
        //STore in temp array/ Db
        // Eliminate All words that are same/ or used twice
        // CHeck if word is valid
        //Compare all words check if correct from boggle server AI results
        //Tally Score
        //Game is Over
        
    });

    // Check if user disconnected
    socket.on('disconnect', () =>{
        console.log(`Socket ${socket.id} disconnected.`);
        checkClientList()
    });
});

// Check Socket Client List
function checkClientList(){
    io.clients((error, clients) => {
        if (error) throw error;
        console.log(clients); 
    })
}

http.listen(port, () => console.log(`App listening on port ${port}!`))
