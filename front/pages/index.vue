<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <div>
          <Search></Search>
        </div>

        <v-data-iterator :items="movies">
          <template>
            <v-row>
              <v-col v-for="movie in movies">
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ movie.title }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Status:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ movie.status }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Rate:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ movie.rate }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                </v-card>

              </v-col>
            </v-row>

          </template>

        </v-data-iterator>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
export default {
  components: {Search, Header},

  data: function() {
    return {
      movies: [],
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Status', value: 'status' },
        { text: 'Rate', value: 'rate' },
        { text: 'Time', value: 'created_at'}
      ],
    }
  },

  mounted() {
    const url = 'http://localhost:3000/api/v1/movies'
    this.$axios
      .get(url)
      .then(response => (this.movies = response.data))
  },

  methods: {
    getColor (rate) {
      if (rate < 3) return 'red'
      else if (rate  < 4) return 'orange'
      else return 'green'
    },
  }
}
</script>
