<template>
  <div class="container my-3">
    <Slider v-model="myRange" @update="handleRange()" :lazy="false" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  name: "BeerSlider",
  data() {
    return {
      myRange: this.range,
    };
  },
  props:["range"],
  methods: {
    handleRange() {
      this.$emit("update-range", this.myRange);
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