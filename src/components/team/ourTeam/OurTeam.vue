<template>
  <div class="main">
    <div class="title">
      <TitleName> Our Team </TitleName>
      <TitleInfo> Meet With Professional Team </TitleInfo>
    </div>
    <div class="team">
      <div class="data" v-for="data in team" :key="data.id">
        <img :src="data.photo" :alt="data.name" />
        <div class="tooltip">
          <p class="name">{{ data.name }}</p>
          <p class="profession">{{ data.profession }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import team from "@/data/team";
export default {
  name: "TeamFirstIndex",
  data() {
    return {
      team: team,
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  .team {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    width: 80%;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .data {
      position: relative;
      display: flex;
      justify-content: center;
      transition: 100ms ease-out;
      box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.1);
      border-radius: 20px;
      &:nth-child(odd) {
        transform: rotate(3deg);
      }
      &:nth-child(even) {
        transform: rotate(-3deg);
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
        width: 100%;
        border-radius: 20px;
        cursor: pointer;
      }
      .tooltip {
        transition: 400ms;
        width: fit-content;
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
}
</style>
