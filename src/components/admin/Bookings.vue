<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="orders"
      :sort-by="['deliveryDate', 'userID']"
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
            {{ dateFromUnix(items[0].deliveryDate) }}
          </i>
        </th>
      </template>

      <template v-slot:item.timeStamp="{ item }">
        {{ dateFromUnix(item.timeStamp) }}
      </template>

      <template v-slot:item.plateID="{ item }">
        {{ plates.find((x) => x.id === item.plateID).description }}
      </template>

      <template v-slot:item.userID="{ item }">
        {{
          users.find((x) => x.id === item.userID).firstname +
            " " +
            users.find((x) => x.id === item.userID).lastname
        }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import fakeDB from "../../JS/fakeDB.js";
import functions from "../../JS/functions.js";

export default {
  mixins: [fakeDB, functions],

  data: () => ({
    orders: [],
    plates: [],
    headers: [
      {
        text: "Jour",
        align: "start",
        filterable: false,
        value: "deliveryDate",
      },
      {
        text: "Description",
        value: "plateID",
        sortable: false,
        groupable: false,
      },
      {
        text: "Quantité",
        value: "quantity",
        sortable: false,
        groupable: false,
      },
      { text: "User", value: "userID", sortable: false, groupable: false },
      {
        text: "Commentaire",
        value: "commentary",
        sortable: false,
        groupable: false,
      },
      {
        text: "Date de reservation",
        value: "timeStamp",
        sortable: false,
        groupable: false,
      },
    ],
  }),

  async mounted() {
    try {
      //Connect to API
      const axios = require("axios");
      //Wait the response and pass the url
      const result1 = await axios.get("http://localhost:8000/api/orders");
      const result2 = await axios.get("http://localhost:8000/api/plates");
      this.orders = result1.data;
      this.plates = result2.data;
      console.log(this.orders)
      console.log(this.plates)
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped lang="scss"></style>
