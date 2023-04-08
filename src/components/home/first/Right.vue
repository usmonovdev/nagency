<template>
    <div class="home-right">
        
    </div>
</template>

<script>
export default {
    name: "Right"
}
</script>

<style lang="scss" scoped>
    .home-right {
        width: 50%;
        height: 500px;
        border: 2px solid red;
        @media screen and (max-width: 992px) {
            display: none;
        }
    }
</style>