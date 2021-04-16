<template>
  <div id="app">
    <v-app>
      <Header />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
