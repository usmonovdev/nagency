<template>
  <div class="left">
    <TitleName> About us </TitleName>
    <TitleInfo>
      We Have 15 Years Of Experience On Creative Digital Agency
    </TitleInfo>
    <p class="lorem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam,
      quis nostrud exercitation dolore magna
    </p>
    <div class="projects">
      <div>
        <p>1254+</p>
        <h4>Happy Clients</h4>
      </div>
      <div>
        <p>3245+</p>
        <h4>Project Complated</h4>
      </div>
    </div>
    <BlueButton> View Service </BlueButton>
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
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .lorem {
    font-size: 18px;
    font-weight: 400;
    color: var(--greyscale--grey);
    line-height: 32px;
  }
  .projects {
    display: flex;
    flex-direction: row;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-weight: 600;
        font-size: 24px;
        color: var(--main--blue);
      }
      h4 {
        font-size: 18px;
        font-weight: 400;
        color: var(--greyscale--grey);
        line-height: 32px;
      }
    }
  }
}
</style>
