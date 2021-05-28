<template>
  <div>
    <div id="newMovies">
      <div id="slide">
        <h1 class="blue-grey--text">{{ Title }}</h1>

        <div v-show="showLoading" id="loadingMovie">
          <Spinner />
        </div>
        <carousel
          :per-page="4"
          :navigate-to="0"
          :mouse-drag="true"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :navigationClickTargetSize="9"
        >
          <slide
            v-for="movie in movies"
            id="movieDiv"
          >
            <div v-on:click="showFeature(movie.id)">
              <v-img
                  v-bind:src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                  id="imagemPosterSlide"
              >
              </v-img>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from "vue-carousel";
import Spinner from "../components/Spinner";
import Detail  from "../pages/Detail";
export default {
  props: ["Title", "fetchUrl"],
  name : "Movies",
  components: {
    Detail,
    Carousel,
    Slide,
    Spinner,
  },

  data: () => {
    return {
      movies           : [],
      results          : '',
      showLoading      : true,
      paginationButtons: false,
      dialog           : false
    }
  },

  async mounted() {
    this.showLoading = true;
    try {
      const url = "https://api.themoviedb.org/3/discover/movie?api_key="
      const API_KEY = "bca5abc8ed91fe4f233974561c897392"
      const response = await axios.get( url + API_KEY + this.fetchUrl );
      this.movies = response.data.results;
    } catch (error) {
      console.error(error);
    } finally {
      this.showLoading = false;
    }
  },

  methods :{
    showFeature(_id) {
      this.$router.push({ name: "Feature", params: { id: _id } });
    }
  }
}
</script>

<style>
#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#buttonNexts {
  color: #f1f;
}
#newMovies h1 {
  color: #cacaca;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#movieDiv {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #e9e9e9 !important;
  outline: none !important;
}
@media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 150px;
    width: 100px;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>
