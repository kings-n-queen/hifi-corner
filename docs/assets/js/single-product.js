callbtn-single-page
import specs from "./specs.js";
import breadcrumbs from "./breadcrumbs.js";;
import { setURL, urlGetKey } from "./url-handler.js";
import fetchProducts from "./fetch.js"
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";
import {singlePageImage, changeLargeImg} from "./singlepage--image.js";
import productDetailsName from "./single-product-details.js";
import search from "./searchbarfunction.js";


// test 5201
fetchProducts().then(function(products) {
    console.log(urlGetKey("product"));
    console.log(products);
    
    productDetailsName(products.products[0].navn, products.products[0].beskrivelse, products.products[0].category, products.products[0].andreProdukter, products.products[0].pris);
    specs(products.products[0].description);
});

let dummyInfo = {
    name: "test",
    permalink: "single-product-description.html?product=marantz-pm6006",
    additionalInformations: {
        manufacturer: "Marantz",
        manufacturerLink: "Marantz CD Player CD6007/T1",
        freeWarranty: "3 years",
        deliveryCharge: "Free",
        deliveryTime: "1-5 Working days",
        cardSurcharges: "No"
    }
}

additionalInfo(dummyInfo);

let dummyImages = {
    imgSrc: [
        "./assets/images/lps/Pro_ject_Debut_3_bl.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_red_1.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_yellow_1.jpg"
    ]
}


singlePageImage(dummyImages);


additionalInfo(dummyInfo);

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

const thumbnails = document.querySelectorAll(".thumbnailContainer__image");
thumbnails.forEach(image => image.addEventListener("click", changeLargeImg));


footer();
search();

import specs from "./specs.js";
import breadcrumbs from "./breadcrumbs.js";;
import { setURL, urlGetKey } from "./url-handler.js";
import fetchProducts from "./fetch.js"
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";
import {singlePageImage, changeLargeImg} from "./singlepage--image.js";
import productDetailsName from "./single-product-details.js";
import search from "./searchbarfunction.js";


fetchProducts().then(function(products) {
    var id = urlGetKey("id");
    var product;
    for (let i = 0; i < products.products.length; i++) {
        if (products.products[i].id == id) {
            product = products.products[i];
            break
        }  
    }
    console.log(urlGetKey("id"));
    console.log(product);
    
    productDetailsName(product.navn, product.beskrivelse, product.category, product.andreProdukter, product.pris);
    specs(product.description);
});

let dummyInfo = {
    name: "test",
    permalink: "single-product-description.html?product=marantz-pm6006",
    additionalInformations: {
        manufacturer: "Marantz",
        manufacturerLink: "Marantz CD Player CD6007/T1",
        freeWarranty: "3 years",
        deliveryCharge: "Free",
        deliveryTime: "1-5 Working days",
        cardSurcharges: "No"
    }
}

additionalInfo(dummyInfo);

let dummyImages = {
    imgSrc: [
        "./assets/images/lps/Pro_ject_Debut_3_bl.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_red_1.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_yellow_1.jpg"
    ]
}


singlePageImage(dummyImages);


additionalInfo(dummyInfo);

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

const thumbnails = document.querySelectorAll(".thumbnailContainer__image");
thumbnails.forEach(image => image.addEventListener("click", changeLargeImg));


footer();
search();

