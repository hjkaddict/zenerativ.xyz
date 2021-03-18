<template>
  <section >
    <div>
      <p>{{title}}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  flex-grow: 1;
  border: 1px solid white;
  font-family: "Montserrat Subrayada", sans-serif;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;  
  font-size: 20px;
  cursor: pointer;
}


</style>
