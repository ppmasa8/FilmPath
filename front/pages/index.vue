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
                        <div>
                          <v-rating
                            v-model="movie.rate"
                            color="yellow accent-4"
                            background-color="grey darken-1"
                            hover
                            dense
                            small
                            size="18"
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
                        <Show v-bind:Title="movie.title"></Show>
                      </div>

                      <div class="mx-3"></div>

                      <div>
                        <Edit v-bind:ids="movie.id"></Edit>
                      </div>

                      <div class="mx-3"></div>

                      <div>
                        <Delete v-bind:params="movie"></Delete>
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
import Edit from "./Edit";
import Delete from "./Delete";
import Show from "./Show";
import Images from "../components/Images";
import axios from "axios";
export default {
  components: {Delete, Edit, Create, Show, Images},

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
  }
}

</script>

<style>
.chip-overflow {
  max-width: 80px;
}
</style>
