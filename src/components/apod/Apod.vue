<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-3">{{ apodData.title }}</h1>
      <p class="lead">{{ apodData.date }}</p>
      <img class="w-100" :src="apodData.url" :alt="apodData.title" />
      <hr class="my-2" />
      <p>{{ apodData.explanation }}</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="apodData.hdurl" role="button"
          >HD Image</a
        >
      </p>
    </div>
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
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      )
        .then((response) => response.json())
        .then((data) => {
          this.apodData = data;
          console.log(data);
        });
      return;
    }
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
};
</script>

<style scoped>
</style>