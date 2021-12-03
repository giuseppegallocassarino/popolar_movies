import { API, render, TOPRATED } from "./utils.js";
import {List, top_rated} from "./list.js";


document.addEventListener("DOMContentLoaded",() => {

 fetch(API)
    .then ((response) => response.json())
    .then((data) => List(data.results))


 fetch(TOPRATED)
 .then ((response) => response.json())
 .then((data) => top_rated(data.results))
    
});







