<template>
  <v-content>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

      <v-container >
        <h2 class="presentation" align="center" justify="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
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
            lg="2"
          >
            <v-card class="mx-auto" max-width="400">
              <v-card-title>{{ menu.day }}</v-card-title>

              <v-card-subtitle class="pb-0 overline mb-4">
                12 avril
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ menu.meal }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div style="text-align: center; padding: 40px 0px 40px 0px">
          <v-btn elevation="2">Reserver</v-btn>
        </div>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      menus: [
        {
          day: "Lundi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          dessert: "dessert",
        },
        {
          day: "Mardi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          dessert: "dessert",
        },
        {
          day: "Mercredi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          dessert: "dessert",
        },
        {
          day: "Jeudi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          dessert: "dessert",
        },
        {
          day: "Vendredi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          dessert: "dessert",
        },
      ],
    };
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
