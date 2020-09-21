let mbcShowAll = document.querySelector(".mbc__linkAll");
let mbcList = document.querySelector(".mbc__list");

let eventListenerSet = false;

function viewAllManufactorers() {
    if (!eventListenerSet) {
        eventListenerSet = true;
        mbcShowAll.addEventListener("click", function(event) {
            event.preventDefault();
            mbcList.classList.toggle("js-showAll");
        });
    }
}

function addManufactorers(objArr) {
    mbcList.innerHTML = "";
    let names = [];
    let permalinks = {};
    objArr.forEach(obj => {
        if (!names.includes(obj.manufactorer.name)) {
            names.push(obj.manufactorer.name);
            permalinks[obj.manufactorer.name] = obj.manufactorer.permalink;
        }
    });
    names.sort();
    names.forEach(name => {
        addManufactorer(name, permalinks[name]);
    });
    if (names.length > 7) {
        mbcShowAll.classList.remove("js-hidden");
        mbcShowAll.classList.remove("js-showAll");
        viewAllManufactorers();
    } else {
        mbcShowAll.classList.add("js-hidden");
    }
}

function addManufactorer(name, permalink) {
    let link = document.createElement("A");
    link.classList.add("mbc__link");
    link.href = permalink;
    link.textContent = name;
    mbcList.appendChild(link);
}
export default addManufactorers;