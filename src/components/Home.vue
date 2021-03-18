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
        <videos-container></videos-container>
      </div>

      <div id="interviewC">
        <interview-container></interview-container>
      </div>

      <div id="aboutC">
        <about-container></about-container>
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
import VideosContainer from "./VideosContainer.vue";
import AboutContainer from "./AboutContainer.vue";
export default {
  components: {
    Navbar,
    HomeContainer,
    DrawingsContainer,
    CodeContainer,
    InterviewContainer,
    VideosContainer,
    AboutContainer
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

  // mounted() {
  //   document.addEventListener(
  //     "wheel",
  //     (e) => {
  //       e.preventDefault();
  //       console.log(this.locked);
  //       document.getElementById("scroll_container").scrollLeft +=
  //         e.deltaY * 0.2;
  //       var scrollY = window.scrollY; //현재 스크롤되고 있는 왼쪽 끝
  //       var lockStartY = document.getElementById("home").offsetHeight; //락이 시작되는 Y좌표
  //       // var lockEndY =
  //       //   document.getElementById("home").offsetHeight +
  //       //   document.getElementById("scroll_container").offsetHeight;
  //       var scrollX = document.getElementById("scroll_container").scrollLeft;
  //       var lockEndX = 5020;
  //       console.log(scrollY, lockStartY, scrollX, lockEndX);

  //       if (scrollY >= lockStartY) {
  //         window.scrollTo(0, lockStartY);
  //         this.locked = true;
  //             e.preventDefault();
  //             document.getElementById("scroll_container").scrollLeft += e.deltaY;
  //             if(scrollX >= lockEndX) {
  //               this.locked = true;
  //             }
  //       }

  //       if(this.locked === true) {
  //         if(scrollY < lockStartY) {
  //           window.scrollTo(0, lockStartY)
  //           e.preventDefault();
  //           document.getElementById("scroll_container").scrollLeft += e.deltaY;
  //           if(scrollX === 0) {
  //             window.scrollTo(0, lockStartY - 10)

  //             this.locked = false;
  //           }
  //         }
  //       }
  //     },
  //     { passive: false }
  //   );
  // },

  // mounted() {
  //   document.addEventListener(
  //     "wheel",
  //     (e) => {
  //       var scroll_container = document.getElementById("scroll_container");
  //       var drawing = document.getElementById("drawing").offsetWidth;
  //       this.yPos = document.getElementById("home").offsetHeight;
  //       console.log(drawing);
  //       console.log(scroll_container.scrollLeft + document.body.offsetWidth);
  //       console.log(scroll_container.scrollWidth - drawing);

  //       if (
  //         window.scrollY >= this.yPos &&
  //         scroll_container.scrollLeft <= 1200
  //       ) {
  //         window.scrollTo(0, this.yPos);
  //         e.preventDefault();
  //         scroll_container.scrollLeft += e.deltaY;
  //         // console.log(scroll_container.scrollLeft);
  //       }

  //     },
  //     { passive: false }
  //   );
  // },
};
</script>

<style scoped>
.contentContainer {
  width: calc(100% - 80px);
  transition: 0.3s ease-in-out;
  transform: translateX(80px);
}

.open {
  transform: translateX(300px);
}

.navbar {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
