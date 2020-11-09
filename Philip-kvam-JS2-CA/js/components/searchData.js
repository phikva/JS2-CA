import createHtml from "./createHtml.js";

export default function searchData(data) {



const search = document.querySelector(".search");

search.onkeyup = function (event) {
    console.log(event);

    const searchValue = this.value.trim().toLowerCase();

    const filteredData = data.filter(function (data) {
        if (data.name.toLowerCase().startsWith (searchValue)) {
            return true;
        }
    });

    createHtml(filteredData);
};

}