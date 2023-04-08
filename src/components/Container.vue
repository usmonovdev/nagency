<script>
export default {
  name: "Container",
};
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 90vw;
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 95vw;
  }
}
</style>
