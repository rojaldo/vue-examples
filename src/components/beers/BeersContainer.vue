<template>
  <Beers :beers="beers" :range="range" @update-range="handleRange($event)"></Beers>
</template>

<script>
import Beers from "./Beers.vue";
import { useStore } from "vuex";

export default {
  name: "BeersContainer",
  setup() {
    return {
      store: useStore(),
    };
  },
  components: {
    Beers,
  },
  data() {
    return {
      beers: this.store.getters.getList,
      range: this.store.getters.getRange,
    };
  },
  created() {
    this.store.dispatch("fetchBeers");

  },
  methods: {
    handleRange(range) {
      this.store.commit("setRange", range);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>