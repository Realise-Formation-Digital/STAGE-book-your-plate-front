<template>
  <div id="app">
    <!--Added simple routes, Chris-->
    <v-app-bar
      absolute>
      <v-btn
      depressed
      color="primary">
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn
      depressed
      color="error">
        <router-link to="/ContactUs">Contact Us</router-link>
      </v-btn>
    </v-app-bar>
    <!---->
    <v-app>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
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
