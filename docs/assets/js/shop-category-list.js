import breadcrumbs from "./breadcrumbs.js";
import displayProducts from "./listView.js";

//dummyArray
const dummyProjectArray = [
    {
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_mahi.jpg",
        "name": "MANLEY MAHI POWER AMPLIFIER",
        "price": "£329.00"
    },
    {
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_neoclassic300b.jpg",
        "name": "MANLEY NEOCLASSIC 300B AMPLIFIER",
        "price": "£739.00"
    },
    {   
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_snapper.jpg",
        "name": "MANLEY SNAPPER POWER AMPLIFIER",
        "price": "£599.00"
    },
    {   
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/parasound_haloa23.jpg",
        "name": "PARASOUND HALOA 23 POWER AMPLIFIER",
        "price": "£249.00"
    },
    {
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_mahi.jpg",
        "name": "MANLEY MAHI POWER AMPLIFIER",
        "price": "£329.00"
    },
    {
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_neoclassic300b.jpg",
        "name": "MANLEY NEOCLASSIC 300B AMPLIFIER",
        "price": "£739.00"
    },
    {   
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/manley_snapper.jpg",
        "name": "MANLEY SNAPPER POWER AMPLIFIER",
        "price": "£599.00"
    },
    {   
        "permalink": "index.html",
        "imgSrc": "./assets/images/effektforstaerkere/parasound_haloa23.jpg",
        "name": "PARASOUND HALOA 23 POWER AMPLIFIER",
        "price": "£249.00"
    }
];

let dummyBreadcrumbArray = [

    {
        title: "Amplifiers",
        link: "?category=amplifiers"
    }, {
        title: "CD players",
        link: ""
    }

];

let breadcrumbsContainer = document.querySelector(".breadcrumbs__container");

breadcrumbs(dummyBreadcrumbArray, breadcrumbsContainer);

displayProducts(dummyProjectArray);