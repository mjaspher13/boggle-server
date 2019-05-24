import Vuex from'vuex'
import Vue from '../vue'
import wordlist from './wordlist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        wordlist
    }
})