import dayjs from "dayjs";

export default {
  data() {
    return {
      menus: [],
    };
  },

  async mounted() {
    try {
      /*         const axios = require("axios");
        let url = "http://localhost:8000/api/";
        let result = await axios.get(url);  */

      let data = this.plates;
      this.menus = this.groupData(data);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    //Before working with data, sort it by value of timestamp
    sortByDeliveryDate(data) {
      return data.sort((a, b) => (a.deliveryDate > b.deliveryDate ? 1 : -1));
    },

    //Groups data by given property
    //The Map instance is created from key/value pairs that are generated from the input array.
    //The keys are the values of the property to group by, and the values are initialised as empty arrays.
    groupByProperty(data, property) {
      data = this.sortByDeliveryDate(data);
      let map = new Map(Array.from(data, (obj) => [obj[property], []]));
      data.forEach((obj) => map.get(obj[property]).push(obj));

      return Array.from(map.values());
    },

    //When data is grouped by deliveryDate, sort it by plate type in specific order
    sortByPlateType(data) {
      const order = ["Main", "Salad", "Dessert"];
      let sorted = [];

      for (let i = 0; i < data.length; i++) {
        sorted.push(
          data[i].sort(function(a, b) {
            let A = a["plateType"];
            let B = b["plateType"];

            if (order.indexOf(A) < order.indexOf(B)) {
              return 1;
            } else {
              return -1;
            }
          })
        );
      }

      return sorted;
    },

    //Does all of the above functions, and returns sorted and grouped array
    groupData(data) {
      //Groups data by deliveryDate
      let groupedByDeliveryDate = this.groupByProperty(data, "deliveryDate");
      //Sorts it by plateType
      groupedByDeliveryDate = this.sortByPlateType(groupedByDeliveryDate);
      let groupedData = [];

      //And for each array groups it again by plateType
      for (let i = 0; i < groupedByDeliveryDate.length; i++) {
        groupedData.push(
          this.groupByProperty(groupedByDeliveryDate[i], "plateType")
        );
      }
      console.log(groupedData);
      return groupedData;
    },

    //Takes unix timestamp and returns weekday (string)
    weekdayFromUnix(timeStamp) {
      const weekday = new Array(7);
      weekday[0] = "Dimanche";
      weekday[1] = "Lundi";
      weekday[2] = "Mardi";
      weekday[3] = "Mercredi";
      weekday[4] = "Jeudi";
      weekday[5] = "Vendredi";
      weekday[6] = "Samedi";

      return weekday[dayjs.unix(timeStamp).$d.getDay()];
    },

    //Takes unix timestamp and returns day + month (number + string)
    dateFromUnix(timeStamp) {
      const month = new Array(7);
      month[0] = "Janvier";
      month[1] = "Février";
      month[2] = "Mars";
      month[3] = "Avril";
      month[4] = "Mai";
      month[5] = "Juin";
      month[6] = "Juillet";
      month[7] = "Août";
      month[8] = "Septembre";
      month[9] = "Octobre";
      month[10] = "Novembre";
      month[11] = "Décembre";

      let date = dayjs.unix(timeStamp).$d;
      let monthString = month[date.getUTCMonth()];
      let day = date.getUTCDate();

      return day + " " + monthString;
    },
  },
};
