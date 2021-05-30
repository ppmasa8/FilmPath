<template>
  <div
    v-on:click="dialog = true"
  >
    <v-img
      v-bind:src="'http://image.tmdb.org/t/p/w300/' + result.poster_path"
      v-if="imageExists"
    >
    </v-img>
    <v-img
      v-else
      src="https://1.bp.blogspot.com/-7DsADfq2BX4/Xlyf7aSybcI/AAAAAAABXq8/ut72jfLtCuo8ZvRGp1kqCYEbeQ0dOR8pgCNcBGAsYHQ/s1600/no_image_tate.jpg"
    >
    </v-img>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="800px"
      >
        <v-card>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="6">
              <v-img
                :src="'http://image.tmdb.org/t/p/w300/' + result.poster_path"
                max-width="400px"
              >
              </v-img>
            </v-col>
            <v-col cols="6">
              <v-card-title class="mt-2">
                {{ result.title }}
              </v-card-title>
              <v-card-subtitle>
                Original title:  {{ result.original_title }}
              </v-card-subtitle>
              <v-card-text>
                {{ result.overview }}
              </v-card-text>
              <v-card-text>
                Release date:  {{ result.release_date }}
              </v-card-text>
              <v-card-text>
                Original language:  {{ result.original_language }}
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Detail',
  props: ['ids'],
  data: () => {
    return {
      result     : [],
      dialog     : false,
      imageExists: false
    }
  },

  mounted() {
    const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
    axios.get(`https://api.themoviedb.org/3/movie/${this.ids}?api_key=${API_KEY}&language=en-US`).then(res => {
      this.result = res.data
      if (this.result.poster_path !== null) {
        this.imageExists = true
      }
    });
  }
}
</script>

