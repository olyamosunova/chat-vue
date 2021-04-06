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
                return format(new Date(date), 'dd.MM.yyyy HH:mm');
            }
        }
    }
</script>
