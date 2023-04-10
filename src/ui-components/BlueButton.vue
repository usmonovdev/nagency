<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BlueButton",
};
</script>
<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  width: 110px;
  height: 44px;
  background: var(--main--blue);
  border-radius: 5px;
  border: none;
  white-space: nowrap;
  color: var(--main--white);
  cursor: pointer;
}
</style>
