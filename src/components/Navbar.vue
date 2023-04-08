<template>
  <header>
    <div class="container">
      <ul>
        <li><img src="../assets/logo.png" alt="logo" /></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 95vw;
  }
  ul {
    li {
      img {
        width: 37px;
      }
    }
  }
}
</style>
