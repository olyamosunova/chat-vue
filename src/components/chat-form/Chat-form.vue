<template>
    <div :class="{chat__form: true, ios: additionalClass}">
        <form @submit.prevent="handlerSubmitMessage">
            <textarea
                    @blur="handlerScrollWindow('top')"
                    @focus="handlerScrollWindow('bottom')"
                    @keydown="handlerKeydownSubmit"
                    placeholder="Написать сообщение..."
                    v-model="message"></textarea>
            <button ref="buttonSubmit" type="submit" :disabled="isFormSubmits">{{buttonText}}</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Chat-form",
        data() {
            return {
                message: '',
                buttonText: 'Отправить',
                isFormSubmits: false,
                additionalClass: ''
            }
        },
        mounted() {
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                this.additionalClass = 'ios'
            }
        },
        computed: {
          activeChat() {
              return this.$store.getters.activeChat;
          }
        },
        methods: {
            handlerSubmitMessage() {
                if (this.message) {
                    this.buttonText = 'Отправка...';
                    this.isFormSubmits = true;

                    const info = {
                        userId: this.activeChat.id,
                        text: this.message
                    };

                    this.$store.dispatch('submitMessage', info)
                        .then(() => {
                            this.message = '';
                            this.buttonText = 'Отправить';
                            this.isFormSubmits = false;
                        })
                        .catch(() => {
                            this.buttonText = 'Отправить';
                            this.isFormSubmits = false;
                        });
                }
            },
            handlerKeydownSubmit(evt) {
                const isCtrlAndEnter = evt.code === `Enter` && (evt.ctrlKey || evt.metaKey);
                if (isCtrlAndEnter) {
                    this.handlerSubmitMessage();
                }
            },
            handlerScrollWindow(direction) {
                let top = direction === 'bottom' ? document.body.scrollHeight : 0;

                window.scrollTo({
                    top,
                    behavior: "smooth"
                });
            },
        }
    }
</script>
