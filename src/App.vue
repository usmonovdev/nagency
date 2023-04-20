<template>
  <NavbarLarge />
  <NavbarSmall />
  <component :is="currentView" />
  <FooterBottom />
</template>

<script>
import "./assets/base.css";
import Home from "./components/home/Home.vue";
import About from "./components/about/About.vue";
import Service from "./components/service/Service.vue";
import Testimonial from "./components/testimonial/Testimonial.vue";
import Team from "./components/team/Team.vue";
import Pricing from "./components/pricing/Pricing.vue";
import NotFound from "./components/NotFound.vue";

const routes = {
  "/": Home,
  "/about": About,
  "/service": Service,
  "/testimonial": Testimonial,
  "/team": Team,
  "/pricing": Pricing,
};

export default {
  components: {
    Home,
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/" || NotFound];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<style scoped lang="scss"></style>
