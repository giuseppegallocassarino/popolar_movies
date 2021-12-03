import { render, API, imgUrl, TOPRATED, imgUrl__rated, renderizzare} from "./utils.js";


 function descrizione() {

 const remove__modal = document.querySelector("remove")
 const modale = document.querySelector(".modale");
 const cards = document.querySelectorAll(".cards");
 for (let item of cards){
 
  item.addEventListener("click", () => {

    modale.classList.add("modaleact")
   

  



  })

 }

 }


  const List = (data) => {
  const elements = data
  .map((item) => `<div class="cards" style="background-image: url('${imgUrl}${item.poster_path}');">

   
   
  </div>`)
  
  .join(""); //trasforma in una stringa
   
  const container = document.querySelector("#container");
  render(
      container, 
      ` 
      
      <h1>Popular Movies </h1>
      <ul>${elements}</ul>
      `
      );
      descrizione()
};

const top_rated = (data) => {
const element = data
.map((item) => `<div class="cards" style="background-image: url('${imgUrl__rated}${item.poster_path}');">

</div> `




)

.join ("");




const container__top__rated = document.querySelector("#container__top__rated");
renderizzare(
  container__top__rated, 

  ` 
  <h1>Top Rated </h1>
  <section>${element} </section>
  ` 
    

);
/*const buttonModal = document.querySelector ("modal");
const cardsEvent = document.querySelector ("cards");
const openModal = document.querySelector ("#box");
buttonModal.addEventListener((click) => {

  openModal

  





})*/




}










export { List, top_rated};



