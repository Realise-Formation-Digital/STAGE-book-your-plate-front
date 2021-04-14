import dayjs from "dayjs";

export default {
  methods: {

    groupByProperty(data, property) {
      let map = new Map(Array.from(data, (obj) => [obj[property], []]));
      data.forEach((obj) => map.get(obj[property]).push(obj));

      return Array.from(map.values());
    },

    groupData(data) {
      let groupedByDeliveryDate = this.groupByProperty(data, "deliveryDate");
      let groupedData = [];

      for (let i = 0; i < groupedByDeliveryDate.length; i++) {
        groupedData.push(
          this.groupByProperty(groupedByDeliveryDate[i], "plateType")
        );
      }

      console.log(groupedData)
      
      return groupedData;
    },

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
      var day = date.getUTCDate();

      return day + " " + monthString;
    },
  },
};