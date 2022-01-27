<template>
  <div class="container">
    <DatePickerApod @updateDateString="updateDate($event)"></DatePickerApod>
    <ShowApod :date="selectedDate"></ShowApod>
  </div>
</template>

<script>
import ShowApod from "./ShowApod.vue";
import DatePickerApod from "./DatePickerApod.vue";
import "vue3-date-time-picker/dist/main.css";

export default {
  name: "Apod",
  data() {
    return {
      message: "Hello World!",
      selectedDate: '',
    };
  },
  components: {
    ShowApod,
    DatePickerApod,
  },
  methods: {
    updateDate(date) {
      this.selectedDate = date;
    },
  },
  mounted() {
    console.log("mounted");
    this.selectedDate = new Date().toISOString().slice(0, 10);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
};
</script>

<style scoped>
</style>