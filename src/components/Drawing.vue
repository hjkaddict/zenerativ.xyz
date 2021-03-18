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
  height: 100%;
}

.container img {
  height: 100%;
  width: calc(100vh * 2 / 3);

    border: 2px solid black;
}

@media only screen and (max-width: 768px) {
  .container {
    height: 70vh;
  }
  .container img {
    height: 100%;
    width: calc(70vh * 2 / 3);
    border: 1px solid black;
  }
}
</style>
