<template>
  <div>
    <div style="transform-origin: center top 0px">
      <div
        data-app="true"
        class="v-application v-application--is-ltr theme--light"
        id="inspire"
        file="wireframes/constrained"
      >
        <div class="v-application--wrap">
          <div class="v-main__wrap">
            <div class="container">
              <div class="row">
                <!--Container for display-->
                <div class="col">
                  <div
                    class="v-sheet theme--light rounded-lg"
                    style="min-height: 50vh"
                  >
                    <h1>Menu de la semaine</h1>
                    <h2>Lundi</h2>
                    <p>Salade</p>
                    <p>Plat</p>
                    <p>Dessert</p>
                    <h2>Mardi</h2>
                    <p>Salade</p>
                    <p>Plat</p>
                    <p>Dessert</p>
                    <h2>Mercredi</h2>
                    <p>Salade</p>
                    <p>Plat</p>
                    <p>Dessert</p>
                    <h2>Jeudi</h2>
                    <p>Salade</p>
                    <p>Plat</p>
                    <p>Dessert</p>
                    <h2>Vendredi</h2>
                    <p>Salade</p>
                    <p>Plat</p>
                    <p>Dessert</p>
                  </div>
                  <div class="v-list-item__content">
                    <div class="text-center">
                      <v-bottom-sheet v-model="sheet" persistent>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="green" dark v-bind="attrs" v-on="on">
                            Semaine suivante
                          </v-btn>
                        </template>
                        <v-sheet class="text-center" height="200px">
                          <v-btn
                            class="mt-6"
                            text
                            color="error"
                            @click="sheet = !sheet"
                          >
                            close
                          </v-btn>
                          <div class="py-3">
                            Les menu de la semaine suivante sont affichés le mercredi
                          </div>
                        </v-sheet>
                      </v-bottom-sheet>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fakeDB from "../JS/fakeDB.js";
import functions from "../JS/functions.js";

export default {
  name: "Home",
  mixins: [fakeDB, functions],

 data() {
    return {
      menus: [],
      sheet: false,
    };
  },
  methods: {},
  async mounted() {
    try {
      /*         const axios = require("axios");
        let url = "http://localhost:8000/api/";
        let result = await axios.get(url);  */
      let data = this.plates;
      this.menus = this.groupData(data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
</style>
