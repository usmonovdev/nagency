<template>
    <div class="testimonals">
        <div class="title">
            <TitleName>
                Testimonials
            </TitleName>
            <TitleInfo>
                Our happy clients say about us
            </TitleInfo>
        </div>
        <Testimonals />
    </div>
</template>
<script>
import Testimonals from "./Tstimonals.vue"
export default {
    name: "HomeSeventhIndex",
    components: { Testimonals }
}
</script>
<style lang="scss" scoped>
.testimonals {
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