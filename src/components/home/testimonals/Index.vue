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
        <div class="questions">
            <Left/>
            <Right/>
        </div>
    </div>
</template>
<script>
import Testimonals from "./Tstimonals.vue"
import Left from "./questions/Left.vue";
import Right from "./questions/Right.vue";
export default {
    name: "HomeSeventhIndex",
    components: { Testimonals, Left, Right }
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
        text-align: center;
    }
    .questions {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        @media screen and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
        }
    }
}
</style>