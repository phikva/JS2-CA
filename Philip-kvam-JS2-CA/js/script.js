import { url } from "./constans/api.js";
import createHtml from "./components/createHtml.js";
import displayMessage from "./components/displayMessage.js";
import searchData from "./components/searchData.js";
import getFavourites from "./components/favFunctions.js";

async function callApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const result = json.data;
    

    createHtml(result);

    getFavourites();
    searchData(result);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".result-container");
  }
}

callApi();
