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

        <!-- buttons-------------------------------------------------------------------------------->
          <div class="container">
            <router-link to="/ContactUs">
              <button 
              class="button type1 Feedback">
                Feedback
              </button>
            </router-link>

            <router-link to="/Booking">
              <button 
              class="button type1 test">
                Test
              </button>
            </router-link>

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
.v-app-bar{
  padding-top: 10px;
  padding-bottom: 75px
}

.NavContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

#logo {
  margin-top: 38px;
  height: 40px;
  align-items: center;
  display: flex;
  
}

.accountlogo {  
  align-items: center;
  display: flex;
}

.Hamburger .v-app-bar {
  display: flex;
}

@media (max-width: 475px) {
  .Feedback {
    display: none;
  }

  .test{
    display: none;
  }

  .NavContainer {
    display: flex;
  }

  #logo{
    margin-top: 4px;
    height: 40px;
  }
}

@media (min-width: 475px) {
  .Hamburger {
    display: none;
  }
}

.Feedback{
  
}

/* Buttons ----------------------------------------------------*/

  @import url("https://fonts.googleapis.com/css?family=Raleway");
  * {
    box-sizing: border-box;
  }

  .button {
    position: relative;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
  }
  .button.type1 {
    color: #000000;
  }
  .button.type1.type1::after,
  .button.type1.type1::before {
    content: "";
    display: block;
    position: absolute;
    width: 30%;
    height: 40%;
    border: 5px solid;
    transition: all 0.4s ease;
    border-radius: 2px;
  }
/* border colors */
  .button.type1.type1::after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #735656;
    border-right-color: #566473;
  }
  .button.type1.type1::before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #566473;
    border-left-color: #566473;
  }
  .button.type1.type1:hover:after,
  .button.type1.type1:hover:before {
    width: 100%;
    height: 100%;
  }
</style>
