<template>
  <div class="game h-100">
    <div class="score-board mx-auto align-self-center h-80 w-80">
      <h5 class="score-board-header">Shaking in Progress</h5>
    </div>
    <div class="d-flex flex-row justify-contents-center" style="height: 90px; width: 100%;">
      <a
        href="/game/reshake"
        class="start-game mx-auto"
        style="width: 150px; z-index: 99; color: red"
      >Retry</a>
      <a
        href="/game/ongoing"
        @click="startGame"
        class="start-game mx-auto"
        style="width: 150px; z-index: 99; color: gold;"
      >Proceed</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "shaker",
  data() {
    return {
      socket: io("localhost:4000")
    };
  },
    sockets: {
    // timer: function(data) {
    //   if(data.time == 0)
    //   windows.location.href = "/game"
    // }
  },
  methods: {
    startGame: function() {
      this.$socket.emit("startGame");
    }
  },
};
</script>
