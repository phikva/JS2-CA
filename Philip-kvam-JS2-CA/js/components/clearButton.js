import createList from "../favourites.js";
import clearList from "../favourites.js";
clearList();

export default function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", clearList);

  function clearList() {
    localStorage.clear();

    createList();
  }
}
