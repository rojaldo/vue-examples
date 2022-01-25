<template>
  <div class="container">
      <HeroForm @add-hero="addHero($event)"></HeroForm>
    <HeroesList :heroesList="heroes" />
  </div>
</template>

<script>
import HeroesList from "./HeroesList.vue";
import HeroForm from "./HeroForm.vue";
export default {
  name: "Heroes",
  data() {
    return {
      heroes: ["Batman", "Superman", "Spiderman"],
    };
  },
  methods: {
    addHero(value) {
      this.heroes.push(value);
    },
  },
  components: { HeroesList, HeroForm },
};
</script>

<style scoped>
</style>