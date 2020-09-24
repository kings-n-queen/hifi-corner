import { setURL, urlGetKey, loadURL } from "./url-handler.js";

function categoryHandler (){
 var categoryContainer = document.querySelector(".shopCategories_container");
 categoryContainer.addEventListener("click", function(event){
     if (event.target.classList.contains("textColor")){
         event.preventDefault();
         setURL(event.target.href);
     }
 });
}

export default categoryHandler;