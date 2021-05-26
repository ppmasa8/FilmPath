<template>
  <div>
    <v-img
      :src="'https://image.tmdb.org/t/p/original' + results"
    >
    </v-img>
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
