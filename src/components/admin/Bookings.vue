<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="bookings"
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
            {{ dateFromUnix(items[0].deliveryDate) }} </i
          >
        </th>
      </template>

      <template v-slot:item.timestamp="{ item }">
        {{ dateFromUnix(item.timestamp) }}
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
        value: "timestamp",
        sortable: false,
        groupable: false,
      },
    ],
  }),
};
</script>

<style scoped lang="scss"></style>
