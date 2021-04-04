<template>
    <div class="chat__form">
        <form @submit.prevent="handlerSubmitMessage">
            <textarea placeholder="Написать сообщение..." v-model="message"></textarea>
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
        methods: {
            handlerSubmitMessage() {
                console.log('submit message: ', this.message);
            }
        }
    }
</script>

<style scoped>

</style>
