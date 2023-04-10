<template>
  <div class="right">
    <div
      v-for="data in price"
      class="price"
      :key="data.id"
      :class="{ support: data.main }"
    >
      <div class="top">
        <h3>{{ data.name }}</h3>
        <p>{{ data.title }}</p>
        <h2>${{ data.narx }} <span>/Month</span></h2>
      </div>
      <div class="line"></div>
      <div class="features">
        <h3>{{ data.service }} Service</h3>
        <h4>{{ data.platform }}</h4>
        <h2>{{ data.support }} Customer Support</h2>
        <BlueButton :class="{ active: data.main }">Purchase Now</BlueButton>
      </div>
    </div>
  </div>
</template>

<script>
import price from "@/data/price";
export default {
  data() {
    return {
      price: price,
    };
  },
  mounted() {
    console.log(this.price);
  },
};
</script>

<style lang="scss" scoped>
.right {
  width: 50%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  .price {
    width: 50%;
    height: 400px;
    border-radius: 10px;
    padding: 20px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #e5eaf1;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    .top {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h3 {
        font-size: 20px;
        font-weight: 600;
      }
      p {
        font-size: 16px;
        font-weight: 500;
      }
      h2 {
        font-weight: 700;
        font-size: 48px;
        span {
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: var(--main--white);
      opacity: 1;
    }
    .features {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      h2,
      h3,
      h4 {
        font-size: 16px;
        font-weight: 500;
      }
      button {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
  .price.support {
    background-color: var(--main--pink);
    color: var(--main--white);
    border: none;
    .line {
      opacity: 0.1;
    }
    .active {
      background-color: var(--main--white);
      color: var(--greyscale--black);
    }
  }
}
</style>
