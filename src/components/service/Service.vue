<template>
  <div>
    <div class="title">
      <BigNavigationText>Service</BigNavigationText>
      <SmallNavigationText>Home / Service</SmallNavigationText>
    </div>
    <Container>
      <div class="main-style">
        <ServiceFirstIndex/>
        <HomeThirdIndex/>
        <div class="pricing">
            <Left/>
            <Right/>
        </div>
        <HomeEightyIndex />
      </div>
    </Container>
  </div>
</template>

<script>
import Left from '../home/projects/pricing/Left.vue';
import Right from '../home/projects/pricing/Right.vue';
export default {
  components: { Left, Right }
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
  .pricing {
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
