<template>
    <div class="solutions">
        <div class="title">
            <TitleName>Our Solutions</TitleName>
            <TitleInfo>Why Choose Us</TitleInfo>
        </div>
        <Solutions/>
    </div>
</template>
<script>
import Solutions from "./Solutions.vue"
export default {
    name: "HomeFifthIndex",
    components: { Solutions }
}
</script>
<style lang="scss" scoped>
    .solutions {
        display: flex;
        flex-direction: column;
        gap: 50px;
        .title {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
</style>