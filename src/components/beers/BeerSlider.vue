<template>
  <div class="container my-3">
    <Slider v-model="range" @update="handleRange()" :lazy="false" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  name: "BeerSlider",
  data() {
    return {
      range: [4, 6],
    };
  },
  methods: {
    handleRange() {
      this.$emit("update-range", this.range);
    },
  },
  emits: ["update-range"],
  components: {
    Slider,
  },
};
</script>

<style scoped>
</style>