<template>
  <div>
    <h1>Réservation</h1>

    <div style="transform-origin: center top 0px">
      <div
        data-app="true"
        class="v-application v-application--is-ltr theme--light"
        id="inspire"
        file="wireframes/constrained"
      >
        <div class="v-application--wrap">
          <main
            class="v-main grey lighten-3"
            data-booted="true"
            style="padding: 64px 0px 0px"
          >
            <div class="v-main__wrap">
              <div class="container">
                <div class="row">
                  <!--Container for display-->
                  <div class="col">
                    <div
                      class="v-sheet theme--light rounded-lg"
                      style="min-height: 50vh"
                    >
                      <h1>Votre réservation</h1>
                      <v-col cols="12" md="6">
                        <v-select
                          :items="items"
                          @change="selectPlate($event)"
                          label="Choisisez votre jour:"
                          outlined
                        ></v-select>
                      </v-col>

                      <v-card>
                        <p :id="salade">Votre Salade</p>
                        <v-textarea solo name="input-7-4" label="Nombre désiré"
                          >Votre plat</v-textarea
                        >
                        <p :id="menu">Votre Menu</p>
                        <v-textarea solo name="input-7-4" label="Nombre désiré"
                          >Votre plat</v-textarea
                        >
                        <p :id="dessert">Votre Dessert</p>
                        <v-textarea
                          solo
                          name="input-7-4"
                          label="Nombre désiré"
                        ></v-textarea>
                      </v-card>

                      <v-col cols="12" md="6">
                        <v-textarea
                          solo
                          name="input-7-4"
                          label="Commentaire"
                        ></v-textarea>
                      </v-col>

                      <v-btn @click="submit()">Envoyer</v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as services from "../services/services";
export default {
  name: "Booking",

  data: () => ({
    plate: {
      id: "",
      description: "",
      deliverydate: "",
      price: "",
      specialInfo: "",
      img: "",
      typePlat: "",
      timestamp: "",
    },

    //List menu to choose day of the week
    items: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],

    menu: "Steak Frites",
    salade: "Caesar",
    dessert: "Tiramisu",
  }),

  methods: {
    async selectPlate(event) {
      this.plate = services.getPlateByWeekday(event);
      console.log(this.plate);
    },

    async submit() {
      console.log("This", this.menu);
      /*
      const axios = require('axios');
      const result = await axios.post('/feddback', {
        comment: this.comment,
        email:this.email,
        lastName: this.lastname,
        name: this.name,
      })
      
      if (result.status === 200) {

      }else{

      }
      */

      console.log("Response server");
    },
  },
};
</script>

<style scoped>
</style>