<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="plates"
      :sort-by="['deliveryDate', 'price']"
      :sort-desc="[false, true]"
      group-by="deliveryDate"
      show-group-by
      multi-sort
      class="elevation-1"
    >
      <template v-slot:item.deliveryDate="{ item }">
        {{ dateFromUnix(item.deliveryDate) }}
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title><h3>Plats</h3></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" dark tile large color="indigo">
                <v-icon left>
                  mdi-silverware
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
                      name="Type de plat"
                      rules="required"
                    >
                      <v-select
                        v-model="editedItem.plateType"
                        :items="['Plat Principal', 'Salade', 'Dessert']"
                        label="Type de plat"
                        :error-messages="errors"
                        data-vv-name="plateType"
                        required
                      ></v-select>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Description"
                      rules="required"
                    >
                      <v-text-field
                        v-model="editedItem.description"
                        :error-messages="errors"
                        label="Description"
                      ></v-text-field>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Prix"
                      rules="required"
                    >
                      <v-text-field
                        v-model="editedItem.price"
                        :error-messages="errors"
                        label="Prix"
                      ></v-text-field>
                    </validation-provider>
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
                >Voulez-vous supprimer ce plat?</span
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
        <v-btn color="primary" fab small @click="editItem(item)" class="mx-1">
          <v-icon small>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn color="error" fab small @click="deleteItem(item)" class="mx-1">
          <v-icon small>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import fakeDB from "../../JS/fakeDB.js";
import functions from "../../JS/functions.js";
import { required } from "vee-validate/dist/rules";
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
        text: "Jour",
        align: "start",
        filterable: false,
        value: "deliveryDate",
      },
      { text: "Description", value: "description", sortable: false, groupable: false, },
      { text: "Type", value: "plateType", sortable: false, groupable: false, },
      { text: "Prix", value: "price", sortable: false, groupable: false, },
      { text: "Actions", value: "actions", sortable: false, groupable: false, },
    ],

    editedIndex: -1,
    editedItem: {
      email: "",
      typeuser: ["User"],
      password: "",
      firstname: "",
      lastname: "",
      tel: null,
    },
    defaultItem: {
      email: "",
      typeuser: ["User"],
      password: "",
      firstname: "",
      lastname: "",
      tel: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Ajouter un nouveau plat"
        : "Modifier le plat";
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
      this.editedIndex = this.plates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.plates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.plates.splice(this.editedIndex, 1);
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
        Object.assign(this.plates[this.editedIndex], this.editedItem);
      } else {
        this.plates.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped lang="scss"></style>
