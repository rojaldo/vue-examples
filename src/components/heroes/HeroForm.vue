<template>
  <div class="form-group">
    <label for="">Hero Name</label>
    <input
      type="text"
      class="form-control"
      name=""
      id=""
      aria-describedby="helpId"
      placeholder=""
      v-model="newHeroName"
    />
    <label for="">Hero Description</label>
    <input
      type="text"
      class="form-control"
      name=""
      id=""
      aria-describedby="helpId"
      placeholder=""
      v-model="newHeroDescritpion"
    />
    <button
      type="button"
      class="btn btn-primary mt-2"
      @click="addHero()"
      :disabled="newHeroName === ''"
    >
      Add
    </button>
  </div>
</template>

<script>
import { Hero } from "../../model/Hero";
export default {
  name: "HeroForm",
  data() {
    return {
      newHeroName: this.hero.name,
      newHeroDescritpion: this.hero.description,
    };
  },
  props: {
    hero: {
      type: Object,
      required: false,
    },
  },
  unmounted() {
    this.$emit("update-hero", new Hero(this.newHeroName, this.newHeroDescritpion));
  },
  methods: {
    addHero() {
      this.$emit("update-hero", new Hero(this.newHeroName, this.newHeroDescritpion));
      this.$emit(
        "add-hero",
        new Hero(this.newHeroName, this.newHeroDescritpion)
      );
      this.newHeroName = "";
      this.newHeroDescritpion = "";
    },
  },
  emits: ["add-hero","update-hero"],
};
</script>

<style scoped>
</style>