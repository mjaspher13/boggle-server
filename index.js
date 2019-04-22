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

app.get('/', function(req, res){
    res.sendFile(__dirname + '/resources/views/index.html');
});

// Check if user connected
io.on('connection', function(socket){
    console.log(`Socket ${socket.id} connected.`);
    checkClientList()
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
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
