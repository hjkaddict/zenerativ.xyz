<template>
  <section>
    <nav :class="{ navbarExtended: extended }">
      <div class="extendedSide">
        <navbar-item
          v-for="item in navbaritems"
          :key="item"
          :title="item"
          v-scroll-to="'#'+item+'C'"
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
        <div class="text">
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
      navbaritems: [
        "home",
        "drawings",
        "code",
        "videos",
        "interview",
        "about",
      ],
    };
  },
  computed: {},
  methods: {
    menuExtended() {
      this.extended = !this.extended;
      this.$emit("menuExtended", this.extended);
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
  transform: translateX(-220px);
  background-color: black;
  /* opacity: 0.5; */
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  transition: 0.3s ease-in-out;
}

.extendedSide {
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
}
.text {
  font-family: "Montserrat Subrayada", sans-serif;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 3em;
  display: flex;
  align-items: center;
  align-self: end;
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
</style>
