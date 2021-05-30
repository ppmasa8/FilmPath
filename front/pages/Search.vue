<template>
  <div class="search">
    <h1 class="mt-4">
      Search
    </h1>
    <v-text-field
      label="Search"
      :rules="rules"
      v-model='query'
      hide-details="auto"
      @keyup='getResult(query)'
    ></v-text-field>

    <template class="text-center">
      <v-row class="mt-4 mb-8">
        <v-col
          v-for='result in results'
          :key='result.id'
          cols="12"
          sm="6"
          md="4"
          lg="4"
        >
          <v-card>
            <v-card-title class="subheading font-weight-bold">
              {{ result.title }}
            </v-card-title>
            <Detail v-bind:ids="result.id"></Detail>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import Detail from "./Detail";
export default {
  name: 'search',
  components: {Detail},
  data () {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      query  : '',
      results: '',
      dialog : '',
    }
  },

  methods: {
    getResult(query) {
      if (!this.query) return;
      const API_KEY = 'bca5abc8ed91fe4f233974561c897392'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`).then(res => {
        this.results = res.data.results
      });
    },

    validate () {
      this.$refs.form.validate()
    },
  }
}
</script>
