import getFavourites from "./favFunctions.js";

export default function createHtml(data) {
  const resultContainer = document.querySelector(".result-container");

  const favourites = getFavourites();

  resultContainer.innerHTML = "";

  data.forEach(function (result) {
    let cssClass = "far";

    const doesObjectExist = favourites.find(function (fav) {
      return parseInt(fav.id) === result.id;
    });

    if (doesObjectExist) {
      cssClass = "fa";
    }
console.log(result);
    resultContainer.innerHTML += `<div class="result">
                                        <h2>${result.name}</h2>
                                        <div class="img-container">
                                        <img src="${result.img}" class="img"/>
                                        </div>
                                        <p> Birthday: ${result.birthday}</p>
                                        <p> Nickname: ${result.nickname}</p>
                                        
                                        <i class="${cssClass} far fa-heart" data-id="${result.id}" data-name="${result.name}" ></i>
                                        
                                    </div>`;
  });

  const favIcons = document.querySelectorAll(".result i");

  favIcons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;
    

    const currentFavs = getFavourites();

    const characterExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (characterExists === undefined) {
      const character = { id: id, name: name};

      currentFavs.push(character);

      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }

  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}
