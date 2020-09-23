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


    specs(products.products[0].description);
})

// console.log("test")


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

let dummyImages = 
    {
        imgSrc : [ 
        "./assets/images/lps/Pro_ject_Debut_3_bl.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_red_1.jpg",
        "./assets/images/lps/Pro_ject_Debut_III_yellow_1.jpg"    
        ]
    }


singlePageImage(dummyImages);


additionalInfo(dummyInfo);

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

const thumbnails = document.querySelectorAll(".thumbnailContainer__image");
thumbnails.forEach(image => image.addEventListener("click", changeLargeImg));


footer();
