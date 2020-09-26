import footer from "./footer.js";
import search from "./searchbarfunction.js";


let shopCategoriesGrid = document.querySelector(".shopCategories__grid");

let categories = [

    {
        title: "SHOP BY BRAND",
        imgPath: "shoppage_shopbybrand_bgimage.jpg",
        permaLink: ""
    },
    {
        title: "INTEGRATED AMPLIFIERS",
        imgPath: "shoppage_amplifier_bgimage.jpg",
        permaLink: "?category=integrated-amplifiers"
    },
    {
        title: "SPEAKERS",
        imgPath: "shoppage_speaker_bgimage.jpg",
        permaLink: "?category=speakers"
    },
    {
        title: "DVD PLAYERS",
        imgPath: "shoppage_turntables_bgimage.jpg",
        permaLink: "?category=dvd-players"
    },
    {
        title: "CD PLAYERS",
        imgPath: "shoppage_cdplayer_bgimage.jpg",
        permaLink: "?category=cd-players"
    },
    {
        title: "STREAMERS",
        imgPath: "shoppage_streamers_bgimage.jpg",
        permaLink: "?category=streamers"
    },
    {
        title: "PREAMPLIFIERS",
        imgPath: "shoppage_cables_bgimage.jpg",
        permaLink: "?category=preamplifiers"
    },
    {
        title: "POWERAMPLIFIERS",
        imgPath: "shoppage_furniture_bgimage.jpg",
        permaLink: "?category=power-amplifiers"
    },
    {
        title: "TUBEAAMPLIFIERS",
        imgPath: "frontpage_b_bgimage.jpg",
        permaLink: "?category=tube-amplifiers"
    },
    {
        title: "HOME CINEMA",
        imgPath: "shoppage_homecinema_bgimage.jpg",
        permaLink: ""
    },
    {
        title: "OUTLET - SAVE UP TO 50%",
        imgPath: "shoppage_outlet_bgimage.jpg",
        permaLink: ""
    },
    {
        title: "EBAY SHOP",
        imgPath: "shoppage_ebayshop_bgimage.jpg",
        permaLink: ""
    },
    {
        title: "CEILING SPEAKERS",
        imgPath: "shoppage_ceilingspeakers_bgimage.jpg",
        permaLink: "?category=speakers"
    },
    {
        title: "TVS",
        imgPath: "shoppage_tv_bgimage.jpg",
        permaLink: ""
    },
    {
        title: "VINYL LPS",
        imgPath: "shoppage_vinyllps_bgimage.jpg",
        permaLink: "?category=lps"
    },
    {
        title: "SHOP NOW",
        imgPath: "",
        permaLink: ""
    },

];

shuffleCategories(categories);

categories.forEach(category => {
    shopCategoriesGrid.appendChild(
        categoryLink(
            category.title,
            category.imgPath,
            category.permaLink
        )
    );
});

function shuffleCategories(array){
    for (let i = array.length - 2; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function categoryLink(title, imgPath, permaLink) {
    let link = document.createElement("A");
    let span = document.createElement("SPAN");

    link.href = `shop-category-list.html${permaLink}`;
    link.classList.add("shopCategories__link");

    span.classList.add("shopCategories__title");
    span.textContent = title;

    if (imgPath) {
        let img = document.createElement("IMG");
        img.classList.add("shopCategories__image");
        img.src = `./assets/images/${imgPath}`;
        img.alt = title;
        link.appendChild(img);
    } else {
        link.classList.add("shopCategories__link--noImage");
        span.classList.add("shopCategories__title--noImage");
    }

    link.appendChild(span);

    return link;
}

footer();
search();