<template>
    <ul class="chat__list">
        <ChatItem  v-for="message in messages" :key="message.id" :message="message" />
    </ul>
</template>

<script>
    import ChatItem from "../chat-item/Chat-item";

    export default {
        name: "chat-list",
        data() {
            return {}
        },
        computed: {
            messages() {
                return this.$store.getters.messages;
            }
        },
        components: {
            ChatItem
        }
    }
</script>

<style lang="scss">
    .chat__list {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 20px;

        list-style: none;
    }

</style>
