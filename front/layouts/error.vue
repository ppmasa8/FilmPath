<template>
  <v-app>
    <v-card
      class="mx-auto mt-6"
      max-width="800px"
      elevation="0"
    >
      <v-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeqQMsYCEy7tfYhHQCmsffxDZiUahMb75Rw&usqp=CAU"
      >
      </v-img>
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/top">
            Home page
          </NuxtLink>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-card>

  </v-app>
</template>


<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
