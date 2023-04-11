<template>
  <div class="testimonials-box">
    <div class="testimonials" v-for="data in testimonal">
      <img :src="data.photo" :alt="data.username" />
      <p>{{ data.message }} - @{{ data.username }}</p>
    </div>
  </div>
</template>
<script>
import testimonals from "@/data/testimonals";
export default {
  data() {
    return {
      testimonal: testimonals,
    };
  },
};
</script>
<style lang="scss" scoped>
.testimonials-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  overflow-x: visible;
  .testimonials {
    width: 400px;
    height: 95px;
    display: flex;
    flex-direction: row;
    color: var(--greyscale--grey);
    align-items: center;
    gap: 20px;
    box-shadow: 0px 44px 94px rgba(0, 0, 0, 0.06);
    border-radius: 45px;
    background-color: #fff;
    padding: 30px;
    animation: slider 10000ms infinite ease;
    @keyframes slider {
      100% {
        transform: translateX(-200%);
      }
    }
    img {
      width: 52px;
    }
  }
}
</style>
