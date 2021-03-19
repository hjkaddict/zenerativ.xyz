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
      <p class="qkr">{{ qkr }}</p>
    </div>

    <div class="answer" v-if="isOpen">
      <p>{{ aen }}</p>
      <p class="qkr">{{ akr }}</p>
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
      console.log(this.isOpen);
    },
  },
};
</script>

<style scoped>
section {
  font-family: "Noto Sans", sans-serif;
  font-size: 2em;
  line-height: 1.4em;
  letter-spacing: 0em;
  /* border: 1px solid blue; */
}

.qkr {
  letter-spacing: -0.03em;
  line-height: 1.45em;
}

.question {
  position: relative;
  left: 80px;
  width: calc(100% - 80px);
  border-bottom: 1px solid white;
  cursor: pointer;
  z-index: 3;
  padding: 0.6em 0;
  
}
.question p {
  padding: 5px;
}
.answer {
  position: relative;
  left: 80px;
  width: calc(100% - 80px);
  color: white;
  border-bottom: 1px solid white;
}
.answer p {
  margin-left: 30px;
  padding: 20px;
  border-left: 1px solid #ff008a;
}

.answerHover {
  color: #ff008a;
  
}

.answerClick {
  color: #ff008a;
  border-bottom: 1px solid #ff008a;
}

@media only screen and (max-width: 768px) {
  section {
    font-size: 1em;
  }

  .answer,
  .question {
    position: relative;
    left: 0px;
    width: 100%;
  }
}
</style>
