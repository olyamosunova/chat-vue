<template>
    <li @click="handlerOpenChat" :class="{contacts__item: true, 'contacts__item--active': contact === activeChat}">
        <div class="contacts__item-avatar">
            <img :src="contact.avatar" alt="Аватар" />
        </div>
        <p class="contacts__item-name">{{contact.name}}</p>
    </li>
</template>

<script>
    export default {
        name: "Contacts-item",
        props: {
            contact: Object
        },
        data() {
            return {}
        },
        computed: {
            activeChat() {
                return this.$store.getters.activeChat;
            },
            isMobile() {
                return window.outerWidth < 768;
            },
            isChatActive() {
                return this.$store.getters.isChatActive;
            }
        },
        methods: {
            handlerOpenChat() {
                this.$store.dispatch('openChat', this.contact);
                this.$store.dispatch('getMessages', this.contact.id);

                if (this.isMobile && this.isChatActive) {
                    document.querySelector('body').classList.add('no-scroll');
                }
            }
        }
    }
</script>
