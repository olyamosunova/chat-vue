<template>
    <div class="error-popup">
        <p>{{isError}}</p>
    </div>
</template>

<script>
    export default {
        name: "Error-popup",
        props: {
            isError: String
        },
        mounted() {
            setTimeout(() => {
                this.$store.dispatch('clearIsError');
            }, 1000)
        }
    }
</script>

<style lang="scss">
.error-popup {
    position: absolute;
    top: 50%;
    left: 50%;

    padding: 20px 50px;

    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    background-color: #21353f;
    border-radius: 4px;

    transform: translateX(-50%) translateY(-50%);

    p {
        color: darkred;
    }
}
</style>
