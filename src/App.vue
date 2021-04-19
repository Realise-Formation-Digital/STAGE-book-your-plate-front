<template>
  <div id="app">
    <Header />
    <v-app>
      <router-view />
    </v-app>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
