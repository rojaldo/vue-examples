<template>
  <div>
    <p>{{ apodData }}</p>
  </div>
</template>

<script>
export default {
  name: "Apod",
  data() {
    return {
      message: "Hello World!",
      apodData: {},
    };
  },
  created() {
    console.log("created");
    if (this.apodData !== {}) {
      fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((response) => response.json())
        .then((data) => {
          this.apodData = data;
          console.log(data);
        });
      return;
    }
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
};
</script>

<style scoped>
</style>