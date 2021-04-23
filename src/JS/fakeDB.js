export default {
  data() {
    return {
      plates: [
        {
          id: 1,
          deliveryDate: 1618390400,
          description: "Pêches au sirop",
          plateType: "Dessert",
          price: 3,
        },

        {
          id: 2,
          deliveryDate: 1618390400,
          description: "Paëla de poissons",
          plateType: "Plat Principal",
          price: 13,
        },

        {
          id: 3,
          deliveryDate: 1618390400,
          description:
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          plateType: "Salade",
          price: 10.5,
        },
        {
          id: 4,
          deliveryDate: 1618322669,
          description:
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
          plateType: "Salade",
          price: 10.5,
        },

        {
          id: 5,
          deliveryDate: 1618322669,
          description:
            "Salade Japonaise: Salade de choux pe-tsai (choux chinois), nouilles de riz, crevettes marinée au soja et wasabi, oranges, algues wakame, concombre, citron vert, graine de sesame",
          plateType: "Salade",
          price: 10.5,
        },
        {
          id: 6,
          deliveryDate: 1618322669,
          description:
            "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
          plateType: "Plat Principal",
          price: 13,
        },
        {
          id: 7,
          deliveryDate: 1618322669,
          description: "Salade d'ananas",
          plateType: "Dessert",
          price: 3,
        },

        {
          id: 8,
          deliveryDate: 1618390400,
          description:
            "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
          plateType: "Salade",
          price: 10.5,
        },
      ],

      users: [
        {
          id: 1,
          typeuser: "Admin",
          lastname: "White",
          firstname: "Walter",
          password: "qwerty",
          email: "walterwhite@gmail.com",
          phone: "+41 79 11 111 111",
        },

        {
          id: 2,
          typeuser: "User",
          lastname: "Pinkman",
          firstname: "Jesse",
          password: "asdfg",
          email: "jessepinkman@gmail.com",
          phone: "+41 79 22 222 222",
        },

        {
          id: 69,
          typeuser: "User",
          lastname: "Sandler",
          firstname: "Adam",
          password: "asdfg",
          email: "jessepinkman@gmail.com",
          phone: "+41 79 22 222 222",
        },
      ],

      bookings: [
        {
          id: 1,
          userID: 1,
          deliveryDate: 1618390400,
          plateID: 1,
          quantity: 1,
          commentary: null,
          timestamp: 1618322669,
        },
        {
          id: 2,
          userID: 2,
          deliveryDate: 1618320400,
          plateID: 2,
          quantity: 3,
          commentary: "Pas de sucre",
          timestamp: 1618322669,
        },
      ],
    };
  },
};

/*const ciao = [
  {
    deliveryDate: 1618390400,
    currentMenu: [
      {
        description: "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
        plateType: "Salad",
        price: 10.5,
      },
      {
        description: "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
        plateType: "Salad",
        price: 10.5,
      },
      {
        description: "Salade grecque: icéberg, concombre cube, tomate cube, féta cube, oignons rouge, tomates cerises et olives",
        plateType: "Salad",
        price: 10.5,
      },
      {
        description: "Salade d'ananas",
        plateType: "Dessert",
        price: 3,
      },
      {
        description: "Escalope de dinde viennoise, Pommes de terre frite, Brocolis vapeur",
        plateType: "Main",
        price: 13,
      },
    ]
  }
]*/
