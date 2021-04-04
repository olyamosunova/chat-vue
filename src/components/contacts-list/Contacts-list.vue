<template>
    <ul class="contacts__list">
        <ContactsItem v-for="contact in [1, 2, 3, 4, 5]" :key="contact" :contact="contact" />
    </ul>
</template>

<script>
    import ContactsItem from "../contacts-item/Contacts-item";

    export default {
        name: "Contacts-list",
        components: {
            ContactsItem
        }
    }
</script>

<style lang="scss">
    .contacts__list {
        margin: 0;
        padding: 0;

        list-style: none;
    }

</style>
