<template>
    <div class="chat">
        <div v-if="isChatActive" class="chat__user">
            <div class="chat__user-avatar">
                <img :src="avatar" alt="Аватар" />
            </div>
            <p class="chat__user-name">Анна</p>
            <button @click.prevent="handlerCloseChat" class="chat__close" type="button" aria-label="Закрыть чат"></button>
        </div>
        <ChatList v-if="isChatActive" />

        <div v-else class="chat__nothing">
            <p>Выберите, кому хотели бы написать</p>
        </div>
    </div>
</template>

<script>
    import ChatList from "../chat-list/Chat-list";
    import avatar from "../../assets/avatar.jpg";

    export default {
        name: "Chat",
        data() {
            return {
                avatar
            }
        },
        computed: {
            isChatActive() {
                return this.$store.getters.isChatActive;
            }
        },
        methods: {
          handlerCloseChat() {
              this.$store.dispatch('closeChat');
          }
        },
        components: {
            ChatList
        }
    }
</script>

<style lang="scss">
    .chat {
        width: 70%;
        padding: 0 3px;
        display: flex;
        flex-direction: column;
    }

    .chat__user {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 15px;

        background-color: #21353f;
    }

    .chat__user-avatar {
        width: 50px;
        height: 50px;
        margin-right: 10px;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
            object-position: center;

            border-radius: 50%;
        }
    }

    .chat__close {
        position: relative;
        width: 15px;
        height: 15px;
        margin-left: auto;

        border: none;
        background-color: transparent;

        cursor: pointer;
        outline: none;

        &:hover,
        &:focus {
            &::before,
            &::after {
                background-color: #1c2930;
            }
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;

            background-color: #ffffff;
            transform: rotate(45deg);

            transition: background-color 0.3s ease-in-out;
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

    .chat__nothing {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
