<template>
  <v-content>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

    <section>
      <h2 class="presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </h2>
    </section>

    <section class="blackBlock">
      <h2 class="menuTitle"><em>Menu de la semaine:</em></h2>
      <v-simple-table dark class="menuTable">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Jours
              </th>
              <th class="text-left">
                Plats
              </th>
              <th class="text-left">
                Desserts
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(menu, index) in menus" :key="index">
              <td class="days">{{ menu.day }}</td>
              <td>
                <p v-for="(meal, index) in menus[index].meal" :key="index">
                  {{ menu.meal[index] }}
                </p>
              </td>

              <td>{{ menu.dessert }}</td>
            </tr>
          </tbody>
          <h2 style="padding: 15px 0px 0px 30px"><em>Prix: </em></h2>
        </template>
      </v-simple-table>
      <div style="text-align: center">
        <v-btn elevation="2">Reserver</v-btn>
      </div>
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
          meal: ["test 1", "test 2", "test 3"],
          dessert: "dessert",
        },
        {
          day: "Mardi",
          meal: ["test 1", "test 2", "test 3"],
          dessert: "dessert",
        },
        {
          day: "Mercredi",
          meal: ["test 1", "test 2", "test 3"],
          dessert: "dessert",
        },
        {
          day: "Jeudi",
          meal: ["test 1", "test 2", "test 3"],
          dessert: "dessert",
        },
        {
          day: "Vendredi",
          meal: ["test 1", "test 2", "test 3"],
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
  padding: 150px 35% 120px 12%;
}

.blackBlock {
  background-color: #1e1e1e;
  color: #fff;
}

.menuTitle {
  padding: 100px 0px 70px 10%;
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
