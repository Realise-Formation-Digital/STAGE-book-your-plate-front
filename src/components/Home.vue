<template>
  <div>
    <h1>Faite votre résérvation</h1>

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
            style="padding: 64px 0px 0px"
          >
            <div class="v-main__wrap">
              <div class="container">
                <div class="row">
                  <div class="col col-2">
                    <div class="v-sheet theme--light rounded-lg">
                      <div
                        role="list"
                        class="v-list v-sheet theme--light transparent"
                      >
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light"
                        >
                          <!--Days of the week-->
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Lundi</div>
                          </div>
                        </div>
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light"
                        >
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Mardi</div>
                          </div>
                        </div>
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light"
                        >
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Mercredi</div>
                          </div>
                        </div>
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light"
                        >
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Jeudi</div>
                          </div>
                        </div>
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light"
                        >
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Vendredi</div>
                          </div>
                        </div>
                        <hr
                          role="separator"
                          aria-orientation="horizontal"
                          class="my-2 v-divider theme--light"
                        />
                        <div
                          tabindex="0"
                          role="listitem"
                          class="v-list-item v-list-item--link theme--light grey--text text--lighten-4"
                        >
                          <div class="v-list-item__content">
                            <div class="v-list-item__title">Suivant</div>
                            <p>(Disponible dès Mercredi)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Container for display-->
                  <div class="col">
                    <div
                      class="v-sheet theme--light rounded-lg"
                      style="min-height: 70vh"
                    >
                      Menu de la semaine
                      <v-img
                        max-height="850"
                        max-width="700"
                        src="photomenu.png"
                      ></v-img>
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
};
</script>

<style scoped>
</style>
