<template>
  <div class="main-style">
    <HomeFirstIndex />
    <HomeSecondIndex />
    <HomeThirdIndex />
    <HomeFourthIndex />
    <HomeFifthIndex />
    <HomeSixtyIndex />
    <HomeSeventhIndex />
    <HomeEightyIndex />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-style {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
