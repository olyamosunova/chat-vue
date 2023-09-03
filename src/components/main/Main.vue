<template>
    <section class="main">
        <div class="main__container container">
          <template v-if="!isMobile">
            <Contacts />
            <Chat />
          </template>
          <template v-else>
            <Contacts v-if="!isChatActive" />
            <Chat v-else />
          </template>
        </div>
    </section>
</template>

<script>
    import { MOBILE_MAX_WIDTH } from '@/constants'
    import Contacts from "../contacts/Contacts";
    import Chat from "../chat/Chat";

    export default {
        name: "Main",
        data() {
          return {}
        },
        computed: {
            isMobile() {
              return window.outerWidth < MOBILE_MAX_WIDTH;
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
