<template>
  <div class="data" v-for="data in team">
    <img :src="data.photo" :alt="data.name" />
    <div class="tooltip">
      <p class="name">{{ data.name }}</p>
      <p class="profession">{{ data.profession }}</p>
    </div>
  </div>
</template>

<script>
import Albert from "@/assets/image/man-4.png";
import Samuel from "@/assets/image/man-6.png";
import Arthur from "@/assets/image/man-3.png";
import Henry from "@/assets/image/man-1.png";
import Lucas from "@/assets/image/man-2.png";
import Isabella from "@/assets/image/man-5.png";
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "Albert William",
          profession: "Project Manager",
          photo: `${Albert}`,
        },
        {
          name: "Samuel",
          profession: "Mobile Developer",
          photo: `${Samuel}`,
        },
        {
          name: "Arthur",
          profession: "Web Developer",
          photo: `${Arthur}`,
        },
        {
          name: "Henry",
          profession: "Web Developer",
          photo: `${Henry}`,
        },
        {
          name: "Lucas",
          profession: "Mobile Developer",
          photo: `${Lucas}`,
        },
        {
          name: "Isabella",
          profession: "Web Designer",
          photo: `${Isabella}`,
        },
      ],
    };
  },
  mounted() {
    console.log(this.team);
  },
};
</script>

<style lang="scss" scoped>
.data {
  position: relative;
  display: flex;
  justify-content: center;
  transform: rotate(10deg);
  transition: 100ms ease-out;
  box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.1);
  border-radius: 20px;
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
</style>
