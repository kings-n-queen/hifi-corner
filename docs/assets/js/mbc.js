import { setURL, urlGetKey, loadURL } from "./url-handler.js";

let mbcShowAll = document.querySelector(".mbc__linkAll");
let mbcList = document.querySelector(".mbc__list");

let eventListenerSet = false;
let clickCallback;

mbcList.addEventListener("click", function(event){
    if (event.target.classList.contains("mbc__link") && clickCallback){
        event.preventDefault();
        setURL(event.target.href);
        clickCallback();
    }
});

function viewAllManufacturers() {
    if (!eventListenerSet) {
        eventListenerSet = true;
        mbcShowAll.addEventListener("click", function(event) {
            event.preventDefault();
            mbcList.classList.toggle("js-showAll");
            if (mbcList.classList.contains("js-showAll")) {
                this.textContent = "Collapse";
            } else {
                this.textContent = "View All";
            }
        });
    }
}

function addManufacturers(objArr, callback) {
    mbcList.innerHTML = "";
    if (callback) {
        clickCallback = callback;
    }

    // Kan det her laves mere effektivt(?)
    let mapped = objArr.map(obj => obj.additionalInformations.manufacturer);
    let names = Array.from(new Set(mapped));
    names.sort().forEach(name => {
        // Det burde ikke være nødvendigt at bruge find, da vi har hele objektet til at starte med (før uniques og sort)
        // Men hvordan skal det omstruktureres, så vi får et unikt array med objekter {}?
        let manufacturer = objArr.find(obj => obj.additionalInformations.manufacturer === name).manufacturer;
        addManufacturer(name, `?manufacturer=${manufacturer}`);
    });
    
    if (names.length > 7) {
        mbcShowAll.classList.remove("js-hidden");
        mbcShowAll.classList.remove("js-showAll");
        viewAllManufacturers();
    } else {
        mbcShowAll.classList.add("js-hidden");
    }
}

function addManufacturer(name, permalink) {
    let link = document.createElement("A");
    link.classList.add("mbc__link");
    link.href = permalink;
    link.textContent = name;
    mbcList.appendChild(link);
}
export default addManufacturers;