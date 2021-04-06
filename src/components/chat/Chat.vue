<template>
    <div class="chat">
        <div v-if="isChatActive" class="chat__user">
            <div class="chat__user-avatar">
                <img :src="activeChat.avatar" alt="Аватар" />
            </div>
            <p class="chat__user-name">{{activeChat.name}}</p>
            <button @click.prevent="handlerCloseChat" class="chat__close" type="button" aria-label="Закрыть чат"></button>
        </div>
        <ChatList v-if="isChatActive" />
        <ChatForm v-if="isChatActive" />

        <div v-else class="chat__nothing">
            <p>Выберите, кому хотели бы написать</p>
        </div>

        <ErrorPopup v-if="isError" :isError="isError" />
    </div>
</template>

<script>
    import "../../styles/chat.scss";
    import ChatList from "../chat-list/Chat-list";
    import ChatForm from "../chat-form/Chat-form";
    import ErrorPopup from "../error-popup/Error-popup";

    export default {
        name: "Chat",
        data() {
            return {}
        },
        computed: {
            isChatActive() {
                return this.$store.getters.isChatActive;
            },
            activeChat() {
                return this.$store.getters.activeChat;
            },
            isError() {
                return this.$store.getters.isError;
            }
        },
        methods: {
          handlerCloseChat() {
              this.$store.dispatch('closeChat');
          }
        },
        components: {
            ChatList,
            ChatForm,
            ErrorPopup
        }
    }
</script>

<style lang="scss">
    .chat {
        position: relative;
    }
</style>
