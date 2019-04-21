// Include Express Framework
var app = require('express')();
// Create WebApp Server
var http = require('http').createServer(app);
// Include Socket.io 
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/resources/views/index.html');
});

// Check if user connected
io.on('connection', function(socket){
    console.log('an user connected');
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
