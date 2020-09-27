let sortByCallback;
let sortAscendingCallback;
let sortDescendingCallback;
let sortGridviewCallback;
let sortListviewCallback;
let sortCountCallback;

let sortBox = {
    productsArray: null,
    allProducts: null,
    sortBy: "pris",
    ascending: true,
    gridView: true,
    maxDisplayCount: 0,
    get products() {
        return this.productsArray;
    },
    set products(value) {
        this.productsArray = [...value];
        this.allProducts = [...value];
        let totalProductCount = this.productsArray.length;
        objectSort(this.productsArray, this.sortBy, this.ascending);
        let displayAmount = Math.min(this.productsArray.length, this.maxDisplayCount);
        let removeAmount = this.productsArray.length - displayAmount;
        this.productsArray.splice(displayAmount, removeAmount);
        let str = this.productsArray.length == 1 ? `1 Item` : `${totalProductCount} Item(s)`;
        document.querySelector(".js-sortCount").textContent = str;
    },
    addSortListener(type, callback) {
        switch (type) {
            case "grid":
                sortGridviewCallback = callback;
                break;
            case "list":
                sortListviewCallback = callback;
                break;
            case "asc":
                sortAscendingCallback = callback;
                break;
            case "desc":
                sortDescendingCallback = callback;
                break;
            case "sortby":
                sortByCallback = callback;
                break;
            case "count":
                sortCountCallback = callback;
                break;

            default:
                break;
        }
    }
}

function sort() {
    let sortDropDown = document.getElementById("sort");
    let sortAscending = document.querySelector(".js-ascending");
    let sortDescending = document.querySelector(".js-descending");
    let gridview = document.querySelector(".js-gridview");
    let listview = document.querySelector(".js-listview");
    let countDropDown = document.getElementById("count");

    sortBox.sortBy = sortDropDown.options[sortDropDown.options.selectedIndex].value;
    sortBox.maxDisplayCount = parseInt(countDropDown.options[countDropDown.options.selectedIndex].value)

    // SORT BY
    sortDropDown.addEventListener("change", function() {
        if (!isCallbackDefined(sortByCallback)) {
            return;
        }
        sortBox.sortBy = this.options[this.options.selectedIndex].value;
        sortByCallback();
    });

    // SORT DIRECTION
    sortAscending.addEventListener("click", function(event) {
        event.preventDefault();
        if (!isCallbackDefined(sortDescendingCallback)) {
            return;
        }
        swicthClassName(sortAscending, sortDescending, "js-hidden");
        sortBox.ascending = false;
        sortDescendingCallback();
    });
    sortDescending.addEventListener("click", function(event) {
        event.preventDefault();
        if (!isCallbackDefined(sortAscendingCallback)) {
            return;
        }
        swicthClassName(sortDescending, sortAscending, "js-hidden");
        sortBox.ascending = true;
        sortAscendingCallback();
    });

    // GRID- / LIST-VIEW
    gridview.addEventListener("click", function(event) {
        event.preventDefault();
        if (gridview.classList.contains("js-active")) {
            return;
        }
        if (!isCallbackDefined(sortGridviewCallback)) {
            return;
        }
        swicthClassName(gridview, listview, "js-active");
        sortBox.gridView = true;
        sortGridviewCallback();
    });
    listview.addEventListener("click", function(event) {
        event.preventDefault();
        if (listview.classList.contains("js-active")) {
            return;
        }
        if (!isCallbackDefined(sortListviewCallback)) {
            return;
        }
        swicthClassName(listview, gridview, "js-active");
        sortBox.gridView = false;
        sortListviewCallback();
    });

    // LIST VIEW COUNT
    countDropDown.addEventListener("change", function() {
        if (!isCallbackDefined(sortCountCallback)) {
            return;
        }
        sortBox.maxDisplayCount = parseInt(this.options[this.options.selectedIndex].value);
        sortCountCallback();
    });

    return sortBox;
}

function isCallbackDefined(callback) {
    if (!callback) {
        console.warn("King or Queen, please fix this issue! sortObj.addSortListener() is not defined! I refuse to perform this task!");
        return false;
    }
    return true;
}

function swicthClassName(elmClassAdd, elmClassRemove, className) {
    elmClassAdd.classList.add(className);
    elmClassRemove.classList.remove(className);
}

// function sortNumbersAsc(arr) {
//     return arr.sort(function(a, b) {
//         return a - b;
//     });
// }

let key = null;
let direction = 1;

function compare(a, b) {
    let compareA = a[key].toUpperCase();
    let compareB = b[key].toUpperCase();

    if (key === "pris") {
        compareA = extractPrice(compareA);
        compareB = extractPrice(compareB);
    }

    let comparison = 0;
    if (compareA > compareB) {
        comparison = 1;
    } else if (compareA < compareB) {
        comparison = -1;
    }
    return comparison * direction;
}

function extractPrice(price) {
    let value = price.replace("£", "");
    return parseFloat(value);
}

function objectSort(arr, sortKey, ascending = true) {
    key = sortKey;
    direction = ascending ? 1 : -1;
    arr.sort(compare);
}

export default sort;