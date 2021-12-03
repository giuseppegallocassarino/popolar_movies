/**
 * Project REST API endpoint
 */
 
 const API =  "https://api.themoviedb.org/3/movie/popular?api_key=334a0834c2d0511dec35398d492d7ade&language=en-US&page=1";
              
 const imgUrl =  "https://image.tmdb.org/t/p/w200" ;

 const imgUrl__rated = "https://image.tmdb.org/t/p/w200" ;

 const TOPRATED ="https://api.themoviedb.org/3/tv/top_rated?api_key=334a0834c2d0511dec35398d492d7ade&language=en-US&page=1";



 /**
  * Render some content within a container HTML tag //creo funzione per renderizzare
  */
 const render = (container, content) => (container.innerHTML = content);
 const renderizzare = (container__top__rated, content) => (container__top__rated.innerHTML = content);
 
 export { API, render, renderizzare, imgUrl, TOPRATED, imgUrl__rated};