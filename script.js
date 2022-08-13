const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d18624755a8e8bac4a644a8b0ba40bb"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=0d18624755a8e8bac4a644a8b0ba40bb&query="'


const form = document.querySelector("#form")
const search = document.querySelector(".search")
const main = document.querySelector("main")


getMovies(API_URL);

async function getMovies(url) {

     const res = await fetch(url)
     const data = await res.json()

     showMovies(data.results)
}

function showMovies(movies){

    main.innerHTML=""

    movies.forEach((movie) => {

      const { title, overview, poster_path, vote_average } = movie;

      const div = document.createElement("div");

      div.innerHTML = `<div class="movie">
        <img src="${IMG_PATH + poster_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class=${setColor(vote_average)}>${vote_average}</span>
        </div>
        <div class="overview">
            <h4>Overview</h4>
            <p>${overview}</p>
        </div>
    </div>`;

      main.append(div);
      
    });

}

function setColor(score) {

    if(score >= 7){
        return "green"
    }
    if(score >= 5){
        return "orange"
    }
    else{
        return "red"
    }
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const searchText = search.value
    
    if(searchText){
        getMovies(SEARCH_URL + searchText)
        search.value = ""
    }
    else {
        alert("Please Enter a Movie Name")
    }
})

