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
            return {
                messages: [
                    {
                        id: "1",
                        text: "Сообщение 1",
                        datetime: new Date(),
                        author: ''
                    },
                    {
                        id: "2",
                        text: "Сообщение 2",
                        datetime: new Date(),
                        author: ''
                    },
                    {
                        id: "3",
                        text: "Сообщение 1",
                        datetime: new Date(),
                        author: 'you'
                    },
                ]
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
