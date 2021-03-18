<template>
  <section id="vv">
    <video-single></video-single>
  </section>
</template>

<script>
import VideoSingle from "../components/VideoSingle.vue"
export default {
  components: {
    VideoSingle
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  background-color: blue;

  display: flex;

}
</style>
