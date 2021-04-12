<template>
  <!--Added simple routes, Chris-->
    <v-app-bar
      absolute>
      <v-btn
      depressed
      color="primary">
        <router-link to="/">Menu de la Semaine</router-link>
      </v-btn>
            <v-btn
      depressed
      color="error">
        <router-link to="/Booking">Réservation</router-link>
      </v-btn>
      <v-btn
      depressed
      color="error">
        <router-link to="/ContactUs">Nous Contacter</router-link>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
</style>