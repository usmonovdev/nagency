<template>
  <div class="left">
    <div>
      <TitleName> Common Questions </TitleName>
      <TitleInfo> Frequently Asked Questions </TitleInfo>
    </div>
    <div class="questions-box" v-for="data in questions" :key="data.id">
      <div class="title-box">
        <p class="title">{{ data.title }}</p>
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16671 7.28808L7.00004 1.45475L12.8334 7.28809"
            stroke="#0F172A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="question">{{ data.answer }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
          id: 1,
        },
        {
          title: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
          id: 2,
        },
        {
          title: "Lorem ipsum dolor sit amet, consect etur adipiscing elit",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor for the main condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations.",
          id: 3,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.left {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .questions-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: none;
    border-bottom: 1px solid #E5EAF1;
    padding: 0 0 20px 0;
    .title-box {
      display: flex;
      flex-direction: row-reverse;
      justify-content: left;
      align-items: center;
      gap: 20px;
      .title {
        color: var(--greyscale--black);
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  .question {
    font-size: 18px;
    color: var(--greyscale--grey);
    font-weight: 400;
    padding: 0 5px;
    line-height: 32px;
  }
}
</style>
