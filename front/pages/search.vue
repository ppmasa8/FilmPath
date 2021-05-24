<template>
  <div class="search">
    <h1
      class="mt-4"
    >
      Search
    </h1>
    <v-text-field
      label="Search"
      :rules="rules"
      v-model='query'
      hide-details="auto"
      @keyup='getResult(query)'
    ></v-text-field>

    <div
      v-for='result in results'
      :key='result.id'
    >
      <p>{{ result.title }}</p>
      <img v-bind:src="'http://image.tmdb.org/t/p/w300/' + result.poster_path" width='100px'>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      query: '',
      results: ''
    }
  },
  methods: {
    getResult(query) {
      if (!this.query) return;
      const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`).then(res => {
        this.results = res.data.results
      });
      console.log(this.results)
    },


    validate () {
      this.$refs.form.validate()
    },
  }
}
</script>
