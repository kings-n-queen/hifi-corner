import specs from "./specs.js";
import breadcrumbs from "./breadcrumbs.js";;
import {setURL, urlGetKey} from "./url-handler.js";
import fetchProducts from "./fetch.js"
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";
import {singlePageImage, changeLargeImg} from "./singlepage--image.js";


fetchProducts().then(function(products){
    console.log(urlGetKey("product"));
    console.log(products);
});

let dummySpecs = [

    {
        key: "Power output (8 / 4 Ohm RMS)",
        value: "45 W / 60 W"
    },
    {
        key: "Frequency Response",
        value: "10 Hz - 70 kHz"
    }

]

let dummyInfo = [

    {
        key: "manufactorer",
        value: "Marantz"
    },
    {
        key: "manufactorer link",
        value: "Marantz PM6006",
        permalink: "single-product-description.html?product=marantz-pm6006"
    },
    {
        key: "free warranty",
        value: "3 years"
    },
    {
        key: "delivery charge",
        value: "Free"
    },
    {
        key: "delivery time",
        value: "1 - 5 working days"
    },
    {
        key: "card surcharges",
        value: "No"
    }

]

let dummyImages = 
    {
        imgSrc : [ 
        "./assets/images/lps/Pro_ject_Debut_3_bl.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_red_1.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_yellow_1.jpg"    
        ]
    }


singlePageImage(dummyImages);

specs(dummySpecs);

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
