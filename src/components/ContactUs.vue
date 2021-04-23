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
              label="Prénom"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="20"
              label="Nom de famille"
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
              label="Commentaire"
              required
            ></v-text-field>
          </v-col>

          <div class="text-center">
            <v-bottom-sheet v-model="sheet" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" dark v-bind="attrs" v-on="on">
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
export default {
  name: "ContactUs",

  data: () => ({
    sheet: false,

    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Merci d'entrer votre nom",
      (v) => v.length <= 20 || "Le nom doit comporter moins de 20 charactères",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Merci d'entrer votre E-mail",
      (v) => /.+@.+/.test(v) || "E-mail invalid",
    ],
    comment: "",
    commentRules: [(v) => !!v || "Merci d'entrer votre text"],
  }),

  methods: {
    async submit() {
      console.log(
        "This",
        this.firstname,
        this.lastname,
        this.comment,
        this.email
      );
      alert("Merci de nous avoir contacté");
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