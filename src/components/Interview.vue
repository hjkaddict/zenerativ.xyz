<template>
  <section>
    <div
      class="question"
      @click="openAnswer"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ answerHover: hover, answerClick: isOpen }"
    >
      <p>{{ qen }}</p>
      <p>{{ qkr }}</p>
    </div>

    <div class="answer" v-if="isOpen">
      <p>{{ aen }}</p>
      <p>{{ akr }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["qen", "qkr", "aen", "akr"],
  data() {
    return {
      isOpen: false,
      hover: false,
    };
  },
  methods: {
    openAnswer() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
section {
  font-family: "Noto Sans", sans-serif;
  font-size: 2em;
  line-height: 1.2em;
}
.question {
  border-bottom: 2px solid white;
  cursor: pointer;
}
.question p {
  padding: 5px;
}
.answer {
  color: white;
  border-bottom: 2px solid white;
  transition: 2s ease-in-out;
  /* transition: 1.0s ease-in-out */
}
.answer p {
  /* padding: 10px; */
  /* padding-left: 50px; */
  margin-left: 30px;
  padding: 20px;
  border-left: 2px solid white;
}

.answerHover {
  color: #ff008a;
}

.answerClick {
  color: #ff008a;
}
</style>
