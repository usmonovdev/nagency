<template>
  <div class="right">
    <img src="@/assets/image/questions/man-1.png" alt="man-1" />
    <img src="@/assets/image/questions/man-2.png" alt="man-2" />
    <img src="@/assets/image/questions/man-3.png" alt="man-3" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.right {
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  img {
    width: 220px;
    border-radius: 15px;
    height: fit-content;
  }
}
</style>
