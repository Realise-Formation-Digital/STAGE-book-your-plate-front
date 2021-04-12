<template>
  <div>
    <div class="v-application--wrap">
      <main class="v-main grey lighten-3" data-booted="true">
        <div class="v-main__wrap">
          <div class="container">
            <div class="row">
              <div class="col">
                <div
                  class="v-sheet theme--light rounded-lg"
                  style="min-height: 50vh"
                >
                  <h1>Votre réservation</h1>
                  <!--Day selector-->
                  <v-col cols="12" md="12">
                    <v-select
                      :items="items"
                      @change="selectPlate($event)"
                      label="Choisisez votre jour:"
                      outlined
                    ></v-select>
                  </v-col>
                  <!--Container for display based on choosen day-->
                  <v-container>
                    <v-row>
                      <v-col><p :id="salade">Votre Salade</p></v-col>
                    </v-row>
                    <v-row>
                      <v-col
                        ><v-textarea solo name="input-7-4" label="Nombre désiré"
                          >Votre plat</v-textarea
                        ></v-col
                      >
                    </v-row>
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
                    <!--Commentary box-->
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Commentaire"
                    ></v-textarea>
                    <!--Order summary-->
                    <v-card class="mx-auto" max-width="100%" max-height="100%"
                      >Résumé Commande:</v-card
                    >
                    <!--Submit order-->
                    <br />
                    <v-btn @click="submit()">Envoyer</v-btn>
                  </v-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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