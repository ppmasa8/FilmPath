<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <div>
          <Create></Create>
        </div>

        <v-data-iterator
          :items="movies"
          :itemsPerPage="6"
        >
          <template class="text-center">
            <v-row>
              <v-col
                v-for="movie in movies"
                v-bind:key="movie.id"
                cols="12"
                sm="6"
                md="4"
                lg="4"
              >
                <v-card>

                  <Images v-bind:Title="movie.title"></Images>

                  <v-card-title class="subheading font-weight-bold">
                    {{ movie.title }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list dense>
                    <v-list-item>
                      <v-list-item-content>Status:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        <v-chip
                          :color="getColor(movie.status)"
                          class="chip-overflow"
                          medium
                          dark
                        >
                          <v-icon left>
                            mdi-label
                          </v-icon>
                          {{ movie.status }}
                        </v-chip>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Rate:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        <div class="text-center">
                          <v-rating
                            v-model="movie.rate"
                            color="yellow darken-3"
                            background-color="grey darken-1"
                            hover
                            small
                          >
                          </v-rating>
                        </div>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-content>Year:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ movie.created_at.match(/^[0-9][0-9][0-9][0-9][-][0-9][0-9][-][0-9][0-9]/).join('') }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <div>
                        <edit v-bind:ids="movie.id"></edit>
                      </div>

                      <div class="mx-3"></div>

                      <div>
                        <delete v-bind:params="movie"></delete>
                      </div>

                      <div class="mx-2"></div>
                    </v-card-actions>
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
import Create from "./Create";
import Edit from "./edit";
import Delete from "./delete";
import Images from "../components/Images";
import axios from "axios";
export default {
  components: {Delete, Edit, Create, Images},

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
        {text: 'Status', value: 'status'},
        {text: 'Rate', value: 'rate'},
        {text: 'Time', value: 'created_at'}
      ],
      results: [],
    }
  },

  mounted() {
    const url = 'http://localhost:3000/api/v1/movies'
    this.$axios
      .get(url)
      .then(res => (this.movies = res.data))
  },

  methods: {
    getColor (state) {
      if (!state) return;
      if (state === "ToDo") return 'red'
      else if (state === "Doing") return 'orange'
      else if (state === "Done") return 'green'
      else return 'gray'
    },

    getResult(title) {
      if (!title) return;
      const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`).then(res => {
        this.results = res.data.results[0].poster_path
      });
      return this.results
    }
  }
}

</script>

<style>
.chip-overflow {
  max-width: 80px;
}
</style>
