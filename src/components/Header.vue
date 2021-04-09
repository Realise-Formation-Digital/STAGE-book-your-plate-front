<template>
  <div>
    <h1>Header</h1>
    <v-app-bar>
      <router-link to="/">Home</router-link>
      <router-link to="/ContactUs">Contact Us</router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>