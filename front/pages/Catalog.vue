<template>
  <div class="catalog">
    <Movies Title="NETFLIX ORIGUINALS" fetchUrl="&with_networks=213"></Movies>
    <Movies Title="Top Rated" fetchUrl="&languager=en-us"></Movies>
    <Movies Title="Comedy Movies" fetchUrl="&with_genres=35"></Movies>
    <Movies Title="Romance Movies" fetchUrl="&with_genres=10749"></Movies>
    <Movies Title="Documentaries" fetchUrl="&with_genres=99"></Movies>
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

