<template>
  <div class="display">
    <!-- <input type="text" readonly size="15" id="d" /> -->
    <h3 id="d">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "Display",
    props: {
        message: String
    }, data() {
        return {
            msg: 'Hello World!'
        }
    },
};
</script>

<style scoped>
.display {
    background-color: #8da09b;
    width: 220px;
    position: relative;
    left: 15px;
    top: 20px;
    height: 40px;
}
</style>