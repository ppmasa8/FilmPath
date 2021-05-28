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
            >
            </v-img>
          </v-col>
          <v-col cols="6">
            <v-card-title>
              {{ results.title }}
            </v-card-title>
            <v-card-text>
              {{ results.overview }}
            </v-card-text>
            <v-card-text>
              {{ results.release_date}}
            </v-card-text>
            <v-card-text>
              {{ results.original_title}}
            </v-card-text>
            <v-card-text>
              {{ results.original_language}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
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
      results: '',
      dialog : false,
    }
  },

  mounted() {
    const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.Title}`).then(res => {
      this.results = res.data.results[0]
    });
  },
}
</script>

