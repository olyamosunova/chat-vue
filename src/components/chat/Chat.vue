<template>
    <div class="chat">
      <template v-if="isChatActive" >
        <div class="chat__user">
          <div class="chat__user-avatar">
            <img :src="activeChat.avatar" alt="Avatar" />
          </div>
          <p class="chat__user-name">{{activeChat.name}}</p>
          <button @click.prevent="handlerCloseChat" class="chat__close" type="button" aria-label="Close chat"></button>
        </div>
        <ChatList />
        <ChatForm />
      </template>

      <div v-else class="chat__nothing">
          <p>Choose who you would like to write to</p>
      </div>

      <ErrorPopup v-if="isError" :isError="isError" />
    </div>
</template>

<script>
    import "@/styles/chat.scss";
    import { MOBILE_MAX_WIDTH } from '@/constants'
    import ChatList from "../chat-list/Chat-list";
    import ChatForm from "../chat-form/Chat-form";
    import ErrorPopup from "../error-popup/Error-popup";

    export default {
        name: "Chat",
        data() {
            return {}
        },
        mounted() {
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                this.additionalClass = 'ios';
                this.$el.style.height = window.innerHeight + 'px';
            }
        },
        computed: {
            isMobile() {
                return window.outerWidth < MOBILE_MAX_WIDTH;
            },
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

              document.querySelector('body').classList.remove('no-scroll');
          }
        },
        components: {
            ChatList,
            ChatForm,
            ErrorPopup
        }
    }
</script>
