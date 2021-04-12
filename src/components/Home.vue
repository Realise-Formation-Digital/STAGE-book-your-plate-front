<template>
  <div>
    <div style="transform-origin: center top 0px">
      <div
        data-app="true"
        class="v-application v-application--is-ltr theme--light"
        id="inspire"
        file="wireframes/constrained"
      >
        <div class="v-application--wrap">
          <main
            class="v-main grey lighten-3"
            data-booted="true"
          >
            <div class="v-main__wrap">
              <div class="container">
                <div class="row">
                  <!--Container for display-->
                  <div class="col">
                    <div
                      class="v-sheet theme--light rounded-lg"
                      style="min-height: 50vh"
                    >
                      <h1>Menu de la semaine</h1>
                      <h2>Lundi</h2>
                      <p>Salade</p>
                      <p>Plat</p>
                      <p>Dessert</p>
                      <h2>Mardi</h2>
                      <p>Salade</p>
                      <p>Plat</p>
                      <p>Dessert</p>
                      <h2>Mercredi</h2>
                      <p>Salade</p>
                      <p>Plat</p>
                      <p>Dessert</p>
                      <h2>Jeudi</h2>
                      <p>Salade</p>
                      <p>Plat</p>
                      <p>Dessert</p>
                      <h2>Vendredi</h2>
                      <p>Salade</p>
                      <p>Plat</p>
                      <p>Dessert</p>
                    </div>
                    <div class="v-list-item__content">
                      <v-btn class="v-list-item__title">Semaine suivante</v-btn>
                      <p>(Disponible dès Mercredi)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    id: 1,
    description: "Steak Frites",
    deliverydate: "01.05.2021",
    price: 11 + "chf",
    specialinfo: "",
    img: "photo",
    typePlat: "plat",
    timestamp: "Get time",
  }),
};
</script>

<style scoped>
</style>
