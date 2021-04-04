export default {
    state: {
        isChatActive: true
    },
    mutations: {
        changeStateIsChatActive(state, value) {
            state.isChatActive = value;
        }
    },
    actions: {
        closeChat({commit}) {
            commit('changeStateIsChatActive', false);
        }
    },
    getters: {
        isChatActive(state) {
            return state.isChatActive;
        }
    }
}
