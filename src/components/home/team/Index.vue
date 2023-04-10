<template>
  <div class="team">
    <div class="title">
      <TitleName> Meet the team </TitleName>
      <TitleInfo>Professional Creative Team</TitleInfo>
    </div>
    <Team/>
  </div>
</template>
<script>
import Team from './Team.vue';

export default {
    name: "HomeFourthIndex",
    components: { Team }
};
</script>
<style lang="scss" scoped>
.team {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
}
</style>
