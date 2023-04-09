<template>
  <div class="fake-vid">
    <div class="image">
      <div class="circle">
        <img src="@/assets/icon/video-play.svg" alt="play" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.fake-vid {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  .image {
    background-image: url(../../../assets/image/vid.jpg);
    background-size: cover;
    width: 855px;
    height: 505px;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    .circle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: var(--main--white);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        width: 222px;
        height: 222px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: blur(80px);
      }
      img {
        z-index: 10;
      }
    }
  }
}
</style>
