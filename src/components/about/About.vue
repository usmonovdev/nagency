<template>
  <div>
    <div class="title">
      <BigNavigationText>About us</BigNavigationText>
      <SmallNavigationText>Home / About us</SmallNavigationText>
    </div>
    <Container>
      <div class="main-style">
        <AboutFirstIndex/>
        <AboutSecondIndex />
        <AboutThirdIndex />
        <AboutFourthIndex />
        <HomeFourthIndex/>
        <HomeThirdIndex/>
        <Testimonials />
        <HomeEightyIndex/>
      </div>
    </Container>
  </div>
</template>

<script>
import Testimonials from '../home/testimonals/Tstimonals.vue';
export default {
  components: { Testimonials }
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
}
</style>
