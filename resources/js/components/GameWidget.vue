<template>
  <div class="game-widget-container d-flex flex-column">
    <div class="game-widget d-flex flex-column">
       <span class="disqualified small">Last</span>
      <span>10 </span>
      <span class="disqualified smaller"> sec Remaining</span>
    </div>
   
    <div class="game-widget h-40 d-flex flex-column">
     <span class="smallest">Find as many 3-5 letter word as you can!</span>
    </div>
  </div>
</template>

<script>
import Timer from "./GameWidget/Timer.vue";
import Score from "./GameWidget/Score.vue";
import Notif from "./GameWidget/Notif.vue";
export default {
  name: "GameWidget"
};
</script>
<style lang="css" scoped>
</style>