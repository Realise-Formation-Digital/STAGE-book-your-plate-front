<template>
  <v-content>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

    <v-container>
      <h2 class="presentation" align="center" justify="center">
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
            lg="3"
          >
            <v-card class="mx-auto" max-width="400">
              <v-card-title>{{ menu.day }}</v-card-title>

              <v-card-subtitle class="pb-0 overline mb-4">
                12 avril
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <h4>Plat principal</h4>
                <div>{{ menu.meal }}</div>
                <h4>Salades</h4>
                <div v-for="(salad, index) in menus[index].salads" :key="index">
                  {{ salad }}
                </div>
                <h4>Dessert</h4>
                <div>{{ menu.dessert }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div style="text-align: center; padding: 40px 0px 40px 0px">
          <v-btn elevation="2" @click="test()">Reserver</v-btn>
        </div>
      </v-container>
    </section>
  </v-content>
</template>

<script>
import fakeDB from "../JS/fakeDB";
import dayjs from "dayjs";

export default {
  name: "Home",
  mixins: [fakeDB],
  data() {
    return {
      menus: [
        {
          day: "Lundi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          salads: [
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          ],
          dessert: "Salade d'ananas",
        },
        {
          day: "Mardi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",

          salads: [
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          ],
          dessert: "Salade d'ananas",
        },
        {
          day: "Mercredi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          salads: [
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          ],
          dessert: "Salade d'ananas",
        },
        {
          day: "Jeudi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          salads: [
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          ],
          dessert: "Salade d'ananas",
        },
        {
          day: "Vendredi",
          meal:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          salads: [
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          ],
          dessert: "Salade d'ananas",
        },
      ],
    };
  },

  methods: {
    test() {
      console.log(this.data);
    },

    groupByDate(data) {
      let map = new Map(Array.from(data, (obj) => [obj["deliveryDate"], []]));
      data.forEach((obj) => map.get(obj["deliveryDate"]).push(obj));

      return Array.from(map.values());
    },

    weekdayFromUnix(timeStamp) {
      const weekday = new Array(7);
      weekday[0] = "Dimanche";
      weekday[1] = "Lundi";
      weekday[2] = "Mardi";
      weekday[3] = "Mercredi";
      weekday[4] = "Jeudi";
      weekday[5] = "Vendredi";
      weekday[6] = "Samedi";

      return weekday[dayjs.unix(timeStamp).$d.getDay()];
    },

    dateFromUnix(timeStamp) {
      const month = new Array(7);
      month[0] = "Janvier";
      month[1] = "Février";
      month[2] = "Mars";
      month[3] = "Avril";
      month[4] = "Mai";
      month[5] = "Juin";
      month[6] = "Juillet";
      month[7] = "Août";
      month[8] = "Septembre";
      month[9] = "Octobre";
      month[10] = "Novembre";
      month[11] = "Décembre";

      let date = dayjs.unix(timeStamp).$d;
      let monthString = month[date.getUTCMonth()];
      var day = date.getUTCDate();

      return day + " " + monthString;
    },
  },

  async mounted() {
    try {
      /*         const axios = require("axios");
        let url = "http://localhost:8000/api/";
        let result = await axios.get(url);  */

      let data = this.plates;
      data = this.groupByDate(data)

let unique = [...new Set(data[0].map(item => item.description))];
console.log(unique);
      
      console.log(this.weekdayFromUnix(1618322669));
      console.log(this.dateFromUnix(1618322669));
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
