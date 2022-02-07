<template>
  <div>
    <div id="tags"></div>
    <div id="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <!-- Overlay content -->
      <div class="overlay-content" id="overlay-content"></div>
    </div>
    <main id="main"></main>
    <div class="pagination"></div>

    <div id="tags1">
  
    </div>
  </div>
</template>

<script>
const API_KEY = "api_key=bd2e0a36c45c1026d60f7b069001944c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  const main = document.getElementById("main");
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
             <span class="${getColor(vote_average)}">${vote_average}</span>
             <img src="${
               poster_path
                 ? IMG_URL + poster_path
                 : "http://via.placeholder.com/1080x1580"
             }" alt="${title}">
           
        <div class="overview">
                <h3 class="title-movie">${title}</h3>
               <p class="overview2">${overview} </p> 
                <br/>
                <button class="know-more" id="${id}">Know More</button
            </div>
        `;
    main?.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}



</script>

<style>
</style>