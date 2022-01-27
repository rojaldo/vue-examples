<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3" v-for="(beer, index) in beers" :key="index">
          <div class="card h-100">
              <img class="card-img-top d-block mx-auto mt-2" :src="beer.image_url" alt="" style="width: 70px">
              <div class="card-body">
                  <h4 class="card-title">{{beer.name}}</h4>
                  <h6 class="card-title">{{beer.abv}}</h6>
                  <p class="card-text">{{beer.tagline}}</p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Beers",
  data() {
    return {
      beers: [],
    };
  },
  created() {
    this.getBeers();
  },
  methods: {
    getBeers() {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => {
          this.beers = data;
        });
    },
  },
};
</script>

<style scoped>
</style>