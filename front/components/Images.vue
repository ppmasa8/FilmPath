<template>
  <div>
    <v-card>
      <v-img
        :src="'http://image.tmdb.org/t/p/w300/' + results"
        v-if="imageExists"
        height="450px"
      >
      </v-img>
      <v-img
        v-else
        src="https://1.bp.blogspot.com/-7DsADfq2BX4/Xlyf7aSybcI/AAAAAAABXq8/ut72jfLtCuo8ZvRGp1kqCYEbeQ0dOR8pgCNcBGAsYHQ/s1600/no_image_tate.jpg"
        height="450px"
      >
      </v-img>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['Title'],
  data: () => {
    return {
      results    : [],
      imageExists: false
    }
  },

  mounted() {
    const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.Title}`).then(res => {
      this.results = res.data.results[0].poster_path
      if (this.results !== null) {
        this.imageExists = true
      }
    });
  }
}
</script>
