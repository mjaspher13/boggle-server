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
        commit('setWords', ['Word 1', 'Word 2', 'Word 3'])
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