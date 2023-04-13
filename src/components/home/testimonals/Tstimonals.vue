<template>
  <div class="testimonials-box">
    
    <div class="testimonials first" v-for="data in testimonalFirst">
      <img :src="data.photo" :alt="data.username" />
      <p>{{ data.message }} - @{{ data.username }}</p>
    </div>
    <div class="testimonials second" v-for="data in testimonalSecond">
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
      testimonalFirst: testimonals,
      testimonalSecond: testimonals,
    };
  },
  methods: {
    sliceTestimonialFirst: function () {
      this.testimonalFirst = this.testimonalFirst.slice(0, 6);
    },
    sliceTestimonialSecond: function () {
      this.testimonalSecond = this.testimonalSecond.slice(6, 12);
    },
  },
  mounted() {
    this.sliceTestimonialFirst();
    this.sliceTestimonialSecond();
  },
};
</script>
<style lang="scss" scoped>
.testimonials-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  overflow-x: scroll;
  .testimonials {
    width: 400px;
    height: 95px;
    display: flex;
    flex-direction: row;
    color: var(--greyscale--grey);
    align-items: center;
    gap: 20px;
    border: 1px solid #E5EAF1;
    border-radius: 45px;
    background-color: #fff;
    padding: 20px;
    img {
      width: 52px;
    }
  }
  .testimonials.first {
    position: relative;
    right: 200px;
  }
  .testimonials.second {
    position: relative;
    right: 100px;
  }
}
</style>
