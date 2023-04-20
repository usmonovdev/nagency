<template>
  <div class="main">
    <div class="title">
      <BigNavigationText>Testimonial</BigNavigationText>
      <SmallNavigationText>Home / Testimonial</SmallNavigationText>
    </div>
    <Container>
      <div class="main-style">
        <div class="testimonial-box">
          <div class="title-testimonial">
            <TitleName> Testimonials </TitleName>
            <TitleInfo> Our happy clients say about us </TitleInfo>
          </div>
          <Testimonials />
        </div>
        <TestimonialFirstIndex />
        <HomeEightyIndex/>
      </div>
    </Container>
  </div>
</template>

<script>
import Testimonials from "../home/testimonals/Tstimonals.vue";
export default {
  components: { Testimonials },
};
</script>

<style lang="scss" scoped>
.title {
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main--navigation);
  margin-bottom: 100px;
}
.main-style {
  display: flex;
  flex-direction: column;
  gap: 100px;
  &:last-child {
    margin-bottom: 100px;
  }
  .testimonial-box {
    display: flex;
    flex-direction: column;
    gap: 50px;
    .title-testimonial {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
  }
}
</style>
