<template>
  <div class="words-input-container w-90">
    <form class="w-80">
      <input ref="input" class="words-input" type="text" style="width: 60%">
      <input class="send" value="Send" v-on:click="this.submit" style="width: 30%">
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "WordInput",
  methods: {
    ...mapActions(["fetchAllWords", "sendWord"]),
    submit: function() {
      this.sendWord(this.$refs.input.value, this.$swal);
      this.$refs.input.value = "";
    }
  }
};
</script>

<style lang="scss" scoped>


</style>