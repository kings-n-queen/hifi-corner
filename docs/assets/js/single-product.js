import specs from "./specs.js";
import breadcrumbs from "./breadcrumbs.js";;
import {setURL, urlGetKey} from "./url-handler.js";
import fetchProducts from "./fetch.js"
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";

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

let dummyInfo = {
    additionalInformations: {
        manufacturer: "Marantz",
        manufacturerLink: {
            text: "Marantz CD Player CD6007/T1",
            href: "single-product-description.html?product=marantz-pm6006"
        },
        freeWarranty: "3 years",
        deliveryCharge: "Free",
        deliveryTime: "1-5 Working days",
        cardSurcharges: "No"
    }
}

additionalInfo(dummyInfo.additionalInformations);

specs(dummySpecs);

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

footer();