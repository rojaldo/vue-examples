<template>
  <div id="nav">
    <router-link to="/beers" id="beersLink" >Beers</router-link> |
    <router-link to="/calculator" id="calculatorLink">Calculator</router-link> |
    <router-link to="/heroes" id="heroesLink" >Heroes</router-link> |
    <router-link to="/apod" id="apodLink">Apod</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
