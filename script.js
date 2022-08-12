const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0d18624755a8e8bac4a644a8b0ba40bb"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=0d18624755a8e8bac4a644a8b0ba40bb&query="'


const form = document.querySelector("#form")
const search = document.querySelector(".search")

getMovies(API_URL)

 async function getMovies(url) {

     const res = await fetch(url)
     const data = await res.json()

     console.log(data.results)
}