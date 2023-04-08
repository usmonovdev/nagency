<template>
  <div class="home-left">
    <h1 class="big-text">Creative Digital Agency That Help You Go Ahead</h1>
    <p class="info-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam,
      quis nostrud exercitation dolore magna
    </p>
    <BlueButton><a href="#" class="link">Contact Us</a></BlueButton>
    <div>
      <div class="star-group">
        <img src="@/assets/icon/star.png" alt="star" />
        <img src="@/assets/icon/star.png" alt="star" />
        <img src="@/assets/icon/star.png" alt="star" />
        <img src="@/assets/icon/star.png" alt="star" />
        <img src="@/assets/icon/star.png" alt="star" />
      </div>
      <p class="second-info-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Utenimad minim
        veniam.
      </p>
    </div>
    <div class="user">
      <img src="@/assets/image/sulli_kiri.png" alt="sulli kiri" />
      <div>
        <h4>Sulli Kiri</h4>
        <p>CEO Dream Team</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Left",
};
</script>

<style lang="scss" scoped>
.link {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--main--white);
  text-decoration: none;
}

.home-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .big-text {
    font-size: 60px;
    font-weight: 600;
    color: var(--greyscale--black);
  }
  .info-text {
    font-weight: 400;
    font-size: 18px;
    color: var(--greyscale--grey);
  }
  .star-group {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 10px;
    img {
      width: 16px;
    }
  }
  .second-info-text {
    font-weight: 400;
    font-size: 14px;
    color: var(--greyscale--grey);
  }
  .user {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    img {
      width: 50px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
      h4 {
        font-weight: 700;
        font-size: 18px;
      }
      p {
        font-size: 14px;
        font-weight: 600;
        color: var(--greyscale--grey);
      }
    }
  }
}
</style>
