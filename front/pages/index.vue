<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <div>
          <Search></Search>
        </div>

        <v-data-table
          :headers="headers"
          :items="movies"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
export default {
  components: {Search, Header},

  data: function() {
    return {
      movies: [],
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Status', value: 'status' },
        { text: 'Rate', value: 'rate' },
        { text: 'Time', value: 'created_at'}
      ],
    }
  },

  mounted() {
    const url = 'http://localhost:3000/api/v1/movies'
    this.$axios
      .get(url)
      .then(response => (this.movies = response.data))
  },
}
</script>
