import specs from "./specs.js";
import fetchProducts from "./fetch.js";
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";

fetchProducts().then(function(products){
    console.log(products.products[0].description);

    specs(products.products[0].description);
})

// console.log("test")


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

additionalInfo(dummyInfo);

footer();