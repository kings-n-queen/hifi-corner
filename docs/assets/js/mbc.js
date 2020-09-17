let mbcShowAll = document.querySelector(".mbc__linkAll");
let mbcList = document.querySelector(".mbc__list");

function mbc() {
    mbcShowAll.addEventListener("click", function(event) {
        event.preventDefault();
        mbcList.classList.toggle("js-showAll");
    });
}

function addManufactorers(objArr) {
    mbcList.innerHTML = "";
    if (objArr.length > 7) {
        mbcShowAll.classList.remove("js-hidden");
        mbcShowAll.classList.remove("js-showAll");
    } else {
        mbcShowAll.classList.add("js-hidden");
    }
    objArr.forEach(obj => {
        addManufactorer(obj.manufactorer, obj.permalink);
    });
}

function addManufactorer(manufactorer, permalink) {
    let link = document.createElement("A");
    link.classList.add("mbc__link");
    link.href = permalink;
    link.textContent = manufactorer;
    mbcList.appendChild(link);
}
export { mbc, addManufactorers };