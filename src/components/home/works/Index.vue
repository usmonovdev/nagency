<template>
  <div class="our-works">
    <div class="title">
      <TitleName> Our Works </TitleName>
      <TitleInfo> This is How We Works </TitleInfo>
    </div>
    <FakeVid/>
  </div>
</template>
<script>
import FakeVid from "./FakeVid.vue"
export default {
  name: "HomeThirdIndex",
  components: { FakeVid }
};
</script>
<style lang="scss" scoped>
.our-works {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
}
</style>
