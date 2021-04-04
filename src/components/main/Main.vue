<template>
    <section class="main">
        <div class="main__container container">
            <Contacts />
            <Chat />
        </div>
    </section>
</template>

<script>
    import Contacts from "../contacts/Contacts";
    import Chat from "../chat/Chat";

    export default {
        name: "Main",
        components: {
            Contacts,
            Chat
        }
    }
</script>

<style lang="scss">
    .main {
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
