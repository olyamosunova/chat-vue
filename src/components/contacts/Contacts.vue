<template>
    <div class="contacts">
        <ContactsList />
    </div>
</template>

<script>
    import ContactsList from "../contacts-list/Contacts-list";
    export default {
        name: "Contacts",
        components: {
            ContactsList
        }
    }
</script>

<style lang="scss">
    .contacts {
        width: 30%;

        background-color: #21353f;
    }
</style>
