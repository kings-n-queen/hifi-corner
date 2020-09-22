import specs from "./specs.js";
import fetchProducts from "./fetch.js";
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";
import {singlePageImage, changeLargeImg} from "./singlepage--image.js";


fetchProducts().then(function(products){
    console.log(products);
})

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

footer();

const thumbnails = document.querySelectorAll(".thumbnailContainer__image");
thumbnails.forEach(image => image.addEventListener("click", changeLargeImg));