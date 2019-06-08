const state = {
    words: []
}

const getters = {
    allWords: (state) => state.words
}

const actions = {
    async fetchWords({
        commit
    }) {
        commit('setWords', [])
    },

    sendWord({
        commit
    }, input, swal) {
        if (!state.words.includes(input))
        {
            commit('addWord', input)
        }

        else{
            Vue.swal('Repeated Word!')
        }
    }
}

const mutations = {
    setWords: (state, words) => (state.words = words),
    addWord: (state, word) => {
        state.words.push(word)
        console.log(word)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}