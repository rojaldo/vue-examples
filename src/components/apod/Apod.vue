<template>
  <div class="container">
    <Datepicker v-model="date" @update:modelValue="updateDate()" />
    <div class="jumbotron">
      <h1 class="display-3">{{ apodData.title }}</h1>
      <p class="lead">{{ apodData.date }}</p>
      <img v-if="apodData.media_type === 'image'" class="w-100" :src="apodData.url" :alt="apodData.title" />
      <iframe class="d-block mx-auto" width="560" height="315" v-if="apodData.media_type === 'video'" :src="apodData.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

export default {
  name: "Apod",
  data() {
    return {
      message: "Hello World!",
      apodData: {},
      date: new Date(),
    };
  },
  components: {
    Datepicker,
  },
  methods: {
      updateDate() {
          console.log(this.date);
          // Date object to yyyy-mm-dd
            let dateString = this.date.toISOString().slice(0, 10);
            this.getApod(dateString);
      },
      getApod(date) {
        let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
        if (date !== undefined) {
          url += `&date=${date}`;
        }
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            this.apodData = data;
          });
      },
  },
  created() {
    console.log("created");
    if (this.apodData !== {}) {
      this.getApod();
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