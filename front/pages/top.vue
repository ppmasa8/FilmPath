<template>
  <v-app>
    <v-parallax
      dark
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg"
    >
    </v-parallax>

    <v-divider
      class="mt-9 mb-4"
    ></v-divider>

    <v-row>
      <v-col cols="2">
        <h1 class="display-1 font-weight-bold">
          Examples
        </h1>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="movie in movies"
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            :src="movie.img"
            height="200px"
          >
          </v-img>

          <v-card-title>
            {{ movie.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ movie.subtitle }}
          </v-card-subtitle>

          <v-spacer></v-spacer>

        </v-card>

      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      movies: [
        {
          img: 'https://stat.ameba.jp/user_images/20171006/20/ameria66/e5/55/j/t02200325_0676100014043079813.jpg?caw=800',
          title: 'Dancer in the Dark',
          subtitle: 'With Björk, a popular female singer from Iceland, in the lead role, the film has a novel structure with handheld camera work, speedy screen development with many jump cuts, and brightly colored musical scenes of the unfortunate protagonists imagination.',
        },
        {
          img: 'https://hanazonomagazine.files.wordpress.com/2012/05/midnight-in-paris-poster.jpg',
          title: 'Midnight in Paris',
          subtitle: 'Gil, a Hollywood screenwriter, is staying in Paris with his fiancée and her parents. One night, he is led astray by the sound of a bell signaling midnight, and finds himself in the 1920s, a time of blossoming art!',
        },
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/91BsCJLBXoL._AC_SL1500_.jpg',
          title: 'Ex Machina',
          subtitle: 'Caleb works as a programmer at Blue Book, an IT company famous for its search engine, and wins the right to visit the home of the company\'s president, Nathan, by lottery. Caleb is invited by helicopter to Nathan\'s home, which is located deep in a vast mountainous area, and is asked to demonstrate an AI that Nathan is working on...',
        },
      ]
    }

  }
}
</script>
