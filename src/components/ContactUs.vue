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
          <v-btn @click="submit()" color="blue lighten-4">Send</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",

  data: () => ({
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
      console.log("This",this.firstname, this.lastname, this.comment, this.email);
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

      console.log("Response server")


    },
  },
};
</script>

<style scoped>
</style>