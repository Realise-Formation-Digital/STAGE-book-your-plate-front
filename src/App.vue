<template>
  <div id="app">
    <v-app>
      <Header />
      <router-view />
    </v-app>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
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
