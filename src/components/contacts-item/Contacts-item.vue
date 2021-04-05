<template>
    <li @click="handlerOpenChat" :class="{contacts__item: true, 'contacts__item--active': contact === activeChat}">
        <div class="contacts__item-avatar">
            <img :src="avatar" alt="Аватар" />
        </div>
        <p class="contacts__item-name">{{contact.name}}</p>
    </li>
</template>

<script>
    import avatar from "../../assets/avatar.jpg";

    export default {
        name: "Contacts-item",
        props: {
            contact: Object
        },
        data() {
            return {
                avatar
            }
        },
        computed: {
            activeChat() {
                return this.$store.getters.activeChat;
            }
        },
        methods: {
            handlerOpenChat() {
                this.$store.dispatch('changeActiveChat', this.contact);
            }
        }
    }
</script>

<style lang="scss">
    .contacts__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 15px;

        cursor: pointer;

        &--active {
            background-color: #2f5970;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
    }

    .contacts__item-avatar {
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

</style>
