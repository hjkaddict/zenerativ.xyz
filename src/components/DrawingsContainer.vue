<template>
  <section>
    <div class="wrapper">
      <div id="scroll_container" v-dragscroll>
        <drawing
          class="drawing"
          v-for="image in images"
          :key="image.id"
          :imgUrl="image.url"
        ></drawing>
      </div>
    </div>
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
        {
          id: "10",
          url: "drawings11.jpg",
        },
        {
          id: "11",
          url: "drawings12.jpg",
        },
        {
          id: "12",
          url: "drawings13.jpg",
        },
        {
          id: "13",
          url: "drawings14.jpg",
        },
        {
          id: "14",
          url: "drawings15.jpg",
        },
        {
          id: "15",
          url: "drawings16.jpg",
        },
        {
          id: "16",
          url: "drawings17.jpg",
        },
        {
          id: "17",
          url: "drawings18.jpg",
        },
        {
          id: "18",
          url: "drawings19.jpg",
        },
        {
          id: "19",
          url: "drawings20.jpg",
        },
      ],
    };
  },

  mounted() {
    document.addEventListener(
      "wheel",
      (e) => {
        document.getElementById("scroll_container").scrollLeft += (e.deltaY*2);
      },
      { passive: false }
    );
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#scroll_container {
  height: 100%;
  /* white-space: nowrap; */
  overflow: scroll;
  cursor: grab;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
}

.drawing {
  display: inline-block;
}

@media only screen and (max-width: 768px) {
  #scroll_container {
    height: 70%;
  }
}
</style>
