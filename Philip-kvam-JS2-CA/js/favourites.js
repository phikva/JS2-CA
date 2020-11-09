import getfavourites from "./components/favFunctions.js";
import clearButton from "./components/clearButton.js";

clearButton();

export default function createList() {
  const favourites = getfavourites();

  const resultContainer = document.querySelector(".result-container");

  if (favourites.length === 0) {
    resultContainer.innerHTML = "No favourites selected";
  }

  favourites.forEach((favourite) => {
    resultContainer.innerHTML += `<div class="result">

  <h2>${favourite.name} </h2>
  
  <i class="fa fa-heart"></i>
   
    
</div>`;
  });
}
