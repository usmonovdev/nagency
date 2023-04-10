<template>
    <div class="projects">
        <div class="title">
            <TitleName>
                Our Projects
            </TitleName>
            <TitleInfo>
                Latest Project We Have Done
            </TitleInfo>
        </div>
        <Projects />
        <div class="pricing">
            <Left/>
            <Right/>
        </div>
    </div>
</template>
<script>
import Projects from "./Projects.vue"
import Left from "./pricing/Left.vue"
import Right from "./pricing/Right.vue"
export default {
    name: "HomeSixtyIndex",
    components: { Projects, Left, Right }
}
</script>
<style lang="scss" scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .title {
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .pricing {
        display: flex;
        flex-direction: row;
        gap: 20px;
        @media screen and (max-width: 1100px) {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>