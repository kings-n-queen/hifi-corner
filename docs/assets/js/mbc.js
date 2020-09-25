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
        });
    }
}

function addManufacturers(objArr, callback) {
    mbcList.innerHTML = "";
    if (callback) {
        clickCallback = callback;
    }
    let names = [];
    let permalinks = {};
    for (let i = 0; i < objArr.length; i++) {
        const obj = objArr[i];
        if (!names.includes(obj.additionalInformations.manufacturer)) {
            let name = obj.additionalInformations.manufacturer;
            names.push(name);
            permalinks[name] = `?manufacturer=${obj.manufacturer}`;
        }
    }
    names.sort();
    names.forEach(name => {
        addManufacturer(name, permalinks[name]);
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