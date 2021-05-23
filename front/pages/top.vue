<template>
  <v-app>
    <v-parallax
      dark
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg"
    >
    </v-parallax>

    <v-row>
      <v-col cols="2">
        <h1 class="display-1 font-weight-bold mt-9">
          Examples
        </h1>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>

    <v-divider
      class="mt-3 mb-4"
    ></v-divider>

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

          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="pa-4">
            Rate this movie
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
              ({{ movie.rating }})
            </span>
            <v-rating
              v-model="movie.rating"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
            ></v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="5">
        <h1 class="display-1 font-weight-bold mt-9">
          What can we do?
        </h1>
      </v-col>
      <v-col cols="5"></v-col>
    </v-row>

    <v-divider
      class="mt-3 mb-7"
    ></v-divider>

    <v-row>
      <v-col cols="12" class="mb-10">
        <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card
              :color="item.color"
              dark
            >
              <v-card-title class="title">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="pt-4 blue-grey--text">{{ item.text }}</p>

                <v-btn
                  :color="item.color"
                  class="mx-0"
                  outlined
                  :to="item.to"
                >
                  GO
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
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
          img     : 'https://stat.ameba.jp/user_images/20171006/20/ameria66/e5/55/j/t02200325_0676100014043079813.jpg?caw=800',
          title   : 'Dancer in the Dark',
          subtitle: 'The film\'s innovative composition includes handheld camera work, speedy screen development with many jump cuts, and colorful music scenes that color the imagination of the hapless protagonist.',
          rating  : 4.3,
        },
        {
          img     : 'https://hanazonomagazine.files.wordpress.com/2012/05/midnight-in-paris-poster.jpg',
          title   : 'Midnight in Paris',
          subtitle: 'Gil, a Hollywood screenwriter, is staying in Paris with his fiancée and her parents. One night, he is led astray by the sound of a bell signaling midnight, and finds himself in the 1920s, a time of blossoming art!',
          rating  : 4.6,
        },
        {
          img     : 'https://images-na.ssl-images-amazon.com/images/I/91BsCJLBXoL._AC_SL1500_.jpg',
          title   : 'Ex Machina',
          subtitle: 'Caleb, who works as a programmer for a famous IT company, wins the right to visit the home of the company president, Nathan, by lottery. What will happen to Caleb when he is invited to Nathan\'s house...?',
          rating  : 4.2,
        },
        {
          img     : 'https://upload.wikimedia.org/wikipedia/en/a/a7/Happy_Death_Day_poster.png',
          title   : 'Happy Death Day',
          subtitle: 'Tree is a hot, but self-centered, high-flying, and truly evil woman.Naturally, she is killed by a masked killer, as promised.\n' + 'For some reason, when she is killed, the same day begins to repeat itself...?',
          rating  : '3.9'
        },
        {
          img     : 'https://images-na.ssl-images-amazon.com/images/I/81WsiN9oDSL._AC_SL1254_.jpg',
          title   : 'The Truman Show',
          subtitle: 'One day, a father who is supposed to be dead appears in the crowd. Truman tells his mother about it, but she doesn\'t take it well, saying he was mistaken. This is when he starts to feel suspicious about his surroundings.',
          rating  : '4.4'
        },
        {
          img     : 'https://i.ytimg.com/vi/Tn0sMRLrbp0/movieposter_en.jpg',
          title   : 'Whiplash',
          subtitle: 'Nineteen-year-old Andrew Neiman attended the Shaffer Conservatory of Music, America\'s premier music school, with aspirations of becoming a "great" jazz drummer like Buddy Rich.He began to immerse himself in drumming practice.',
          rating  : '4.8'
        },
      ],
      items: [
        {
          color: 'red lighten-2',
          icon : 'mdi-apps',
          title: 'Keep a diary for movies',
          text : 'Keep a diary of the movies you\'ve seen.',
          to   : '/'
        },
        {
          color: 'purple darken-1',
          icon : 'mdi-magnify',
          title: 'Find out from a lot of movies',
          text : 'When you\'ve finished keeping your journal, try to find a movie that looks good.',
          to   : '/inspire'
        },
        {
          color: 'green lighten-1',
          icon : 'mdi-book',
          title: 'Or, Browse the list',
          text : 'Or you could try to find it randomly in the list.',
          to   : '/catalog'
        },
        {
          color: 'indigo',
          icon : 'mdi-chart-areaspline-variant',
          title: 'Watch your trend for analytics',
          text : 'Finally, it would be interesting to see the trends of the movies you\'ve seen.',
          to   : '/analytics'
        },
      ],
    }

  }
}
</script>
