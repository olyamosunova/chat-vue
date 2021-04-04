export default {
    state: {
        isChatActive: true,
        activeChat: null
    },
    mutations: {
        changeStateIsChatActive(state, value) {
            state.isChatActive = value;
        },
        changeStateActiveChat(state, idUser) {
            state.activeChat = idUser;
        }
    },
    actions: {
        closeChat({commit}) {
            commit('changeStateIsChatActive', false);
            commit('changeStateActiveChat', null);
        },
        changeActiveChat({commit}, idUser) {
            commit('changeStateActiveChat', idUser);
        }
    },
    getters: {
        isChatActive(state) {
            return state.isChatActive;
        },
        activeChat(state) {
            return state.activeChat;
        }
    }
}
