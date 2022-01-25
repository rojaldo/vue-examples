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
    export default {
        name: 'HeroForm',
        data() {
            return {
                newHeroName: '',
            };
        },
        methods: {
            addHero() {
                this.$emit('add-hero', this.newHeroName);
                this.newHeroName = '';
            },
        },
        emits: ['add-hero'],
    }
</script>

<style scoped>

</style>