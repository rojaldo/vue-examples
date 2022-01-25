<template>
<div class="container">
    <div class="form-group">
      <label for="">Hero Name</label>
      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" v-model="newHeroName">
      <button type="button" class="btn btn-primary mt-2" @click="addHero()">Add</button>
    </div>
     <ul class="list-group mt-4">
          <li class="list-group-item" v-for="(hero, index) in heroes"  :key="index">{{hero}}</li>
      </ul>
</div>
</template>

<script>
export default {
    name: 'Heroes',
    data() {
        return {
            heroes: ['Batman', 'Superman', 'Spiderman'],
            newHeroName: ''
        }
    },
    methods: {
        addHero() {
            this.heroes.push(this.newHeroName);
            this.newHeroName = '';
        }
    },
};
</script>

<style scoped>
</style>