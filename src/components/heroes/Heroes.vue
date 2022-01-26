<template>
  <div class="container">
    <HeroForm @add-hero="addHero($event)"></HeroForm>
    <HeroesList :heroesList="heroes" />
  </div>
</template>

<script>
import { HeroList } from "../../model/HeroList";
import { Hero } from "../../model/Hero";
import HeroesList from "./HeroesList.vue";
import HeroForm from "./HeroForm.vue";

let heroesModel = new HeroList(
        new Hero("Superman", "Man of steel"),
        new Hero("Batman", "Dark knight")
      );

export default {
  name: "Heroes",
  data() {
    return {
      heroes: [...heroesModel.heroes],
    };
  },
  methods: {
    addHero(value) {
      heroesModel.addHero(value);
      this.heroes = [...heroesModel.heroes];
    },
  },
  components: { HeroesList, HeroForm },
};
</script>

<style scoped>
</style>