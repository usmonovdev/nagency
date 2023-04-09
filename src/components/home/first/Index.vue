<template>
  <div class="welcome">
    <Left />
    <Right />
  </div>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";
export default {
  name: "HomeFirstIndex",
  components: {
    Left,
    Right,
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  position: relative;
  top: 40px;
}
</style>
