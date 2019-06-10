<template>
  <div class="loading--board board">
    <div class="loading-board-header">
      <span class="title">Game Loading</span>
      <div class="header-player">
        <span class="subtitle">Waiting for other players to join</span>
      </div>
      <div class="header-timer mx-auto">
        <div class="timer d-block">
          <timer></timer>
        </div>
      </div>
    </div>
    <ul class="player-list d-flex flex-column justify-content-center">
      <!-- <li class="scores">
        <span class="score align-self-start">John Paulo</span>
      </li>
      <li class="scores">
        <span class="score align-self-start">Gian</span>
      </li> -->
      
        <a class="start-game mx-auto" href="/game">Start Game</a>
      
    </ul>
  </div>
</template>

<script>
import Timer from "./GameWidget/Timer";
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
    // timer: function(data) {
    //   if(data.time == 0)
    //   windows.location.href = "/game"
    // }
    game: function(){
      console.log('Game');
      window.location.href = "/game"
    }
  },
  methods: {
    playerLogin: function() {
      this.$socket.emit("playerLogin", {
        
      });
    }
  },
  mounted() {
    this.playerLogin();
  },
  components: {
    Timer
  }
};
</script>

<style>
.start-game{
  font-size: 20px;
}
</style>
