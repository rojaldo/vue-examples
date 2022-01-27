<template>
  <div class="container">

    <BeerSlider @update-range="handleRange($event)"></BeerSlider>
    <BeersList :beers="filteredBeers"></BeersList>
  </div>
</template>

<script>
import BeersList from "./BeersList.vue";
import BeerSlider from "./BeerSlider.vue";

export default {
  name: "Beers",
  data() {
    return {
      beers: [],
      range: [4, 6],
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
        if(this.beers !== undefined) {
            return this.beers.filter(beer => {
                return beer.abv >= this.range[0] && beer.abv <= this.range[1];
            });
        } else {
            return [];
        }
    },
  },
  methods: {
    getBeers() {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => {
          this.beers = data;
        });
    },
    handleRange(value) {
        this.range = value
    },
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>