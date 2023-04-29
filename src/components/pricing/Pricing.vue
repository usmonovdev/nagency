<template>
  <div>
    <div class="title">
      <BigNavigationText>Pricing</BigNavigationText>
      <SmallNavigationText>Home / Pricing</SmallNavigationText>
    </div>
    <Container>
      <div class="main">
        <HomeEightyIndex/>
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
.main {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
