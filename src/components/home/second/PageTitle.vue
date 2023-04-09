<template>
  <div class="title">
    <p>Our Service</p>
    <h1>What Can We Bring for You</h1>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  p {
    color: var(--main--pink);
    font-weight: 500;
    font-size: 18px;
  }
  h1 {
    font-weight: 600;
    font-size: 48px;
    color: var(--grescale--black);
    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
  }
}
</style>
