<template>
  <!-- vue ScrollTo Plugin -->
  <section>
    <div class="navbar">
      <navbar @menuExtended="checkExtended($event)"></navbar>
    </div>

    <div class="contentContainer" :class="{ open: extended }">
      <div class="homeContainer" id="homeC">
        <home-container></home-container>
      </div>

      <div id="drawingsC">
        <drawings-container></drawings-container>
      </div>

      <div id="codeC">
        <code-container></code-container>
      </div>

      <div id="videosC">
        <!-- <videos-container></videos-container> -->
      </div>

      <div id="interviewC">
        <interview-container></interview-container>
      </div>

      <div id="aboutC">
        <!-- <about-container></about-container> -->
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "./Navbar.vue";
import HomeContainer from "./HomeContainer.vue";
import DrawingsContainer from "./DrawingsContainer.vue";
import CodeContainer from "./CodeContainer.vue";
import InterviewContainer from "./InterviewContainer.vue";
// import VideosContainer from "./VideosContainer.vue";
// import AboutContainer from "./AboutContainer.vue";
export default {
  components: {
    Navbar,
    HomeContainer,
    DrawingsContainer,
    CodeContainer,
    InterviewContainer,
    // VideosContainer,
    // AboutContainer
  },
  data() {
    return {
      extended: false,
      yPos: 0,
      locked: true,
    };
  },

  methods: {
    checkExtended(m) {
      this.extended = m;
    },
  },
};
</script>

<style scoped>
.contentContainer {
  width: calc(100%);
  transition: 0.3s ease-in-out;
  transform: translateX(0);
}

.open {
  transform: translateX(220px);
}

.navbar {
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0;
  
}

@media only screen and (max-width: 1024px) {

}
</style>
