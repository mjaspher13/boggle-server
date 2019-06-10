<template>
  <span class="time">{{ this.count }}</span>
</template>

<script>
export default {
  name: "Timer",
   data() {
    return {
      socket: io("localhost:4000"),
      count: 30
    };
  },
  sockets: {
    // Player Joined to Lobby
    playerLobby: function(data) {
      //alert(data.playerCount);
      $("#count").text(data.playerCount);
    },

    //timer count down
    timer: function(data) {
        this.count = data.time
    }
  }
};
</script>

<style lang="css" scoped>
</style>
