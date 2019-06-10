<template>
  <div class="game-widget-container d-flex flex-column">
    <div class="game-widget d-flex flex-column" style="font-size: 15px !important">
       <span class="disqualified small">Last</span>
      <timer></timer>
      <span class="disqualified smaller" style="font-size: 10px !important"> sec Remaining</span>
    </div>
   
    <div class="game-widget h-50 d-flex flex-column">
     <span class="smallest" style="font-size: 10px !important">Find as many 3-5 letter word as you can!</span>
    </div>
  </div>
</template>

<script>
import Timer from "./GameWidget/Timer.vue";
import Score from "./GameWidget/Score.vue";
import Notif from "./GameWidget/Notif.vue";
export default {
  name: "GameWidget",
  data() {
    return {
      socket: io("localhost:4000")
    };
  },
    sockets: {
    timer: function(data) {
      if(data.time == 0)
      windows.location.href = "/game"
    }
  },
  methods: {
    gameStart: function() {
      this.$socket.emit("gameStart");
    }
  },
  components: {
    Timer
  },
  mounted(){
    this.gameStart();
  }
};
</script>
<style lang="css" scoped>
</style>