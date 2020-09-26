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
import subcategoryControl from "./subcategory-links.js";
import searchObject from "./search-object.js";

fetchProducts().then(arrange);
subcategoryControl();

function arrange(jsonObj) {

    window.addEventListener('popstate', urlDisplay);

    //#region SORT FUNCTIONS

    // Calling sort() returns an object that contains all relevant values
    // and methods to handle the sorting mechanism
    let sortBox = sort();

    // Create copy of JSON object's products-array
    // Updates the HTML in the sort box when set/changed
    sortBox.products = jsonObj.products;

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
        if (!filterAndDisplay("category", "manufacturer", "search")) {
            sortDisplay(jsonObj.products);
            breadcrumbs([{title: "Home", permalink: "shop-category-list.html"}]);
        }
    }

    // Display the list, based on sort-settings
    function sortDisplay(products){
        sortBox.products = products;
        displayProducts(sortBox.products);
    }

    // Toggle between gridview and listview
    function toggleView() {
        toggleViewState(sortBox.gridView ? "grid" : "list");
    }

    function filterAndDisplay(...params){
        let hasParams = false;
        params.forEach(param => {
            let paramValue = urlGetKey(param);
            if (paramValue) {
                if (param === "search") {
                    sortBox.products = jsonObj.products.filter(obj => searchObject(paramValue, obj));
                    setBreadcrumbs();
                } else {
                    sortBox.products = jsonObj.products.filter(product => product[param] == paramValue);
                    setBreadcrumbs(paramValue, `?${param}=${paramValue}`);
                }
                displayProducts(sortBox.products);
                hasParams = true;
            }
        });
        return hasParams;
    }
    
    function filterByParam(param, showBreadcrumbs = true){
        let typeValue = urlGetKey(param);
        if (typeValue) {
            let filteredProducts = jsonObj.products.filter(product => product[param] == typeValue);
            if (showBreadcrumbs) {
                setBreadcrumbs(typeValue, `?${param}=${typeValue}`);
            }
            return filteredProducts;
        }
        return null;
    }

    urlDisplay();

    //#endregion SORT FUNCTIONS

    //#region MBC

    addManufacturers(sortBox.allProducts, function(){
        sortDisplay(filterByParam("manufacturer", false));
    });

    //#endregion MBC

    //#region CATEGORY HANDLER
    
    categoryHandler(function(){
        sortDisplay(filterByParam("category") || sortBox.allProducts);
        addManufacturers(sortBox.allProducts);
    });
    
    //#endregion CATEGORY HANDLER


    //#region BREADCRUMBS

    function setBreadcrumbs(title = "", permalink = ""){
        let breadCrumbArray = [{title: "Home", permalink: "shop-category-list.html"}];
        if (title) {
            breadCrumbArray.push({ title, permalink });
        }
        breadcrumbs(breadCrumbArray);
    }

    //#endregion BREADCRUMBS

    //#region FILTER FUNCTIONS

    let priceRangeButton = document.querySelectorAll(".shopBy");
    priceRangeButton.forEach(function(button) {
        button.addEventListener("click", function(event) {
            if (event.target.classList.contains("subCategory")) {
                event.preventDefault();
                let productsFilteredByPrice = filterProductsByPrice(jsonObj.products, event.target.dataset.minprice, event.target.dataset.maxprice);
                sortBox.products = productsFilteredByPrice;
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
                sortBox.products = productsFilteredByManufacturer;
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