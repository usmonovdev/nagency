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
    </div>
</template>
<script>
import Projects from "./Projects.vue"
export default {
    name: "HomeSixtyIndex",
    components: { Projects }
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
}
</style>