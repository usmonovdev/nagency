<template>
  <div class="team-scroll">
    <div class="data" v-for="data in team">
      <img :src="data.photo" :alt="data.name" />
      <div class="tooltip">
        <p class="name">{{ data.name }}</p>
        <p class="profession">{{ data.profession }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import team from "@/data/team";
export default {
  data() {
    return {
      team: team,
    };
  },
};
</script>

<style lang="scss" scoped>
.team-scroll {
  display: flex;
  flex-direction: row;
  gap: 30px;
  min-width: 100%;
  min-height: 280px;
  padding: 15px 10px;
  @media screen and (max-width: 992px) {
    overflow-x: scroll;
  }
  .data {
    width: 170px;
    height: 227px;
    position: relative;
    display: flex;
    justify-content: center;
    transition: 100ms ease-out;
    // box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.1);
    border-radius: 20px;
    &:nth-child(odd) {
      transform: rotate(-3deg);
    }
    &:nth-child(even) {
      transform: rotate(3deg);
    }
    &:hover {
      transform: rotate(0) scale(1.1);
      .tooltip {
        display: flex;
        transform: rotate(0deg);
        transform: scale(1);
        opacity: 1;
      }
    }
    img {
      width: 170px;
      height: 227px;
      border-radius: 20px;
      cursor: pointer;
    }
    .tooltip {
      transition: 400ms;
      width: 80%;
      padding: 12px 16px;
      background-color: var(--main--white);
      position: absolute;
      bottom: 20px;
      border-radius: 8px;
      display: flex;
      transform: scale(0.8);
      opacity: 0;
      align-items: center;
      flex-direction: column;
      .name {
        font-weight: 600;
        font-size: 14px;
        color: var(--greyscale--black);
        margin-bottom: 5px;
      }
      .profession {
        font-weight: 600;
        font-size: 14px;
        color: var(--greyscale--grey);
        white-space: nowrap;
      }
      &::before {
        content: "";
        width: 10px;
        height: 10px;
        background-color: var(--main--white);
        position: absolute;
        top: -5px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
