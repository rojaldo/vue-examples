<template>
  <div class="container">
    <BeerSlider @update-range="handleRange($event)" :range="range"></BeerSlider>
    <BeersList :beers="filteredBeers"></BeersList>
  </div>
</template>

<script>
import BeersList from "./BeersList.vue";
import BeerSlider from "./BeerSlider.vue";
import { useStore } from "vuex";

export default {
  setup() {
    return {
      store: useStore(),
    };
  },
  name: "Beers",
  data() {
    return {
      beers: [],
      range: this.store.getters.getRange,
    };
  },
  created() {
    this.getBeers();
  },
  components: {
    BeersList,
    BeerSlider,
  },
  computed: {
    filteredBeers() {
      if (this.beers !== undefined) {
        return this.beers.filter((beer) => {
          return beer.abv >= this.range[0] && beer.abv <= this.range[1];
        });
      } else {
        return [];
      }
    },
  },
  methods: {
    getBeers() {
      if (this.beers.length === 0) {
        fetch("https://api.punkapi.com/v2/beers")
          .then((response) => response.json())
          .then((data) => {
            this.beers = data;
            console.log("getBeers");
          });
      }else {
        console.log("Fetching beers from cache");
      }
    },
    handleRange(value) {
      this.range = value;
      this.store.commit("setRange", value);
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>