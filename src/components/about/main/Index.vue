<template>
  <div class="welcome">
    <Left />
    <Right/>
  </div>
</template>

<script>
import Left from "./Left.vue";
import Right from "../../home/main/Right.vue"

export default {
  name: "AboutFirstIndex",
  components: {
    Left,
    Right
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
}
</style>
