export { render, q, API, urlYt, movieId };

const q = (selector) => document.querySelector(selector);

const render = (container, content) => (container.innerHTML += content);

const API = {
    apiKey: `334a0834c2d0511dec35398d492d7ade`,
    imgUrl: `https://image.tmdb.org/t/p/w500`,
    genresUrl: `https://api.themoviedb.org/3/genre/movie/list?`,
    movieUrl: `https://api.themoviedb.org/3/movie/popular?`,
    detailUrl: `https://api.themoviedb.org/3/movie/`,
}

const urlYt = "https://www.youtube.com/embed/";



//  NAV BAR HEADER 
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


const movieId = location.search.replace("?id=", "");
