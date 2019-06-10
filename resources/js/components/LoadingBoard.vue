<template>
  <div class="loading--board board">
    <div class="loading-board-header">
      <span class="title">Game Loading</span>
      <div class="header-player">
        <span class="subtitle">Waiting for other players to join</span>
      </div>
      <div class="header-timer mx-auto">
        <div class="timer d-block">
          <span id="time" class="time">0</span>
        </div>
      </div>
    </div>
    <ul class="player-list d-flex flex-column justify-content-center mx-auto">
      <li class="scores">
        <span class="score align-self-start">John Paulo</span>
      </li>
      <li class="scores">
        <span class="score align-self-start">Gian</span>
      </li>
      <li class="scores">
        <span class="score align-self-start">JM</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loading-board",
  data() {
    return {
      socket: io("localhost:4000")
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    startGame: function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
    countDown: function(data) {}
  },
  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit("pingServer", "PING!");
    }
  },
  mounted(){
      this.pingServer()
  }
};
</script>