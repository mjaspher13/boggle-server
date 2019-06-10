<template>
  <p class="count" id="count">0</p>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      socket: io("localhost:4000")
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    playersConnected: function(data) {
      $(".count").text(data.count);
    }
  }
};
</script>

