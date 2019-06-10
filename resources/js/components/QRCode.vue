<template>
  <div>
    <p class="link"></p>
    <div class="d-flex justify-content-center">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "qr-code",
  data() {
    return {
      socket: io("localhost:4000")
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    connected: function(data) {
      $(".link").text("http://" + data.ip + ":" + data.port);
      QRCode.toCanvas(canvas, "http://" + data.ip + ":" + data.port, function(
        error
      ) {
        if (error) console.error(error);
        console.log("success!");
      });
    }
  },
  methods: {}
};
</script>
