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
            alt="logo"
          />
        </router-link>

        <!-- About us button -->
        <div id="Aboutus">

          <!-- Feedback button -->
          <v-btn
            id="Feedback"
            to="/ContactUs"
            color="black"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            <div class="router">Feedback</div>
          </v-btn>

          <v-btn
            id="Feedback"
            to="/Users"
            color="black"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            <div class="router">Users</div>
          </v-btn>

          <v-btn
            id="Feedback"
            to="/Plates"
            color="black"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            <div class="router">Plats</div>
          </v-btn>

          <v-btn
            id="Feedback"
            to="/Bookings"
            color="black"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            <div class="router">Reservations</div>
          </v-btn>

          <!-- Account button -->
          <v-menu class="accountlogo" bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn to="/" icon color="black" v-bind="attrs" v-on="on">
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <div @click.stop="dialog = true">Login</div>

                  <v-dialog v-model="dialog" max-width="500">
                    <LoginModal />
                  </v-dialog>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <router-link to="/">
                    Sign up
                  </router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
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
            <v-list-item-title>Feedback</v-list-item-title>
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
  width: 100%;
}

#logo {
  height: 40px;
}

.Hamburger .v-app-bar {
  display: flex;
}

@media (max-width: 780px) {
  #Header {
    background-color: #032e5a;
  }

  #Aboutus {
    display: none;
  }

  #Feedback {
    display: none;
  }
}

@media (min-width: 780px) {
  .Hamburger {
    display: none;
  }
}

#Aboutus {
  margin-left: auto;
}
</style>
