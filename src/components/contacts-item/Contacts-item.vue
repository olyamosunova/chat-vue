<template>
    <li class="contact__item">
        <div class="contact__item-avatar">
            <img :src="avatar" alt="Аватар" />
        </div>
        <p class="contact__item-name">Имя Фамилия</p>
    </li>
</template>

<script>
    import avatar from "../../assets/avatar.jpg";

    export default {
        data() {
            return {
                avatar
            }
        },
        name: "Contacts-item"
    }
</script>

<style lang="scss">
    .contact__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;
        padding: 10px 15px;

        cursor: pointer;

        &:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
    }

    .contact__item-avatar {
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
