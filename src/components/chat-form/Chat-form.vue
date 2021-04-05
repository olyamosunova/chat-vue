<template>
    <div class="chat__form">
        <form @submit.prevent="handlerSubmitMessage">
            <textarea
                    @keydown="handlerKeydownSubmit"
                    placeholder="Написать сообщение..."
                    v-model="message"></textarea>
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Chat-form",
        data() {
            return {
                message: ''
            }
        },
        computed: {
          activeChat() {
              return this.$store.getters.activeChat;
          }
        },
        methods: {
            handlerSubmitMessage() {
                const info = {
                    userId: this.activeChat.id,
                    text: this.message
                };

                this.$store.dispatch('submitMessage', info).then(() => {
                    this.message = '';
                });
            },
            handlerKeydownSubmit(evt) {
                const isCtrlAndEnter = evt.code === `Enter` && (evt.ctrlKey || evt.metaKey);
                if (isCtrlAndEnter) {
                    this.handlerSubmitMessage();
                }
            }
        }
    }
</script>

<style scoped>

</style>
