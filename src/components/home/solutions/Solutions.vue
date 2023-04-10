<template>
  <div class="solutions-box">
    <div v-for="data in solution" class="solutions">
      <div class="img-box">
        <img :src="data.photo" alt="" />
      </div>
      <h3>{{ data.name }}</h3>
      <p>{{ data.title }}</p>
    </div>
  </div>
</template>

<script>
import solutions from "@/data/solutions";
export default {
  data() {
    return {
      solution: solutions,
    };
  },
  mounted() {
    console.log(this.solutions);
  },
};
</script>
<style lang="scss" scoped>
.solutions-box {
  width: 100%;
  border: 1px solid #e5eaf1;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .solutions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    &:nth-child(2) {
      border: 1px solid #e5eaf1;
      border-top: none;
      border-bottom: none;
      @media screen and (max-width: 768px) {
        border: none;
      }
    }
    .img-box {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: "";
        position: absolute;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        opacity: 0.1;
        background-color: var(--main--pink);
        z-index: 1;
      }
      img {
        width: 40%;
        z-index: 10;
      }
    }
    h3 {
      font-weight: 600;
      font-size: 24px;
      color: var(--greyscale--black);
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: var(--greyscale--grey);
    }
  }
}
</style>
