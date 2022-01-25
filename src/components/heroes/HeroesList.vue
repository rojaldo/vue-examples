<template>
  <ul class="list-group mt-4">
    <li class="list-group-item" v-for="(hero, index) in heroesList" :key="index">
      {{ hero }}
    </li>
  </ul>
</template>

<script>
export default {
    name: 'HeroesList',
    props: {heroesList: Array},
};
</script>

<style  scoped>
</style>