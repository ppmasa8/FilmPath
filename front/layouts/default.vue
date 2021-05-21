<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-row>
      <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      >
        <v-col cols="1">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </v-col>
        <v-col cols="3">
          <v-toolbar-title v-text="title" />
        </v-col>
        <v-col cols="7"></v-col>
        <v-col cols="2">
          <v-switch
            v-model="theme"
            :prepend-icon="themeIcon"
            class="mt-5"
          ></v-switch>
        </v-col>
      </v-app-bar>
    </v-row>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <template>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          class="red lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0 text-center">
            Actually, all the icons in the footer are imitations, and nothing happens when you click on them.
            This is because I don't use social networking sites very often and don't find them attractive,
            and also because linking social networking sites would be very difficult to implement.
          </v-card-text>
          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>


<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      clipped: false,
      drawer: false,
      theme: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Top Page',
          to: '/top'
        },
        {
          icon: 'mdi-apps',
          title: 'Registration Movie',
          to: '/'
        },
        {
          icon: 'mdi-magnify',
          title: 'Search Movies',
          to: '/search'
        },
        {
          icon: 'mdi-book',
          title: 'Catalog',
          to: '/catalog'
        },
        {
          icon: 'mdi-chart-areaspline-variant',
          title: 'Analytics',
          to: '/analytics'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'FilmPath',
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },

  computed: {
    themeIcon() {
      return this.theme ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },

  watch: {
    theme() {
      this.$vuetify.theme.dark = this.theme
    }
  }
})
</script>
