<template>
  <div class="login-body">
    <div class="username-container">
      <form class="d-flex flex-column justify-contents-center" @submit="this.register">
        <label class="username" for="username">Username</label>
        <input type="text" class="username--input" name="username" id="username" ref="username">
        <input class="submit" type="submit" value="Register">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  methods: {
    register: function() {
      axios({
        method: "post",
        url: "/register",
        timeout: 8000, // Let's say you want to wait at least 8 seconds
        data: {
          username: this.$refs.username.value
        }
      }).then(data => (window.location.href = data.data.url));
    }
  }
};
</script>