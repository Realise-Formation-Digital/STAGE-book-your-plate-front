<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
      hide-default-footer
      :items-per-page="-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title><h3>Utilisateurs</h3></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" dark tile large color="indigo">
                <v-icon left>
                  mdi-account-plus
                </v-icon>
                Ajouter
              </v-btn>
            </template>
            <template v-slot:default="dialog">
              <validation-observer v-slot="{ valid }">
                <v-card>
                  <v-toolbar color="indigo" dark
                    ><span class="headline">{{ formTitle }}</span>

                    <v-icon @click="dialog.value = false" class="ml-auto"
                      >mdi-close
                    </v-icon>
                  </v-toolbar>
                  <v-card-text>
                    <validation-provider
                      v-slot="{ errors }"
                      name="typeuser"
                      rules="required"
                    >
                      <v-select
                        v-model="editedItem.typeuser"
                        :items="['User', 'Admin']"
                        label="Type d'utilisateur"
                        :error-messages="errors"
                        data-vv-name="typeuser"
                        required
                      ></v-select>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Email"
                      rules="required|email"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        :error-messages="errors"
                        label="Email"
                      ></v-text-field>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Nom"
                      rules="required"
                    >
                      <v-text-field
                        v-model="editedItem.lastname"
                        :error-messages="errors"
                        label="Nom"
                      ></v-text-field>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Prénom"
                      rules="required"
                    >
                      <v-text-field
                        v-model="editedItem.firstname"
                        :error-messages="errors"
                        label="Prénom"
                      ></v-text-field>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Mot de passe"
                      rules="required"
                    >
                      <v-text-field
                        v-model="editedItem.password"
                        :error-messages="errors"
                        label="Mot de passe"
                      ></v-text-field>
                    </validation-provider>

                    <v-text-field
                      v-model="editedItem.phone"
                      label="Tel (optionel)"
                      hide-details="auto"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      class="my-4 mx-auto"
                      tile
                      large
                      :disabled="!valid"
                      color="success"
                      @click="save"
                      >OK</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </validation-observer>
            </template>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-toolbar color="indigo" dark
              ><span class="headline"
                >Voulez-vous supprimer ce utilisateur?</span
              >

              <v-icon @click="closeDelete" class="ml-auto">mdi-close </v-icon>
            </v-toolbar>
            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  tile
                  large
                  color="error"
                  @click="deleteItemConfirm"
                  class="my-3"
                >
                  <v-icon left>
                    mdi-delete
                  </v-icon>
                  Supprimer
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" outlined fab x-small @click="editItem(item)" class="mx-1 elevation-0">
          <v-icon small>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn color="error" outlined fab x-small @click="deleteItem(item)" class="mx-1 elevation-0">
          <v-icon small>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios';
import fakeDB from "../../JS/fakeDB.js";
import functions from "../../JS/functions.js";
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
  setInteractionMode,
  ValidationObserver,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} ne peut pas être vide",
});

extend("email", {
  ...email,
  message: "Email doit être valide",
});

export default {
  mixins: [fakeDB, functions],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Type d'utilisateur",
        align: "start",
        filterable: false,
        value: "typeuser",
      },
      { text: "Nom", value: "lastname" },
      { text: "Prénom", value: "firstname" },
      { text: "Mot de passe", value: "password" },
      { text: "Email", value: "email" },
      { text: "Tel", value: "phone" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    editedIndex: -1,
    editedItem: {
      email: "",
      typeuser: ["User"],
      password: "",
      firstname: "",
      lastname: "",
      phone: null,
    },
    defaultItem: {
      email: "",
      typeuser: ["User"],
      password: "",
      firstname: "",
      lastname: "",
      phone: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Ajouter un nouvel utilisateur"
        : "Modifier le profil utilisateur";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
          axios.post("http://127.0.0.1:8000/api/users", this.editedItem)
    .then(response => console.log(response));
      }
      this.close();
    },
  },
};
</script>

<style scoped lang="scss"></style>
