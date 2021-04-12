<template>
  <div>
    <h1>Résérvation</h1>

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
                      style="min-height: 70vh"
                    >
                      <h1>Votre résérvation</h1>
                      <v-col class="d-flex" cols="12" sm="6">
                        <v-select
                          :items="items"
                          label="Choisisez votre jour:"
                          outlined
                        ></v-select>
                      </v-col>
                      <p>Votre salade + nb</p>
                      <p>Votre plat + nb</p>
                      <p>Votre dessert + nb</p>
                      <br />
                      <h2>Commentaire:</h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quibusdam exercitationem a cum deleniti ut neque
                        officia dicta necessitatibus maiores voluptatem
                        inventore assumenda quasi, rem quidem qui officiis
                        expedita eligendi molestiae.
                      </p>

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
export default {
  name: "Booking",

  data: () => ({
    id: "Number",
    description: "String",
    deliverydate: "Number",
    price: "Number",
    mentionspeciale: "String",
    img: "String",
    typePlat: "String",
    timestamp: "Number",
    //List menu to choose day of the week
    items: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],

    menu: "Steak Frites",
    salade: "Caesar",
    dessert: "Tiramisu",
  }),

  methods: {
    async submit() {
      console.log("This", this.description);
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