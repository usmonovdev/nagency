<template>
  <footer>
    <Container>
      <ul>
        <li>
          <img src="../assets/logo.png" alt="logo" class="logo" />
        </li>
        <li class="info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididum ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt
        </li>
        <li class="copyright">
          © Copyright 2022, All Rights Reserved by Nagency
        </li>
      </ul>
      <div class="links">
        <ul>
          <li><p>Quick links</p></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <ul>
          <li><p>Help</p></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <ul class="news">
        <li><p>Subscribe to newsletter</p></li>
        <li>
          <p class="info">
            Lorem ipsum dolor sit amet, consec tetur adip iscing elit. Sit quis
            auctor.
          </p>
        </li>
        <li>
          <div class="input-box">
            <input
              class="email"
              type="text"
              placeholder="Enter email address"
            />
            <button>Subscribe</button>
          </div>
        </li>
        <li class="social copyright">
          Follow us on:
          <ul>
            <li><img src="../assets/icon/discord.png" alt="discord" /></li>
            <li><img src="../assets/icon/twitter.png" alt="twitter" /></li>
            <li><img src="../assets/icon/telegram.png" alt="telegram" /></li>
            <li><img src="../assets/icon/youtube.png" alt="youtube" /></li>
          </ul>
        </li>
      </ul>
    </Container>
  </footer>
</template>

<script>
export default {
  name: "FooterBottom",
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  margin-bottom: 30px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
      flex-direction: column-reverse;
      gap: 30px;
    }
    ul {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media screen and (max-width: 992px) {
        width: unset;
      }
      &:first-child {
        li {
          list-style: none;
          img {
            width: 37px;
          }
        }
        .info-text {
          line-height: 30px;
          color: var(--greyscale--grey);
        }
        .copyright {
          color: var(--greyscale--black);
        }
      }
    }
    .links {
      display: flex;
      justify-content: end;
      width: 100%;
      @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      ul {
        li {
          list-style: none;
          p {
            font-weight: 600;
            color: var(--greyscale--black);
          }
          a {
            text-decoration: none;
            font-size: 14px;
            font-weight: 400;
            color: var(--greyscale--grey);
          }
        }
      }
    }
    .news {
      li {
        list-style: none;
        p {
          font-weight: 600;
          line-height: 24px;
          color: var(--greyscale--black);
        }
        .info {
          color: var(--greyscale--grey);
          line-height: 30px;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .input-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 992px) {
          gap: 0;
        }
        input {
          width: 70%;
          height: 50px;
          padding: 10px;
          border: 1px solid #e4e4e7;
          border-right: none;
          border-radius: 3px 0 0 3px;
          outline: none;
        }
        button {
          width: 30%;
          height: 50px;
          background-color: var(--main--pink);
          border: none;
          color: var(--main--white);
          border-radius: 0 3px 3px 0;
          cursor: pointer;
        }
      }
      .social {
        color: var(--greyscale--black);
        font-size: 14px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media screen and (max-width: 992px) {
          justify-content: start;
          gap: 20px;
        }
        ul {
          display: flex;
          flex-direction: row;
          li {
            cursor: pointer;
            img {
              width: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
