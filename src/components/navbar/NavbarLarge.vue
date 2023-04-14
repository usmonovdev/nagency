<template>
  <header :class="{ background: activeLink !== 1 }">
    <Container>
      <div class="box">
        <img src="../../assets/logo.png" alt="logo" />
        <ul>
          <li 
            v-for="data in links"
            :key="data.id"
            class="link"
            :class="{active: data.id == activeLink}"
            @click="handleGetId(data.id)"
          >
            <a :href="'#' + data.link">{{ data.name }}</a>
          </li>
        </ul>
        <PinkButton><a href="#" class="contact">Contact Us</a></PinkButton>
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  name: "NavbarLarge",
  data() {
    return {
      links: [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "About",
          link: "/about",
        },
        {
          id: 3,
          name: "Service",
          link: "/service",
        },
        {
          id: 4,
          name: "Testimonial",
          link: "/testimonial",
        },
        {
          id: 5,
          name: "Pages",
          link: "/pages",
        },
        {
          id: 6,
          name: "Pricing",
          link: "/pricing",
        },
      ],
      activeLink: 1
    };
  },
  methods: {
    handleGetId(e) {
      this.activeLink = e
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--main--white);
  text-decoration: none;
}
header {
  height: 90px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: none;
  }
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img {
      width: 37px;
      height: 31px;
    }
    ul {
      display: flex;
      flex-direction: row;
      gap: 40px;
      padding: 0;
      .link {
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        transition: 200ms;
        a {
          text-decoration: none;
          color: var(--greyscale--grey);
        }
        &:hover a {
          color: var(--greyscale--black);
        }
      }
      .link.active a {
        color: var(--greyscale--black);
      }
    }
  }
}
header.background {
  background-color: var(--main--navigation);
}
</style>
