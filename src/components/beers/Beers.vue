<template>
  <div class="container">
    <div class="container my-3">
      <Slider v-model="range" @update="handleRange()" :lazy="false" />
    </div>
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
        v-for="(beer, index) in showBeers"
        :key="index"
      >
        <div class="card h-100">
          <img
            class="card-img-top d-block mx-auto mt-2"
            :src="beer.image_url"
            alt=""
            style="width: 70px"
          />
          <div class="card-body">
            <h4 class="card-title">{{ beer.name }}</h4>
            <h6 class="card-title">{{ beer.abv }}%</h6>
            <p class="card-text">{{ beer.tagline }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
export default {
  name: "Beers",
  data() {
    return {
      beers: [],
      showBeers: [],
      range: [4, 6],
    };
  },
  created() {
    this.getBeers();
  },
  components: {
    Slider,
  },
  methods: {
    getBeers() {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => {
          this.beers = data;
          this.showBeers = this.beers.filter(
            (beer) => beer.abv >= this.range[0] && beer.abv <= this.range[1]
          );
        });
    },
    handleRange() {
      this.showBeers = this.beers.filter(
        (beer) => beer.abv >= this.range[0] && beer.abv <= this.range[1]
      );
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>