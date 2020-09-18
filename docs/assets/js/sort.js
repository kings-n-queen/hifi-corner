let sortByCallback;
let sortAscendingCallback;
let sortDescendingCallback;
let sortGridviewCallback;
let sortListviewCallback;
let sortCountCallback;

let sortObj = {
    sortBy: "price",
    ascending: true,
    gridView: true,
    sortCount: 0,
    maxDisplayCount: 0,
    onSortBy(callback) {
        sortByCallback = callback;
    },
    onDirection(direction, callback) {
        if (direction === "asc") {
            sortAscendingCallback = callback;
        }
        if (direction === "desc") {
            sortDescendingCallback = callback;
        }
    },
    onView(type, callback) {
        if (type === "grid") {
            sortGridviewCallback = callback;
        }
        if (type === "list") {
            sortListviewCallback = callback;
        }
    },
    onSortCount(callback) {
        sortCountCallback = callback;
    },
    get count() {
        return this.sortCount;
    },
    set count(value) {
        let str = value == 1 ? `1 Item` : `${value} Item(s)`;
        document.querySelector(".js-sortCount").textContent = str;
        this.sortCount = value;
    }
}

function sort() {
    let sortDropDown = document.getElementById("sort");
    let sortAscending = document.querySelector(".js-ascending");
    let sortDescending = document.querySelector(".js-descending");
    let gridview = document.querySelector(".js-gridview");
    let listview = document.querySelector(".js-listview");
    let countDropDown = document.getElementById("count");

    sortObj.maxDisplayCount = parseInt(countDropDown.options[countDropDown.options.selectedIndex].value)

    // SORT BY
    sortDropDown.addEventListener("change", function() {
        if (!sortByCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onSortBy() is not defined! I refuse to perform this task!");
            return;
        }
        sortObj.sortBy = this.options[this.options.selectedIndex].value;
        sortByCallback(sortObj.sortBy);
    });

    // SORT DIRECTION
    sortAscending.addEventListener("click", function(event) {
        event.preventDefault();
        if (!sortDescendingCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onDescending() is not defined! I refuse to perform this task!");
            return;
        }
        sortAscending.classList.add("js-hidden");
        sortDescending.classList.remove("js-hidden");
        sortObj.ascending = false;
        sortDescendingCallback();
    });
    sortDescending.addEventListener("click", function(event) {
        event.preventDefault();
        if (!sortAscendingCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onAscending() is not defined! I refuse to perform this task!");
            return;
        }
        sortDescending.classList.add("js-hidden");
        sortAscending.classList.remove("js-hidden");
        sortObj.ascending = true;
        sortAscendingCallback();
    });

    // GRID- / LIST-VIEW
    gridview.addEventListener("click", function(event) {
        event.preventDefault();
        if (gridview.classList.contains("js-active")) {
            return;
        }
        if (!sortGridviewCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onGridview() is not defined! I refuse to perform this task!");
            return;
        }
        gridview.classList.add("js-active");
        listview.classList.remove("js-active");
        sortObj.gridView = true;
        sortGridviewCallback();
    });
    listview.addEventListener("click", function(event) {
        event.preventDefault();
        if (listview.classList.contains("js-active")) {
            return;
        }
        if (!sortListviewCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onListview() is not defined! I refuse to perform this task!");
            return;
        }
        listview.classList.add("js-active");
        gridview.classList.remove("js-active");
        sortObj.gridView = false;
        sortListviewCallback();
    });

    // LIST VIEW COUNT
    countDropDown.addEventListener("change", function() {
        if (!sortCountCallback) {
            console.warn("King or Queen, please fix this issue! sortObj.onSortBy() is not defined! I refuse to perform this task!");
            return;
        }
        sortObj.maxDisplayCount = parseInt(this.options[this.options.selectedIndex].value);
        sortCountCallback(sortObj.maxDisplayCount);
    });

    return sortObj;
}

function sortNumbersAsc(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

export { sort, sortNumbersAsc };