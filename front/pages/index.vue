<template>
  <v-app id="inspire">
    <Header></Header>
    <v-main>
      <v-container>
        <div>
          <Search></Search>
        </div>

        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200">
              <v-card-text
                v-for="movie in movies"
                :key="movie.id"
              >
                {{ movie.title }}
                {{ movie.status }}
                {{ movie.rate }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
import axios from "axios";
export default {
  components: {Search, Header},

  data: function() {
    return {
      movies: [],
    }
  },

  mounted() {
    const url = 'http://localhost:3000/api/v1/movies'
    axios
      .get(url)
      .then(response => (this.movies = response.data))
  }
}
</script>
