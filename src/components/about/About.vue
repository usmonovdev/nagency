<template>
  <div>
    <div class="title">
      <BigNavigationText>About us</BigNavigationText>
      <SmallNavigationText>Home / About us</SmallNavigationText>
    </div>
    <Container>
      <div class="main-style">
        <AboutFirstIndex/>
        <AboutSecondIndex />
        <AboutThirdIndex />
      </div>
    </Container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main--navigation);
  margin-bottom: 100px;
}
.main-style {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
