const isProd = true;
const pathRequest = isProd ? 'https://my-json-server.typicode.com/olyamosunova/JSONplaceholder' : 'http://localhost:3001';

export default {
    state: {
        isChatActive: false,
        activeChat: null,
        contacts: null,
        messages: null,
        isError: ''
    },
    mutations: {
        changeStateIsChatActive(state, value) {
            state.isChatActive = value;
        },
        changeStateActiveChat(state, idUser) {
            state.activeChat = idUser;
        },
        setContacts(state, contacts) {
            state.contacts = contacts;
        },
        setMessages(state, messages) {
            state.messages = messages;
        },
        setNewMessage(state, newMessage) {
            state.messages.push(newMessage);
        }
    },
    actions: {
        closeChat({commit}) {
            commit('changeStateIsChatActive', false);
            commit('changeStateActiveChat', null);
            commit('setMessages', null);
        },
        openChat({commit}, user) {
            commit('changeStateIsChatActive', true);
            commit('changeStateActiveChat', user);
        },
        getContacts({state, commit}) {
            fetch(`${pathRequest}/users`)
                .then((response) => response.json())
                .then((json) => {
                    commit('setContacts', json);
                    state.isError = '';
                })
                .catch(() => {
                    state.isError = 'Не удалось загрузить контакты';
                });
        },
        getMessages({state, commit}, idUser) {
            fetch(`${pathRequest}/messages?user_id=${idUser}`)
                .then((response) => response.json())
                .then((json) => {
                    commit('setMessages', json);
                    state.isError = '';
                })
                .catch(() => {
                    state.isError = 'Не удалось загрузить сообщения';
                });
        },
        submitMessage({state, commit}, info) {
            fetch(`${pathRequest}/messages`, {
                method: 'POST',
                body: JSON.stringify({
                    datetime: new Date(),
                    text: info.text,
                    author: 'you',
                    user_id: info.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    commit('setNewMessage', json);
                    state.isError = '';
                })
                .catch(() => {
                    state.isError = 'Не удалось отправить форму';
                });
        },
        clearIsError({state}) {
            state.isError = '';
        }
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
        },
        messages(state) {
            return state.messages;
        },
        isError(state) {
            return state.isError;
        }
    }
}
