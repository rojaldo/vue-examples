<template>
  <ul class="list-group mt-4" id="heroesList">
    <li
      class="list-group-item"
      v-for="(hero, index) in heroesList"
      :key="index"
      :id="'hero-' + index"
    >
      <b>{{ hero.getName() }}</b>
      <br />
      {{ hero.getDescription() }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeroesList",
  props: { heroesList: Array },
};
</script>

<style  scoped>
</style>