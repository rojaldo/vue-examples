<template>
  <Datepicker v-model="date" @update:modelValue="updateDate()" />
</template>

<script>
import Datepicker from "vue3-date-time-picker";
export default {
  name: "DatePickerApod",
  data() {
    return {
      date: new Date(),
    };
  },
  components: {
    Datepicker,
  },
  methods: {
    updateDate() {
      console.log(this.date);
      // Date object to yyyy-mm-dd
      let dateString = this.date.toISOString().slice(0, 10);
      this.$emit("updateDateString", dateString);
    },
  }
};
</script>

<style scoped>
</style>