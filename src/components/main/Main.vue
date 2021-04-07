<template>
    <section class="main">
        <div class="main__container container">
            <Contacts v-if="isMobile && !isChatActive" />
            <Contacts v-if="!isMobile" />
            <Chat v-if="isMobile && isChatActive" />
            <Chat v-if="!isMobile" />
        </div>
    </section>
</template>

<script>
    import Contacts from "../contacts/Contacts";
    import Chat from "../chat/Chat";

    export default {
        name: "Main",
        computed: {
            isMobile() {
              return window.outerWidth < 768;
            },
            isChatActive() {
                return this.$store.getters.isChatActive;
            },
        },
        components: {
            Contacts,
            Chat
        }
    }
</script>

<style lang="scss">
    .main {
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .main__container {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
    }
</style>
