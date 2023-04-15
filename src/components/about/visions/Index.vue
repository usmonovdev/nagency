<template>
  <div class="our-visions">
    <div class="title">
        <TitleName> Our Visions </TitleName>
        <TitleInfo> Provide The Creative Solutions </TitleInfo>
        <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam,
            quis nostrud exercitation dolore magna
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutFourthIndex",
};
</script>

<style lang="scss" scoped>
.our-visions {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 70%;
        text-align: center;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        .text {
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: var(--greyscale--grey);
        }
    }
}
</style>
