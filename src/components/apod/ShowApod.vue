<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ apodData.title }}</h1>
    <p class="lead">{{ apodData.date }}</p>
    <img
      v-if="apodData.media_type === 'image'"
      class="w-100"
      :src="apodData.url"
      :alt="apodData.title"
    />
    <iframe
      class="d-block mx-auto"
      width="560"
      height="315"
      v-if="apodData.media_type === 'video'"
      :src="apodData.url"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <hr class="my-2" />
    <p>{{ apodData.explanation }}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" :href="apodData.hdurl" role="button"
        >HD Image</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "ShowApod",
  props: ["date"],
  data() {
    return {
      apodData: {},
      error: false,
    };
  },
  methods: {
    getApod(date) {
      let url =
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
      if (date !== undefined) {
        url += `&date=${date}`;
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.apodData = data;
        },
        (error) => {
          console.log(error);
          this.error = true;
        });
    },
  },
  created() {
    this.getApod();
  },
  updated() {
    if (this.date !== this.apodData.date || this.error) {
      this.getApod(this.date);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>