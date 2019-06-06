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
        commit('setWords', ['desks', 'dew', 'drove', 'euks', 'odes', 'nkosi'])
    }
}

const mutations = {
    setWords: (state, words) => (state.words = words)
}

export default {
    state,
    getters,
    actions,
    mutations
}