<script setup>
import "./assets/base.css";
</script>

<template>
  <NavbarLarge />
  <NavbarSmall />
  <Container>
    <div class="main-style">
      <HomeFirstIndex />
      <HomeSecondIndex />
      <HomeThirdIndex />
    </div>
  </Container>
  <FooterBottom />
</template>

<style scoped lang="scss">
.main-style {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
