<template>
  <section>
    <div id="videowrapper">
      <div id="fullScreenDiv">
        <video id="video" playsinline autoplay muted loop>
          <source src="../assets/movie/feedback-1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      console.log(window.scrollY);
    },
  },
};
</script>

<style scoped>
section {
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
}

#videowrapper {
  position: relative;
  overflow: hidden;
  z-index: -100;
}

#fullScreenDiv {
  min-height: 100%;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: relative;
}

#video {
  width: 100vw;
  height: auto;
  margin: auto;
  display: block;
}
@media (min-aspect-ratio: 16/9) {
  #video {
    width: 100vw;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  #video {
    height: 100vh;
    width: auto;
    margin-left: 50vw;
    transform: translate(-50%);
  }
}
</style>
