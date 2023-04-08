<template>
  <button>
    <a href="#"><slot></slot></a>
  </button>
</template>
<script>
export default {
  name: "PrimaryButton",
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
  background: var(--main--pink);
  border-radius: 5px;
  border: none;
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--main--white);
    text-decoration: none;
  }
}
</style>
