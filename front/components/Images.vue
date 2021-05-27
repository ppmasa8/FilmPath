<template>
  <div>
    <v-card>
      <v-img
        :src="'http://image.tmdb.org/t/p/w300/' + results"
      >
      </v-img>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['Title'],
  data:function () {
    return {
      results: [],
    }
  },

  mounted() {
    const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.Title}`).then(res => {
      this.results = res.data.results[0].poster_path
    });
  }
}
</script>
