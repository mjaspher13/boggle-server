<template>
  <div class="login-body">
    <div class="username-container">
      <div class="d-flex flex-column justify-contents-center">
        <label class="username" for="username">Username</label>
        <input type="text" class="username--input" name="username" id="username" ref="username" >
        <button class="submit" @click="this.register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      socket: io("192.168.8.101:4000")
    };
  },
  methods: {
    register: function() {
      if(this.$refs.username.value){
      // axios({
      //   method: "post",
      //   url: "/register",
      //   data: {
      //     username: this.$refs.username.value
      //   }
      // }).then(data => {
        // Send the "pingServer" event to the server.
        this.$socket.emit("playerLogin", {
          playerName: this.$refs.username.value
        });
       // window.location.href = data.data.url;
       window.location.href = '/game/loading';
      }
      //});
    }
  }
};
</script>