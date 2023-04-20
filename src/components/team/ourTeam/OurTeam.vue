<template>
    <div>
        <div class="title">
            <TitleName>
                Our Team
            </TitleName>
            <TitleInfo>
                Meet With Professional Team
            </TitleInfo>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
import team from "@/data/team"
export default {
    name: "TeamFirstIndex",
    data() {
        return {
            team: team
        }
    },
    mounted() {
        console.log(this.team);
    },
}
</script>

<style lang="scss" scoped>
.title {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
</style>