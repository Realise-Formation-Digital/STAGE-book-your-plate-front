<template>
  <v-main>
    <v-img dark src="img/26.JPG"></v-img>

    <v-container>
      <h2 class="presentation" align="center" justify="center">
        Bienvenue à la cafétéria de Réalise
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

              <!--v-card-text class="text--primary">
                <h4>Plat principal</h4>
                <div v-for="(main, index) in menu[0]" :key="index">
                  {{ main.description }}
                </div>
                <h4>Salades</h4>
                <div v-for="(salad, index) in menu[1]" :key="index">
                  {{ salad.description }}
                </div>
                <h4>Dessert</h4>
                <div v-for="(dessert, index) in menu[2]" :key="index">
                  {{ dessert.description }}
                </div>
              </v-card-text-->
            </v-card>
          </v-col>
        </v-row>
        <div style="text-align: center; padding: 40px 0px 40px 0px">
          <v-btn elevation="2">Reserver</v-btn>
        </div>
      </v-container>
    </section>
  </v-main>
</template>

<script>
import fakeDB from "../JS/fakeDB.js";
import functions from "../JS/functions.js";
export default {
  mixins: [fakeDB, functions],
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
}
p {
  padding: 13px 0px 7px 0px;
}
.presentation {
  padding: 80px 0 80px 0%;
}
.blackBlock {
  background-color: #1e1e1e;
  color: #fff;
}
.menuTitle {
  padding: 70px 0px 50px 10%;
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
</style>