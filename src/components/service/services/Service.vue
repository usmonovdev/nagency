<template>
  <div class="container">
    <div class="service-box" v-for="data in service" :key="data.id">
      <div class="service" :class="{ reverce: data.left == false }">
        <div class="left">
          <img :src="data.adv_photo" :alt="data.name" :class="{ reverce: data.left == false }" />
        </div>
        <div class="right">
          <img :src="data.photo" :alt="data.name" />
          <h2>{{ data.name }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad
            minim veniam, quis nostrud exercitation dolore magna
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/data/services";
export default {
  data() {
    return {
      service: service,
    };
  },
  mounted() {
    console.log(this.service);
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .service-box {
    width: 100%;
    .service {
      display: flex;
      flex-direction: row;
      gap: 30px;
      width: 100%;
      @media screen and (max-width: 992px) {
        flex-direction: column;
      }
      .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        img {
          width: 80%;
          height: fit-content;
          object-fit: cover;
          transform: rotate(-2deg);
          border-radius: 25px;
          @media screen and (max-width: 992px) {
            width: 60%;
          }
          @media screen and (max-width: 600px) {
            width: 100%;
          }
        }
      }
      .right {
        width: 50%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        @media screen and (max-width: 600px) {
          gap: 10px;
        }
        img {
          width: 40px;
        }
        h2 {
          font-weight: 600;
          font-size: 48px;
          color: var(--greyscale--black);
          @media screen and (max-width: 600px) {
            font-size: 24px;
          }
        }
        p {
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            color: var(--greyscale--grey);
        }
      }
      .right.reverce {
        transform: rotate(10deg);
      }
    }
    .service.reverce {
      display: flex;
      flex-direction: row-reverse;
      @media screen and (max-width: 992px) {
        flex-direction: column;
      }
    }
  }
}
</style>
