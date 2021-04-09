<template>
  <v-content>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

    <div>
      <h2 class="presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </h2>
    </div>

    <div class="blackBlock">
      <h2><em>Menu de la semaine:</em></h2>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </h2>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0em;
  line-height: 1.2em;
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  letter-spacing: 0.02em;
  line-height: 1.5em;
  text-transform: none;
  padding: 150px 35% 120px 12%;
}

.blackBlock {
  background-color: #171717;
  color: #fff;
}
</style>
