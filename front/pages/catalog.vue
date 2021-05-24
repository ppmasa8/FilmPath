<template>
  <div class="catalog">
    <div
      v-for="result in results"
      :key="result.id"
      @keyup="netflix(fetchNetflixOriginals)"
    >
      <img v-bind:src="result.poster_path" width='100px'>
    </div>
  </div>

</template>


<script>
import axios from 'axios'
const API_KEY = "bca5abc8ed91fe4f233974561c897392";
export default {
  data() {
    return {
      props: [
        {
          title: '',
          fetchUrl: '',
          isLargeRow: false
        }
      ],
      movies: [
        {
          id: '',
          name: '',
          title: '',
          original_name: '',
          poster_path: '',
          backdrop_path: ''
        }
      ],
      fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-us`,
      fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
      fetchTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&languager=en-us`,
      fetchActionMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,

      results: '',
    }

  },

  methods: {
    netflix(fetchNetflixOriginals) {
      axios.get(fetchNetflixOriginals).then(res => {
        this.results = res.data.results
      });
      console.log(this.results)
    },
  }
}


</script>
