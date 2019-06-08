<template>
    <div class="words-input-container w-100">
        <form class="w-100">
            <input ref="input" class="words-input" type="text">
            <input type="submit" class="send" value="Send" v-on:click="this.submit">
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'WordInput',
        methods:{
            ...mapActions(['fetchAllWords', 'sendWord']),
            submit: function(){
                this.sendWord(this.$refs.input.value, this.$swal);
            }
        },
       
    }
</script>

<style lang="css" scoped>

</style>