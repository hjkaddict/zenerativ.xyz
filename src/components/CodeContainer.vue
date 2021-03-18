<template>
  <section>
    <!-- <script type="text/javascript" src="../src/assets/js/bundle.js"></script> -->
    <canvas id="hydra-canvas" width="500" height="500"></canvas>
  </section>
</template>

<script>
export default {

  data() {
    return {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerheight
    }
  },

  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "/js/bundle.js"
    );
    document.head.appendChild(recaptchaScript);
    // var wh = window.height;
    // var ww = window.innerWidth;
    // this.canvasWidth = ww;
    // this.canvasHeight = wh;

  },


  
};


</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: black;
}

canvas {
  width: 100vw;
  height: 100vh
}
</style>
