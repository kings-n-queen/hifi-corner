let mbcShowAll = document.querySelector(".mbc__linkAll");
let mbcList = document.querySelector(".mbc__list");

let eventListenerSet = false;

function viewAllManufacturers() {
    if (!eventListenerSet) {
        eventListenerSet = true;
        mbcShowAll.addEventListener("click", function(event) {
            event.preventDefault();
            mbcList.classList.toggle("js-showAll");
        });
    }
}

function addManufacturers(objArr) {
    mbcList.innerHTML = "";
    let names = [];
    let permalinks = {};
    for (let i = 0; i < objArr.length; i++) {
        const obj = objArr[i];
        if (!names.includes(obj.additionalInformations.manufacturer)) {
            let name = obj.additionalInformations.manufacturer;
            names.push(name);
            permalinks[name] = `single-product-description.html?id=${obj.id}`;
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