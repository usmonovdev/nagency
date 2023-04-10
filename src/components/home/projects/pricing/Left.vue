<template>
  <div class="left">
    <TitleName> Pricing </TitleName>
    <TitleInfo> Benefits That You Can Feel Immediately </TitleInfo>
    <p class="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam,
      quis nostrud exercitation dolore magna
    </p>
    <BlueButton> See All Pricing </BlueButton>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  .info {
    font-size: 18px;
    font-family: 400;
    color: var(--greyscale--grey);
    line-height: 32px;
  }
}
</style>
