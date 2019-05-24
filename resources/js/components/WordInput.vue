<template>
    <div class="words-input-container w-100">
        <form class="w-100">
            <input class="words-input" type="text">
            <input type="submit" class="send" value="Send">
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        name: 'WordInput',
        methods: {
            ...mapActions(['fetchWords'])
        },
        computed: mapGetters(['allWords']),
        created(){
            this.fetchWords()
        }
    }
</script>

<style lang="css" scoped>

</style>