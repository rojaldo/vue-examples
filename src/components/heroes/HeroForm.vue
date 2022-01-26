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
      newHeroName: "",
      newHeroDescritpion: "",
    };
  },
  methods: {
    addHero() {
      this.$emit(
        "add-hero",
        new Hero(this.newHeroName, this.newHeroDescritpion)
      );
      this.newHeroName = "";
      this.newHeroDescritpion = "";
    },
  },
  emits: ["add-hero"],
};
</script>

<style scoped>
</style>