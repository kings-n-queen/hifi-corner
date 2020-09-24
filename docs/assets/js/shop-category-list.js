import updateMBC from "./mbc.js";
import breadcrumbs from "./breadcrumbs.js";
import displayProducts from "./listView.js";
import sort from "./sort.js";
import toggleViewState from "./toggleViewState.js";
import { setURL, urlGetKey } from "./url-handler.js";
import fetchProducts from "./fetch.js";
import footer from "./footer.js";
import filterProductsByPrice from "./shop-category-list-filterByPrice.js";
import filterProductsByManufacturer from "./shop-category-list-filterByManufacturer.js";




fetchProducts().then(function(jsonObj) {
    console.log(urlGetKey("product"));
    console.log(jsonObj);
    arrange(jsonObj);

});



// //#region dummyArray

// const dummyProjectArray = [

//     {
//         "permalink": "single-product-description.html?product=manley-mahi-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_mahi.jpg",
//         "name": "MANLEY MAHI POWER AMPLIFIER",
//         "price": "£329.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=manley-neoclassic-300b-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_neoclassic300b.jpg",
//         "name": "MANLEY NEOCLASSIC 300B AMPLIFIER",
//         "reference": "£1299.00",
//         "price": "£739.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=manley-snapper-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_snapper.jpg",
//         "name": "MANLEY SNAPPER POWER AMPLIFIER",
//         "reference": "749.00",
//         "price": "£599.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=parasound-haloa-23-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/parasound_haloa23.jpg",
//         "name": "PARASOUND HALOA 23 POWER AMPLIFIER",
//         "price": "£249.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "parasound",
//             "permalink": "?manufactorer=parasound"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=manley-mahi-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_mahi.jpg",
//         "name": "MANLEY MAHI POWER AMPLIFIER",
//         "price": "£1329.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=manley-neoclassic-200b-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_neoclassic300b.jpg",
//         "name": "MANLEY NEOCLASSIC 200B AMPLIFIER",
//         "reference": "£1299.00",
//         "price": "£739.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=manley-snapper-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/manley_snapper.jpg",
//         "name": "MANLEY SNAPPER POWER AMPLIFIER",
//         "reference": "749.00",
//         "price": "£599.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "manley",
//             "permalink": "?manufactorer=manley"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=parasound-haloa-21-power-amplifier",
//         "imgSrc": "./assets/images/power-amplifiers/parasound_haloa23.jpg",
//         "name": "PARASOUND HALOA 21 POWER AMPLIFIER",
//         "price": "249.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "parasound",
//             "permalink": "?manufactorer=parasound"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=creek-classic-cd",
//         "imgSrc": "./assets/images/cd-players/creek_classic_cd.jpg",
//         "name": "CREEK CLASSIC CD",
//         "price": "£99.00",
//         "additionalInformations": {
//             "manufacturer": "Marantz",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "creek",
//             "permalink": "?manufactorer=creek"
//         },
//     },
//     {
//         "permalink": "single-product-description.html?product=creek-destiny-cd",
//         "imgSrc": "./assets/images/cd-players/creek_Destiny_CD.jpg",
//         "name": "CREEK DESTINY CD",
//         "price": "£149.00",
//         "additionalInformations": {
//             "manufacturer": "arcam",
//             "manufacturerLink": "",
//             "freeWarranty": "3 years",
//             "deliveryCharge": "Free",
//             "deliveryTime": "1-5 Working days",
//             "cardSurcharges": "No"
//         },
//         "manufactorer": {
//             "name": "creek",
//             "permalink": "?manufactorer=creek"
//         },
//     }
// ];

// //#endregion dummyArray


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

    updateMBC(jsonObj.products);

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
    })

    //#endregion FILTER FUNCTIONS

    //#region FOOTER

    footer();

    //#endregion FOOTER
}