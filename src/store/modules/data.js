export default {
    state: {
        isChatActive: true,
        activeChat: null,
        contacts: null
    },
    mutations: {
        changeStateIsChatActive(state, value) {
            state.isChatActive = value;
        },
        changeStateActiveChat(state, idUser) {
            state.activeChat = idUser;
        },
        setContacts(state, contacts) {
            console.log(contacts);
            state.contacts = contacts;
        }
    },
    actions: {
        closeChat({commit}) {
            commit('changeStateIsChatActive', false);
            commit('changeStateActiveChat', null);
        },
        changeActiveChat({commit}, idUser) {
            commit('changeStateActiveChat', idUser);
        },
        getContacts({commit}) {
            fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((json) => commit('setContacts', json));
        },
    },
    getters: {
        isChatActive(state) {
            return state.isChatActive;
        },
        activeChat(state) {
            return state.activeChat;
        },
        contacts(state) {
            return state.contacts;
        }
    }
}
