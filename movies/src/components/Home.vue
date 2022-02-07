<template>
  <div class="container">
    <Navbar />
    <SliderMovies />
    <PopularMovies />
    <Search />
    <Movies />
    <div class="popular-movies"></div>
  </div>
</template>

<script>
import Navbar from "./header/Navbar";
import SliderMovies from "./header/SliderMovies";
import PopularMovies from "./header/PopularMovies.vue";
import Movies from "./header/Movies";
import Search from "./header/Search";

export default {
  components: {
    Navbar,
    SliderMovies,
    PopularMovies,
    Movies,
    Search,
  },
};
</script>

<style>
</style>