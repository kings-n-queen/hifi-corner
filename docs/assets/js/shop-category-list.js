import breadcrumbs from "./breadcrumbs.js";

let dummyArray = [

    {
        title: "Amplifiers",
        link: "?category=amplifiers"
    }, {
        title: "CD players",
        link: ""
    }

];

let breadcrumbsContainer = document.querySelector(".breadcrumbs__container");

breadcrumbs(dummyArray, breadcrumbsContainer);