<template>
  <div class="container">
    <BeerSlider @update-range="handleRange($event)" :range="range"></BeerSlider>
    <BeersList :beers="filteredBeers"></BeersList>
  </div>
</template>

<script>
import BeersList from "./BeersList.vue";
import BeerSlider from "./BeerSlider.vue";

export default {
  name: "Beers",
  props: {
    beers: {
      type: Array,
      required: true,
    },
    range: {
      type: Array,
      required: true,
    },
  },
  created() {
    // this.getBeers();
    
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
    handleRange(range) {
      this.$emit("update-range", range);
    },
  },
  emits: ["update-range"],
};
</script>

<style src="@vueform/slider/themes/default.css"></style>