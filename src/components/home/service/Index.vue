<template>
  <div class="our-service">
    <div class="title">
      <TitleName> Our Service </TitleName>
      <TitleInfo> What Can We Bring for You </TitleInfo>
    </div>
    <Services />
  </div>
</template>
<script>
import Services from "./Services.vue";

export default {
  name: "HomeSecondIndex",
  components: { Services },
};
</script>
<style lang="scss" scoped>
.our-service {
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
