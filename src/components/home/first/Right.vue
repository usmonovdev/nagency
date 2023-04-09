<template>
  <div class="home-right">
    <Team class="team"></Team>
  </div>
</template>

<script>
export default {
  name: "Right",
};
</script>

<style lang="scss" scoped>
.home-right {
  width: 50%;
  height: 500px;
  @media screen and (max-width: 992px) {
    display: none;
  }
  .team {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 90%;
  }
}
</style>
