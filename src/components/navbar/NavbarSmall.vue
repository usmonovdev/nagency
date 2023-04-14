<template>
  <header :class="{ background: activeLink !== 1 }">
    <Container>
      <div class="box">
        <img src="../../assets/logo.png" alt="logo" />
        <div
          class="burger_button"
          @click="menu = !menu"
          :class="{ active: menu == true }"
        >
          <ul>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
          </ul>
        </div>
        <div class="items" :class="{ active: menu == true }">
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
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  name: "NavbarSmall",
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
      activeLink: 1,
      menu: false,
    };
  },
  methods: {
    handleGetId(e) {
      this.activeLink = e
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 90px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 993px) {
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
    .burger_button {
      z-index: 100;
      cursor: pointer;
      ul {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: flex-end;
        padding: 0;
        li {
          transition: 200ms;
          list-style: none;
          div {
            width: 100%;
            height: 3px;
            background-color: var(--greyscale--black);
          }
          &:nth-child(1) {
            width: 100%;
          }
          &:nth-child(2) {
            width: 70%;
          }
          &:nth-child(3) {
            width: 40%;
          }
        }
      }
    }
    .burger_button.active {
      ul {
        li {
          width: 100% !important;
        }
      }
    }
    .items {
      position: fixed;
      top: 0;
      right: 0;
      display: none;
      width: 40vw;
      height: 100vh;
      padding: 0 10px;
      background-color: var(--main--pink);
      box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.08);
      z-index: 1;
      @media screen and (max-width: 768px) {
        width: 60vw;
      }
      @media screen and (max-width: 600px) {
        width: 100vw;
      }
      ul {
        position: relative;
        top: 90px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .link {
          cursor: pointer;
          padding: 10px;
          box-shadow: 0px 4px 64px rgba(35, 40, 105, 0.08);
          list-style: none;
          font-weight: 500;
          font-size: 16px;
          text-transform: uppercase;
          line-height: 24px;
          transition: 200ms;
          border-radius: 10px;
          a {
            text-decoration: none;
            color: var(--main--white);
          }
          &:hover {
            background-color: var(--main--blue);
          }
          &:last-child {
            background-color: var(--main--blue);
          }
        }
        .link.active {
          background-color: var(--main--blue);
        }
      }
    }
    .items.active {
      display: block !important;
      animation: menu 200ms both;
    }
    @keyframes menu {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
}
header.background {
  background-color: var(--main--navigation);
}
</style>
