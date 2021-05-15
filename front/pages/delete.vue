<template>
  <v-btn
    icon
    v-on:click="deleteMovie(this.movies.id)"
  >
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    deleteMovie () {
      const url = '/api/v1/movies/${id}'
      this.$axios.delete(url).then(res => {
        this.movies.title = "";
        this.movies.status = "";
        this.movies.rate = null;
      })
    }
  }
}

</script>
