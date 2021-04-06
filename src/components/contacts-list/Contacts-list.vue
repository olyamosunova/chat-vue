<template>
    <ul class="contacts__list">
        <ContactsItem v-for="contact in contacts" :key="contact.id" :contact="contact" />
    </ul>
</template>

<script>
    import ContactsItem from "../contacts-item/Contacts-item";

    export default {
        name: "Contacts-list",
        mounted() {
            this.$store.dispatch('getContacts');
        },
        computed: {
            contacts() {
                return this.$store.getters.contacts;
            }
        },
        components: {
            ContactsItem
        }
    }
</script>
