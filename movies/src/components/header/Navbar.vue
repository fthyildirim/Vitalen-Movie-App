<template>
  <div class="all-container">
    <div class="bg-image">
      <img src="../../assets/css/images/1.png" />
    </div>
    <ul class="navbar-responsive">
      <li class=""><a class="logo-style" href="#home">Logo</a></li>
      <li class="right-movies">
        <a href="#">
          <router-link to="/series">Popular TV Series</router-link>
        </a>
      </li>
      <li class="right-movies">
        <a href="#">
          <router-link to="/movie">Popular Movies</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>