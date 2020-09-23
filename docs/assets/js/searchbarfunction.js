import { setURL, urlGetKey, loadURL } from "./url-handler.js";

var input = document.querySelector(".searchBar__input");

function search() {
    input.addEventListener("keydown", function(evt) {
        if (evt.key == "Enter") {
            evt.preventDefault();
            loadURL("shop-category-List.html?search=" + input.value)
        }

    });
}


export default search;