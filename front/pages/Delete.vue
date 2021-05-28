<template>
  <v-row>
    <v-btn
      icon
      v-on:click="deleteMovie(params.id)"
      @click="deleteMovieText(params.title)"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ deleteText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  props: ['params'],

  data: function() {
    return {
      snackbar: false,
      deleteText: "",
    }
  },

  methods: {
    fetchMovies() {
      let url = 'http://localhost:3000/api/v1/movies'
      this.$axios.get(url).then(response => {
        this.movies = response.data;
      });
    },

    deleteMovie (id) {
      const url = '/api/v1/movies/' + id;
      this.$axios.delete(url).then(res => {
        this.fetchMovies();
      });
      this.reloadPage();
    },

    deleteMovieText (title) {
      this.snackbar = true;
      this.deleteText = '"' + title + '"' +' is deleted on the lists.'
    },

    reloadPage(){
      window.location.reload()
    }
  }
}
</script>
