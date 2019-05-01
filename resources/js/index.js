$(function () {
    var socket = io();

    $('form').submit(function(e){
        e.preventDefault(); // prevents page reloading
        socket.emit('startgame', $('#m').val());
        socket.emit('endgame', function(){
            //pass all the words by player
        })
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
})