<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog fullscreen>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="initBooking()" v-bind="attrs" v-on="on"
            >Reserver</v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>
              {{ weekdayFromUnix(menu.deliveryDate) }}
              {{ dateFromUnix(menu.deliveryDate) }}</v-toolbar
            >
            <v-container>
              <v-card-text
                v-for="(currentMenu, index) in menu.currentMenu"
                :key="index"
                class="text--primary"
              >
                <br />
                <h3>{{ currentMenu.plateType }}</h3>
                <div>
                  {{ currentMenu.description }}
                </div>
                <v-divider class="divider"></v-divider>

                <v-row align="center">
                  <v-col class="d-flex" cols="6">
                    <h4>Prix: {{ currentMenu.price }} CHF</h4>
                  </v-col>

                  <v-col class="d-flex" cols="6">
                    <v-select
                      :items="quantity"
                      v-model="chosenQuantity[index]"
                      label="Quantité"
                      return-object
                      @change="calculatePrice()"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-text-field
                label="Commentaires"
                v-model="commentary"
              ></v-text-field>
              <h3>Total: {{ totalPrice }} CHF</h3>
            </v-container>

            <v-dialog v-model="confirm" persistent max-width="350">
              <template v-slot:activator="{ on, attrs }">
                <div style="text-align: center; padding: 15px 0px 15px 0px">
                  <v-btn :disabled="disabled" v-bind="attrs" v-on="on" elevation="2">Reserver</v-btn>
                </div>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Confirmez votre commande
                </v-card-title>
                <v-card-text
                  >Je confirme ma présence le {{ dateFromUnix(menu.deliveryDate) }}.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="confirm = false">
                    Annuler
                  </v-btn>
                  <v-btn
                    @click="confirmBooking(), dialog.value = false"
                    color="green darken-1"
                    text
                  >
                    Je confirme
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import fakeDB from "../JS/fakeDB.js";
import functions from "../JS/functions.js";

export default {
  mixins: [fakeDB, functions],
  props: ["menu"],

  data() {
    return {
      disabled: true,
      confirm: false,
      totalPrice: 0,
      commentary: null,
      bookings: [],
      chosenQuantity: [],
      quantity: [0, 1, 2, 3, 4, 5],
    };
  },

  methods: {
    test() {
      console.log(this.chosenQuantity);
    },

    initBooking() {
      this.chosenQuantity = [];
      this.commentary = null;
      this.disabled = true;
      this.commentary = null;
      this.bookings = [];
      this.confirm = false;
      this.totalPrice = 0;
      for (let i = 0; i < this.menu.currentMenu.length; i++) {
        this.chosenQuantity.push(0);
      }
    },

    calculatePrice() {
      this.totalPrice = 0;
      for (let i = 0; i < this.chosenQuantity.length; i++) {
        if (this.chosenQuantity[i] > 0) {
          this.totalPrice +=
            this.menu.currentMenu[i].price * this.chosenQuantity[i];
        }
      }
      this.totalPrice > 0 ? this.disabled = false : this.disabled = true
    },

    confirmBooking() {
      this.bookings = [];
      this.confirm = false;
      for (let i = 0; i < this.chosenQuantity.length; i++) {
        if (this.chosenQuantity[i] > 0) {
          let booking = {
            userID: 69,
            commentary: this.commentary,
            plateID: this.menu.currentMenu[i].plateID,
            quantity: this.chosenQuantity[i],
            deliveryDate: this.menu.currentMenu[i].deliveryDate,
            timeStamp: (Date.now() / 1000) | 0,
          };
          this.bookings.push(booking);
        }
      }
      console.log(this.bookings)
      this.$emit('clicked-confirm-booking')
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.divider {
  margin: 3px 0px 7px 0px;
}

.quantity-number-v2 {
  #prodQuantity {
    width: 60px;
    height: 30px;
    border: 1px solid #222;
  }
  i {
    padding: 6.8px 10px;
    border: 1px solid #222;
  }
}
</style>
