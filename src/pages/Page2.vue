<template>
  <div>
    <h1>Page 2</h1>
    <button @click="handleClick">Click Me!</button>
  </div>
</template>


<script>
export default {
  name: "Page2",
  methods: {
    handleClick() {
      this.$store.commit("increment");
    }
  }
};
</script>
