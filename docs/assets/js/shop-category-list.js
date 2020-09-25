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

fetchProducts().then(arrange);

function arrange(jsonObj) {

    //#region SORT FUNCTIONS

    // Calling sort() returns an object that contains all relevant values
    // and methods to handle the sorting mechanism
    let sortBox = sort();

    // Create copy of JSON object's products-array
    // Updates the HTML in the sort box when set/changed
    sortBox.products = [...jsonObj.products];

    urlDisplay();

    // SORT BY: Price / Name
    sortBox.addSortListener("sortby", urlDisplay);

    // Ascending- / Descending- button
    sortBox.addSortListener("asc", urlDisplay);
    sortBox.addSortListener("desc", urlDisplay);

    // VIEW AS: (gridview- / listview- button)
    sortBox.addSortListener("grid", toggleView);
    sortBox.addSortListener("list", toggleView);

    // SHOW: Amount display
    sortBox.addSortListener("count", urlDisplay);

    // Display the list, based on parameters in the URL
    function urlDisplay() {
        if (!filterAndDisplay("category", "manufacturer")) {
            sortDisplay(jsonObj.products);
        }
    }

    // Display the list, based on sort-settings
    function sortDisplay(products){
        sortBox.products = [...products];
        displayProducts(sortBox.products);
    }

    // Toggle between gridview and listview
    function toggleView() {
        toggleViewState(sortBox.gridView ? "grid" : "list");
    }

    function filterAndDisplay(...types){
        let hasParams = false;
        types.forEach(type => {
            let typeValue = urlGetKey(type);
            if (typeValue) {
                sortBox.products = jsonObj.products.filter(product => product[type] == typeValue);
                setBreadcrumbs(typeValue, `?${type}=${typeValue}`);
                sortDisplay(sortBox.products);
                hasParams = true;
            }
        });
        return hasParams;
    }
    
    function filterByParam(type){
        let typeValue = urlGetKey(type);
        if (typeValue) {
            let filteredProducts = jsonObj.products.filter(product => product[type] == typeValue);
            setBreadcrumbs(typeValue, `?${type}=${typeValue}`);
            return filteredProducts;
        }
        return null;
    }

    //#endregion SORT FUNCTIONS

    //#region MBC

    addManufacturers(sortBox.products, function(){
        sortDisplay(filterByParam("manufacturer"));
    });

    //#endregion MBC

    //#region CATEGORY HANDLER
    
    categoryHandler(function(){
        sortDisplay(filterByParam("category"));
        addManufacturers(sortBox.products);
    });
    
    //#endregion CATEGORY HANDLER


    //#region BREADCRUMBS

    function setBreadcrumbs(title, permalink){
        let breadCrumbArray = [{title: "Home", permalink: "index.html"}];
        breadCrumbArray.push({ title, permalink });
        breadcrumbs(breadCrumbArray);
    }

    breadcrumbs([{title: "Home", permalink: "index.html"}]);

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
                setURL(event.target.href);
                console.log(urlGetKey("manufacturer"));
                let productsFilteredByManufacturer = filterProductsByManufacturer(jsonObj.products, urlGetKey("manufacturer"));
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