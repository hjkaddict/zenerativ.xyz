<template>
  <section>
    <div class="container">
      <img id="drawing" :src="require(`../assets/img/drawings/${imgUrl}`)" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["imgUrl"],
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
  /* width: calc(100% * 3 / 4); */
  
}

.container img {
  height: 100vh;
  width: calc( 100vh * 2 / 3)
}
</style>
