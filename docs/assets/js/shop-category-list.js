import addManufacturers from "./mbc.js";
import breadcrumbs from "./breadcrumbs.js";
import displayProducts from "./listView.js";
import sort from "./sort.js";
import toggleViewState from "./toggleViewState.js";
import { setURL, urlGetKey } from "./url-handler.js";
import fetchProducts from "./fetch.js";
import footer from "./footer.js";
import filterProductsByPrice from "./shop-category-list-filterByPrice.js";
import filterProductsByManufacturer from "./shop-category-list-filterByManufacturer.js";
import {numbersForFilterPrice, numbersForFilterManufacturer, displayNumbers} from "./shop-category-list-filterNumbers.js";
import categoryHandler from "./shop-category-list-amplifiers.js";

fetchProducts().then(function(jsonObj) {
    console.log(urlGetKey("product"));
    console.log(jsonObj);
    arrange(jsonObj);

});

function arrange(jsonObj) {

    //#region SORT FUNCTIONS

    // Calling sort() returns an object that contains all relevant values
    // and methods to handle the sorting mechanism
    let sortBox = sort();

    // Create copy of dummy array (this should be filled with data from the actual JSON object)
    // Updates the HTML in the sort box when set/changed
    sortBox.products = [...jsonObj.products];

    // Display the products in the list (listView.js)
    displayProducts(sortBox.products);

    // SORT BY: Price / Name
    sortBox.addSortListener("sortby", sortUpdate);

    // Ascending- / Descending- button
    sortBox.addSortListener("asc", sortUpdate);
    sortBox.addSortListener("desc", sortUpdate);

    // VIEW AS: (gridview- / listview- button)
    sortBox.addSortListener("grid", toggleView);
    sortBox.addSortListener("list", toggleView);

    // SHOW: Amount display
    sortBox.addSortListener("count", sortUpdate);


    // Sort and display the list
    function sortUpdate() {
        sortBox.products = [...jsonObj.products];
        displayProducts(sortBox.products);
    }

    // Toggle between gridview and listview
    function toggleView() {
        toggleViewState(sortBox.gridView ? "grid" : "list");
    }

    //#endregion SORT FUNCTIONS

    //#region MBC

    addManufacturers(jsonObj.products);

    //#endregion MBC

    //#region BREADCRUMBS

    let dummyBreadcrumbArray = [];

    addBreadcrumbItem(dummyBreadcrumbArray, "Home", "index.html");
    addBreadcrumbItem(dummyBreadcrumbArray, "Amplifiers", "?category=amplifiers");
    addBreadcrumbItem(dummyBreadcrumbArray, "Power Amplifiers", "?category=power-amplifiers");
    addBreadcrumbItem(dummyBreadcrumbArray, "MANLEY MAHI POWER AMPLIFIER", "");

    breadcrumbs(dummyBreadcrumbArray);

    function addBreadcrumbItem(toArray, title, permalink) {
        toArray.push({ title, permalink });
    }

    //#endregion BREADCRUMBS

    //#region FILTER FUNCTIONS

    let priceRangeButton = document.querySelectorAll(".shopBy");
    priceRangeButton.forEach(function(button) {
        button.addEventListener("click", function(event) {
            if (event.target.classList.contains("subCategory")) {
                event.preventDefault();
                let productsFilteredByPrice = filterProductsByPrice(jsonObj.products, event.target.dataset.minprice, event.target.dataset.maxprice);
                sortBox.products = [...productsFilteredByPrice];
                displayProducts(sortBox.products);
            }
        })
    });

    let manufactorerButton = document.querySelectorAll(".manufacturer")
    manufactorerButton.forEach(function(button) {
        button.addEventListener("click", function(event) {
            if (event.target.classList.contains("subCategory")) {
                event.preventDefault();
                let productsFilteredByManufacturer = filterProductsByManufacturer(jsonObj.products, event.target.dataset.manufacturer);
                sortBox.products = [...productsFilteredByManufacturer];
                displayProducts(sortBox.products);
            }
        })
    });
  
//#region FILTER NUMBERS

let amountOfPrice = document.querySelectorAll(".shopBy span");
window.onload = amountOfPrice.forEach(element => {
    let number = numbersForFilterPrice(jsonObj.products, element.dataset.minprice, element.dataset.maxprice);
    displayNumbers(element, number);
});

let amountOfManufaturer = document.querySelectorAll(".manufacturer span");
window.onload = amountOfManufaturer.forEach(element => {
    let number = numbersForFilterManufacturer(jsonObj.products, element.dataset.manufacturer);
    displayNumbers(element, number);
});

//#endregion FILTER NUMBERS

//#endregion FILTER FUNCTIONS

    //#region FOOTER

    footer();

    //#endregion FOOTER
}