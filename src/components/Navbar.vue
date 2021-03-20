<template>
  <section>
    <nav :class="{ navbarExtended: extended }" v-scroll-lock="extended">
      <div class="extendedSide">
        <navbar-item
          v-for="item in navbaritems"
          :key="item"
          :title="item"
          v-scroll-to="'#' + item + 'C'"
        ></navbar-item>
      </div>

      <div class="notExtendedSide">
        <div class="burgerMenu" @click="menuExtended">
          <div id="nav-icon3" :class="{ open: extended }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="text" v-if="!isMobile()">
          <p>zenerative drawings</p>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import NavbarItem from "../components/NavbarItem.vue";

export default {
  components: {
    NavbarItem,
  },
  data() {
    return {
      extended: false,
      navbaritems: ["home", "drawings", "code", "videos", "interview", "about"],
    };
  },
  computed: {},
  methods: {
    menuExtended() {
      this.extended = !this.extended;
      this.$emit("menuExtended", this.extended);
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent

          //use as v-if="!isMobile()
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>

.navbarExtended {
  transform: translateX(0px);
}

nav {
  color: white;
  position: absolute;
  /* top: 0; */
  left: 0px;
  transform: translateX(-220px);
  background: transparent;
  /* opacity: 0.5; */
  /* width: 300px; */
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  transition: 0.3s ease-in-out;
  z-index: 1;
}

.extendedSide {
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
}

.notExtendedSide {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.burgerMenu {
  width: 80px;
  height: 80px;
  display: flex;
  background: black;
}
.text {
  font-family: "Montserrat Subrayada", sans-serif;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 3em;
  display: flex;
  height: calc(100vh - 80px);
  align-items: center;
  background: black;
  padding: 0.5em 0;
}

#nav-icon3 {
  width: 40px;
  height: 45px;
  position: relative;
  margin: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: white;

  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 14px;
}

#nav-icon3 span:nth-child(4) {
  top: 28px;
}

#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

@media only screen and (max-width: 768px) {
  .text {
    display: none;
  }
}
</style>
