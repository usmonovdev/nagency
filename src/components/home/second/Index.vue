<template>
  <div class="our-service">
    <PageTitle />
    <Services />
  </div>
</template>
<script>
import PageTitle from "./PageTitle.vue";
import Services from "./Services.vue";

export default {
  name: "HomeSecondIndex",
  components: { PageTitle, Services },
};
</script>
<style lang="scss" scoped>
.our-service {
    display: flex;
    flex-direction: column;
    gap: 50px;
}
</style>
