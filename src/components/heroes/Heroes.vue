<template>
  <div class="container">
    <HeroForm @add-hero="addHero($event)" @update-hero="updateNewHero($event)" :hero="newHero"></HeroForm>
    <HeroesList :heroesList="heroes" />
  </div>
</template>

<script>

import HeroesList from "./HeroesList.vue";
import HeroForm from "./HeroForm.vue";
import { useStore } from "vuex";

export default {
  setup() {
    return {
      store : useStore(),
    };
  },
  name: "Heroes",
  data() {
    return {
      heroes: this.store.getters.getHeroes,
      newHero: this.store.getters.getNewHero,
    };
  },
  methods: {
    addHero(value) {
      this.store.commit("addHero", value);
    },
    updateNewHero(value) {
      this.store.commit("setNewHero", value);
    },
  },
  components: { HeroesList, HeroForm },
};
</script>

<style scoped>
</style>