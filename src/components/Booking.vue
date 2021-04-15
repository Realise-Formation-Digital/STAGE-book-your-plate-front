<template>
  <div>
    <div class="v-application--wrap">
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
                    
                    label="Choisisez votre jour:"
                    outlined
                  ></v-select>
                </v-col>

                <!--Order summary-->
                <v-card class="mx-auto" max-width="100%" max-height="100%">
                  <h2>Résumé Commande:</h2>
                  <p>1x Steak Frite</p>
                  <p>1x Tiramisu</p>
                  <h3>Total 14.- CHF</h3>
                </v-card>
                <br />
                <!--Commentary box-->
                <v-textarea
                  solo
                  name="input-7-4"
                  label="Commentaire"
                ></v-textarea>
                <!--Submit order-->
                <div class="text-center">
                  <v-bottom-sheet v-model="sheet" persistent>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="green" dark v-bind="attrs" v-on="on">
                        Confirmer votre réservation
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
                        Votre réservation nous est bien parvenue
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
</template>

<script>
import fakeDB from "../JS/fakeDB";
import functions from "../JS/functions";
export default {
  name: "Booking",
  mixins: [fakeDB, functions],

  data: () => ({
    sheet: false,

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

    plat: "Steak Frites",
    salade: "Caesar",
    dessert: "Tiramisu",
  }),

  methods: {
    async submit() {
      console.log("This", this.menu);
      alert("Commande bien reçue");
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