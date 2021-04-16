<template>
  <div>
    <h1>Nous Contacter</h1>

    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="20"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="20"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="comment"
              :rules="commentRules"
              :counter="300"
              label="Comment"
              required
            ></v-text-field>
          </v-col>

          <div class="text-center">
            <v-bottom-sheet v-model="sheet" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" dark v-bind="attrs" v-on="on" @click="submit()">
                  Envoyer
                </v-btn>
              </template>
              <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                  close
                </v-btn>
                <div class="py-3">Votre message a bien été envoyé</div>
              </v-sheet>
            </v-bottom-sheet>
          </div>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import fakeDB from "../JS/fakeDB.js";
export default {
  mixins: [fakeDB],
  name: "ContactUs",

  data: () => ({
    sheet: false,

    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 20 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    comment: "",
    commentRules: [(v) => !!v || "Text is required"],
  }),

  methods: {
    async submit() {
      console.log(
        "Client has entered: ",
        this.firstname,
        this.lastname,
        this.comment,
        this.email
      );
      /* !!!!Mettre dans un fichier .js séparer avec toutes les actions axios!!!!!
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