<template>
  <header>
    <Container>
      <div class="box">
        <img src="../../assets/logo.png" alt="logo" />
        <ul>
          <li class="link active"><a href="#">Home</a></li>
          <li class="link"><a href="#">About</a></li>
          <li class="link"><a href="#">Service</a></li>
          <li class="link"><a href="#">Testimonial</a></li>
          <li class="link"><a href="#">Pages</a></li>
          <li class="link"><a href="#">Pricing</a></li>
        </ul>
        <PrimaryButton>Contact Us</PrimaryButton>
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  name: "NavbarLarge",
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: none;
  }
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img {
      width: 37px;
      height: 31px;
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 40px;
      padding: 0;
      .link {
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        transition: 200ms;
        a {
          text-decoration: none;
          color: var(--greyscale--grey);
        }
        &:hover a {
          color: var(--greyscale--black);
        }
      }
      .link.active a {
        color: var(--greyscale--black);
      }
    }
  }
}
</style>
