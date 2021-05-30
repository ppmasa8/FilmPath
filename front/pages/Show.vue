<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-eye
          </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-spacer></v-spacer>
        <v-row>
          <v-col cols="6">
            <v-img
              :src="'http://image.tmdb.org/t/p/w300/' + results.poster_path"
              max-width="400px"
              v-if="movieExists"
            >
            </v-img>
            <v-img
              v-else
              max-width="400px"
              src="https://1.bp.blogspot.com/-7DsADfq2BX4/Xlyf7aSybcI/AAAAAAABXq8/ut72jfLtCuo8ZvRGp1kqCYEbeQ0dOR8pgCNcBGAsYHQ/s1600/no_image_tate.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-card-title class="mt-2" v-if="movieExists">
              {{ results.title }}
            </v-card-title>
            <v-card-title class="mt-2" v-else>
              Undefined
            </v-card-title>
            <v-card-subtitle v-if="movieExists">
              Original title:  {{ results.original_title }}
            </v-card-subtitle>
            <v-card-subtitle v-else>
              Undefined
            </v-card-subtitle>
            <v-card-text v-if="movieExists">
              {{ results.overview }}
            </v-card-text>
            <v-card-text v-else>
              Undefined
            </v-card-text>
            <v-card-text v-if="movieExists">
              Release date:  {{ results.release_date }}
            </v-card-text>
            <v-card-text v-else>
              Release date:  Undefined
            </v-card-text>
            <v-card-text v-if="movieExists">
              Original language:  {{ results.original_language }}
            </v-card-text>
            <v-card-text v-else>
              Original language:  Undefined
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="ma-3" style="position: absolute; bottom: 10px; right: 5px;">
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialog = false"
                >
                  Close
                </v-btn>
              </div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  props: ['Title'],
  data: () => {
    return {
      results    : '',
      dialog     : false,
      movieExists: false
    }
  },

    mounted() {
      const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.Title}`).then(res => {
        this.results = res.data.results[0]
        if (this.results[0] !== null) {
          this.movieExists = true
        }
        return this.movieExists;
      });
    }
}
</script>

