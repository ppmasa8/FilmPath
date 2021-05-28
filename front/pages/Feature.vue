<template>
  <div>
    <v-row justify="center">
      <div v-show="showLoading" id="loadingMovie">
        <Spinner />
      </div>
      <v-card>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="6">
            <div class="mb-4"></div>
            <v-img
              :src="'http://image.tmdb.org/t/p/w300/' + movie.poster_path"
              max-width="400px"
            >
            </v-img>
          </v-col>
          <v-col cols="6">
            <div class="mb-4"></div>
            <v-card-title class="mt-2">
              {{ movie.title }}
            </v-card-title>
            <v-card-subtitle>
              Original title:  {{ movie.original_title }}
            </v-card-subtitle>
            <v-card-text>
              {{ movie.overview }}
            </v-card-text>
            <v-card-text>
              Release date:  {{ movie.release_date }}
            </v-card-text>
            <v-card-text>
              Original language:  {{ movie.original_language }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="ma-3" style="position: absolute; bottom: 10px; right: 5px;">
                <v-btn
                  color="blue darken-1"
                  text
                  @click="returnCatalog"
                >
                  Back
                </v-btn>
              </div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import axios from "axios";
export default {
  name: "Feature",
  components: {
    Spinner,
  },

  data: () => {
    return {
      movie      : [],
      showLoading: true,
    }
  },

  async mounted() {
    this.showLoading = true;
    try {
      const API_KEY = "bca5abc8ed91fe4f233974561c897392"
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${API_KEY}&language=en-US`);
      this.movie = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.showLoading = false;
    }
  },

  methods: {
    returnCatalog() {
      this.$router.push({ path: '/Catalog'});
    }
  }
}
</script>
