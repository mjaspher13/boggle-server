$(function () {
    var socket = io();

    // Player Joined to Lobby
    socket.on('playerLobby', function (data) {
        //alert(data.playerCount);
        $("#count").text(data.playerCount);
    });

    //timer count down
    socket.on('timer', function (data) {
        $("#time").text(data.time);
    })

    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('startgame', $('#m').val());
        socket.emit('endgame', function () {
            //pass all the words by player
        })
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });

    ctx = document.getElementById('canvas')
    QRCode.toCanvas(ctx, 'http://192.168.1.1:3000', function (error) {
        if (error) console.error(error)
        
        console.log('success!');
    })
})