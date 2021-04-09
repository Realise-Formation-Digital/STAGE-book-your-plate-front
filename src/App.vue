<template>
  <div id="app">
    <!--Added simple routes, Chris-->
    <v-app-bar>
      <router-link to="/">Home</router-link>
      <router-link to="/ContactUs">Contact Us</router-link>
    </v-app-bar>
    <!---->
    <v-app>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
