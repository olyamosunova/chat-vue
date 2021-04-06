<template>
    <div class="contacts">
        <ContactsList />
    </div>
</template>

<script>
    import "../../styles/contacts.scss";
    import ContactsList from "../contacts-list/Contacts-list";
    export default {
        name: "Contacts",
        components: {
            ContactsList
        }
    }
</script>
