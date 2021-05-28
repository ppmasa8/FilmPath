<template>
  <div class="catalog">
    <Movies Title="Top Rated"          fetchUrl="&languager=en-us"></Movies>
    <Movies Title="Action Movies"      fetchUrl="&with_genres=28"></Movies>
    <Movies Title="Adventure Movies"   fetchUrl="&with_genres=12"></Movies>
    <Movies Title="Animation Movies"   fetchUrl="&with_genres=16"></Movies>
    <Movies Title="Comedy Movies"      fetchUrl="&with_genres=35"></Movies>
    <Movies Title="Documentaries"      fetchUrl="&with_genres=99"></Movies>
    <Movies Title="Fantasy Movies"     fetchUrl="&with_genres=14"></Movies>
    <Movies Title="Horror Movies"      fetchUrl="&with_genres=27"></Movies>
    <Movies Title="Mystery Movies"     fetchUrl="&with_genres=9648"></Movies>
    <Movies Title="Romance Movies"     fetchUrl="&with_genres=10749"></Movies>
    <Movies Title="SF Movies"          fetchUrl="&with_genres=10770"></Movies>
  </div>
</template>

<script>
import Movies from "../components/Movies";
export default {
  name: "Catalog",
  components: {
    Movies
  },
};
</script>

