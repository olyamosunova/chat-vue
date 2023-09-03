<template>
    <div :class="{chat__form: true, ios: additionalClass}">
        <form @submit.prevent="handlerSubmitMessage">
            <textarea
                    @blur="handlerScrollWindow('top')"
                    @focus="handlerScrollWindow('bottom')"
                    @keydown="handlerKeydownSubmit"
                    placeholder="Texting..."
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
                buttonText: 'Submit',
                isFormSubmits: false,
                additionalClass: ''
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
                    this.buttonText = 'Submitting...';
                    this.isFormSubmits = true;

                    const info = {
                        userId: this.activeChat.id,
                        text: this.message
                    };

                    this.$store.dispatch('submitMessage', info)
                        .then(() => {
                            this.message = '';
                            this.buttonText = 'Submit';
                            this.isFormSubmits = false;
                        })
                        .catch(() => {
                            this.buttonText = 'Submit';
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
            }
        }
    }
</script>
