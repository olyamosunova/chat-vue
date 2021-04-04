<template>
    <li :class="{chat__item: true, 'chat__item--yours': message.author === 'you'}">
        <p class="chat__item-message">{{message.text}}</p>
        <p class="chat__item-time">{{formatDate(message.datetime)}}</p>
    </li>
</template>

<script>
    import { format } from 'date-fns'

    export default {
        name: "Chat-item",
        props: {
            message: Object
        },
        methods: {
            formatDate(date) {
                return format(date, 'HH:mm');
            }
        }
    }
</script>

<style lang="scss">
    .chat__item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        max-width: 50%;
        margin: 15px 0;
        padding: 10px 15px;

        background-color: #21353f;
        border-radius: 7px 7px 7px 0;

        &--yours {
            margin-left: auto;

            background-color: #2f5970;
            border-radius: 7px 7px 0 7px;
        }
    }

    .chat__item-message {
        margin: 0 0 3px;
    }

    .chat__item-time {
        align-self: flex-end;
        margin: 0;

        color: #506d77;
        font-size: 12px;
        line-height: 14px;
    }
</style>
