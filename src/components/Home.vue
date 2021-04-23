<template>
  <v-main>
    <v-parallax dark src="/img/27.jpg" class="test">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            <div id="imgDesc">
              Caféteria de Réalise
            </div>
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-alert
      class="alert"
      v-if="bookingSent"
      elevation="5"
      dismissible
      type="success"
      >Nous avons bien reçu votre commande!</v-alert
    >
    <v-container>
      <h2 class="presentation" align="center" justify="cente">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </h2>
    </v-container>
    <section class="blackBlock">
      <v-container>
        <h2 class="menuTitle"><em>Menu de la semaine:</em></h2>
        <v-row align="center" justify="center">
          <v-col
            v-for="(menu, index) in menus"
            :key="index"
            cols="12"
            sm="6"
            md="6"
            lg="4"
          >
            <v-card class="mx-auto" max-width="400">
              <v-card-title>
                {{ weekdayFromUnix(menu.deliveryDate) }}
              </v-card-title>

              <v-card-subtitle class="pb-0 overline mb-4">
                {{ dateFromUnix(menu.deliveryDate) }}
              </v-card-subtitle>

              <v-card-text
                v-for="(currentMenu, index) in menu.currentMenu"
                :key="index"
                class="text--primary"
              >
                <h4>{{ currentMenu.plateType }}</h4>
                <div>
                  {{ currentMenu.description }}
                </div>
              </v-card-text>
              <menuModal
                v-bind:menu="menu"
                v-on:clicked-confirm-booking="bookingSent = true"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script>
import fakeDB from "../JS/fakeDB.js";
import functions from "../JS/functions.js";
import menuModal from "./menuModal.vue";

export default {
  mixins: [fakeDB, functions],
  name: "Home",
  components: { menuModal },

  data() {
    return {
      menus: [],
      bookingSent: false,
    };
  },
  methods: {},
  async mounted() {
    try {
      //Connect to API
      const axios = require("axios");
      //Wait the response and pass the url
      const result = await axios.get("http://localhost:8000/api/plates");

      this.menus = this.filterData(result.data);
    } catch (e) {
      console.log(e);
    }
  },
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
}

p {
  padding: 13px 0px 7px 0px;
}

.presentation {
  padding: 80px 0 80px 0%;
}

#imgDesc{
  font-size: 60px;
  color: white;
  text-shadow: 0 0 10px #000000;
}

.blackBlock {
  background-color: #1e1e1e;
  color: #fff;
  padding-bottom: 40px;
}

.menuTitle {
  padding: 50px 0px 50px 10%;
}

.menuTable {
  margin: auto;
  width: 72%;
  padding-bottom: 100px;
}

.days {
  font-size: 18px !important;
}

.text-left {
  font-size: 18px !important;
  padding-bottom: 20px !important;
}

.alert {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
  vertical-align: middle;
}
</style>
