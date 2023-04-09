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
    </div>
  </Container>
  <FooterBottom />
</template>

<style scoped lang="scss">
.main-style {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
