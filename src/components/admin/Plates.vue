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
      hide-default-footer
      :items-per-page="-1"
    >
      <template v-slot:group.header="{ items, isOpen, toggle }">
        <th colspan="10">
          <v-icon @click="toggle"
            >{{ isOpen ? "mdi-minus" : "mdi-plus" }}
          </v-icon>
          <i style="font-size:16px; padding-left:8px"
            >{{ weekdayFromUnix(items[0].deliveryDate) }}
            {{ dateFromUnix(items[0].deliveryDate) }}</i
          >
        </th>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title><h3>Plats</h3></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500" persistent>
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
                        :items="plateTypes"
                        label="Type de plat"
                        :error-messages="errors"
                        data-vv-name="plateType"
                        required
                        @change="setDefaultPrice()"
                      ></v-select>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Prix"
                      rules="required"
                    >
                      <v-text-field

                        type="number"
                        v-model="editedItem.price"
                        :error-messages="errors"
                        label="Prix"
                        required
                      ></v-text-field>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Description"
                      rules="required"
                    >
                      <v-textarea
                        v-model="editedItem.description"
                        :error-messages="errors"
                        label="Description"
                        auto-grow
                        required
                      ></v-textarea>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="Dates"
                      rules="required"
                    >
                      <v-menu
                        v-if="editedIndex < 0"
                        v-model="menu"
                        ref="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-combobox
                            :error-messages="errors"
                            v-model="editedItem.deliveryDate"
                            multiple
                            label="Dates"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            required
                          ></v-combobox>
                        </template>
                        <v-date-picker
                          v-model="editedItem.deliveryDate"
                          multiple
                          no-title
                          scrollable
                          :first-day-of-week="1"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(editedItem.deliveryDate)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>

                      <v-menu
                        v-else
                        v-model="menu"
                        ref="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-x
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-combobox
                            :error-messages="errors"
                            v-model="transformedDate"
                            label="Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            required
                          ></v-combobox>
                        </template>
                        <v-date-picker
                          v-model="transformedDate"
                          no-title
                          scrollable
                          :first-day-of-week="1"
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(editedItem.deliveryDate)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
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
              ><span class="headline">Voulez-vous supprimer ce plat?</span>

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
import dayjs from "dayjs";
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
    transformedDate: null,
    plateTypes: ["Plat Principal", "Salade", "Dessert"],
  defaultPrice:11,
    menu: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Jour",
        align: "start",
        filterable: false,
        value: "deliveryDate",
      },
      {
        text: "Description",
        value: "description",
        sortable: false,
        groupable: false,
      },
      { text: "Type", value: "plateType", sortable: false, groupable: false },
      { text: "Prix", value: "price", sortable: false, groupable: false },
      { text: "Actions", value: "actions", sortable: false, groupable: false },
    ],

    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
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
      console.log(item);
      this.transformedDate = dayjs.unix(item.deliveryDate).format("YYYY-MM-DD");
      console.log(this.transformedDate);
      this.editedIndex = this.plates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log(this.plates.indexOf(item));
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
      this.transformedDate = null;
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
        console.log(this.editedItem);
        this.editedItem.deliveryDate = dayjs(this.transformedDate).unix();
        Object.assign(this.plates[this.editedIndex], this.editedItem);
      } else {
        for (let i = 0; i < this.editedItem.deliveryDate.length; i++) {
          this.plates.push(this.objectToPush(i));
          console.log(this.objectToPush(i));
        }
      }
      this.transformedDate = null;
      this.close();
    },

    objectToPush(i) {
      return {
        deliveryDate: dayjs(this.editedItem.deliveryDate[i]).unix(),
        description: this.editedItem.description,
        plateType: this.editedItem.plateType,
        price: parseFloat(this.editedItem.price),
      };
    },
    setDefaultPrice() {
      if (this.editedItem.plateType === "Plat Principal") {
        this.editedItem.price = "11";
      } else if (this.editedItem.plateType === "Salade") {
        this.editedItem.price = "10.5";
      } else if (this.editedItem.plateType === "Dessert") {
        this.editedItem.price = "3";
      } else {
        this.editedItem.price = "0";
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
