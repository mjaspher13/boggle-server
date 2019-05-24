<template>
    <div class="words-container">
        <ul class="words-list">
            <li class="words" v-for="(word, index) in allWords" :key="`word-${index}`">
                {{word}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'WordList',
        methods: {
            ...mapActions(['fetchWords'])
        },
        computerd: mapGetters(['allWords']),
        created(){
            this.fetchWords()
        }
    }
</script>

<style lang="css" scoped>
    .words-container {
        order: 2;
        z-index: 1;
        display: flex;
        width: 70%;
        height: 80%;
        margin: 1%;
        background-color: rgba(255, 255, 255, 0.3);
        border: 4px solid rgb(80, 164, 248);
        box-shadow: 0 0 10px 10px rgba(80, 164, 248, 0.5);
        border-radius: 10px;
    }
    .words-list{
        list-style: none;
    }
</style>