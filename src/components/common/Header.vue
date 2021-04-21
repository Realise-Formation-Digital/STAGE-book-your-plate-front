<template>
  <div id="Header">
    <v-app-bar color="white" class="v-app-bar">
      <v-container class="NavContainer">
        <!-- logo Réalise -->
        <router-link to="/">  
          <img
          to="/"
          id="logo"
          src="../../assets/logo-Réalise.svg"
          alt="logo" />
        </router-link>
          <!-- Feedback button -->
          <div id="Feedback">
            <v-btn
              to="/ContactUs"
              color="black"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              <div class="router">Feedback</div>
            </v-btn>
          </div>  
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <!-- Account button -->
              <div class="accountlogo">
                <v-btn to="/" icon color="black" v-bind="attrs" v-on="on">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </div>
            </template>

            <v-list>
              <LoginModal />
            </v-list>
          </v-menu>
      </v-container>
      <!-- Hamburger -->
      <v-app-bar-nav-icon
        class="Hamburger"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="drawer"
      class="v-navigation-drawer"
      v-model="drawer"
      absolute
      temporary
      right
      dark
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="dark--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
               <v-btn
              to="/ContactUs"
              color="black"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              <div class="router">Feedback</div>
            </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LoginModal from "./LoginModal";

export default {
  name: "Header",
  components: {
    LoginModal,
  },
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
  }),
};
</script>

<style scoped>
.NavContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

#logo {
  height: 40px;
}

#Feedback{
  margin-left: 10%;
}

.accountlogo{
  margin-left: 10%;
}

.Hamburger .v-app-bar {
  display: flex;
}

@media (max-width: 475px) {
  #Feedback {
    display: none;
  }
  .NavContainer{
    display: flex;
  }
}

@media (min-width: 475px) {
  .Hamburger {
    display: none;
  }
  
}
</style>
