<template>
  <h2>Tabs</h2>
  <div class="mbs24 mbe16">
    <Tabs>
      <template #tab-2> Heroes </template>
      <template #panel-2>
        <Heroes></Heroes>
      </template>
      <template #tab-1> Calculator </template>
      <template #panel-1>
        <Calculator></Calculator>
      </template>
      <template #tab-foo> Tab Foo </template>
      <template #panel-foo>
        Panel Foo content (no padding or margins so consumer can control desired
        gutters)
      </template>
      <template #tab-bar> Tab Bar </template>
      <template #panel-bar> Panel Bar </template>
    </Tabs>
  </div>
</template>

<script>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Tabs } from "agnostic-vue";
import Calculator from "./components/calculator/Calculator.vue";
import Heroes from "./components/heroes/Heroes.vue";

export default {
  name: "App",
  components: {
    Tabs,
    Calculator,
    Heroes,
  },
  data() {
    return {};
  },
};
</script>
