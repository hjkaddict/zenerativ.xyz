<template>
  <section id="scroll_container" v-dragscroll.x>
    <drawing
      class="drawing"
      v-for="image in images"
      :key="image.id"
      :imgUrl="image.url"
    ></drawing>
  </section>
</template>

<script>
import Drawing from "../components/Drawing.vue";
import { dragscroll } from "vue-dragscroll";

export default {
  components: { Drawing },
  directives: {
    dragscroll,
  },

  data() {
    return {
      images: [
        {
          id: "0",
          url: "drawings01.jpg",
        },
        {
          id: "1",
          url: "drawings02.jpg",
        },
        {
          id: "2",
          url: "drawings03.jpg",
        },
        {
          id: "3",
          url: "drawings04.jpg",
        },
        {
          id: "4",
          url: "drawings05.jpg",
        },
        {
          id: "5",
          url: "drawings06.jpg",
        },
        {
          id: "6",
          url: "drawings07.jpg",
        },
        {
          id: "7",
          url: "drawings08.jpg",
        },
        {
          id: "8",
          url: "drawings09.jpg",
        },
        {
          id: "9",
          url: "drawings10.jpg",
        },
      ],
    };
  },

  mounted() {
    document.addEventListener(
      "wheel",
      (e) => {
        document.getElementById("scroll_container").scrollLeft += (e.deltaY * 0.2);
      },
      { passive: false }
    );
  },
};
</script>

<style scoped>
#scroll_container {
  height: 100vh;
  white-space: nowrap;
  overflow: scroll;
  cursor: grab;
  
  /* overflow-x: hidden; */
  background-color: black;
}

.drawing {
  display: inline-block;
  height: 100%;
}
</style>
