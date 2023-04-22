<template>
  <div class="main">
    <TitleName>Join us!</TitleName>
    <TitleInfo>Join our team!</TitleInfo>
    <h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam,
      quis nostrud exercitation dolore magna
    </h4>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/Location.svg" alt="Location">
        </div>
        <p>Uzbekistan, Tashkent, Bekabad</p>
    </div>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/Phone.svg" alt="phone">
        </div>
        <p>+998 (90) 109 65 04</p>
    </div>
    <div class="info">
        <div class="icon">
            <img src="@/assets/icon/email.png" alt="Email">
        </div>
        <p>usmonovazizbek15@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    h4 {
        font-size: 18px;
        font-weight: 400;
        color: var(--greyscale--grey);
    }
    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(240, 137, 156, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 16px;
            }
        }
        p {
            font-size: 18px;
            font-weight: 400;
            color: var(--greyscale--grey);
        }
    }
}
</style>
