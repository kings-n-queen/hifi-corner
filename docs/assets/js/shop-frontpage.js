let shopCategoriesGrid = document.querySelector(".shopCategories__grid");

let categories = [

    {
        title: "SHOP BY BRAND",
        imgPath: "shoppage_shopbybrand_bgimage.jpg",
        permaLink: "?brand=all"
    },
    {
        title: "AMPLIFIERS",
        imgPath: "shoppage_amplifier_bgimage.jpg",
        permaLink: "?category=amplifiers"
    },
    {
        title: "SPEAKERS",
        imgPath: "shoppage_speaker_bgimage.jpg",
        permaLink: "?category=speakers"
    },
    {
        title: "TURNTABLES",
        imgPath: "shoppage_turntables_bgimage.jpg",
        permaLink: "?category=turntables"
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
        title: "CABLES",
        imgPath: "shoppage_cables_bgimage.jpg",
        permaLink: "?category=cables"
    },
    {
        title: "FURNITURE",
        imgPath: "shoppage_furniture_bgimage.jpg",
        permaLink: "?category=furniture"
    },
    {
        title: "HEADPHONES",
        imgPath: "frontpage_b_bgimage.jpg",
        permaLink: "?category=headphones"
    },
    {
        title: "HOME CINEMA",
        imgPath: "shoppage_homecinema_bgimage.jpg",
        permaLink: "?category=home-cinema"
    },
    {
        title: "OUTLET - SAVE UP TO 50%",
        imgPath: "shoppage_outlet_bgimage.jpg",
        permaLink: "?category=outlet"
    },
    {
        title: "EBAY SHOP",
        imgPath: "shoppage_ebayshop_bgimage.jpg",
        permaLink: "?category=ebay-shop"
    },
    {
        title: "CEILING SPEAKERS",
        imgPath: "shoppage_ceilingspeakers_bgimage.jpg",
        permaLink: "?category=ceiling-speakers"
    },
    {
        title: "TVS",
        imgPath: "shoppage_tv_bgimage.jpg",
        permaLink: "?category=tvs"
    },
    {
        title: "VINYL LPS",
        imgPath: "shoppage_vinyllps_bgimage.jpg",
        permaLink: "?category=vinyl-lps"
    },
    {
        title: "SHOP NOW",
        imgPath: "",
        permaLink: "?category=all"
    },

];

categories.forEach(category => {
    shopCategoriesGrid.appendChild(
        categoryLink(
            category.title,
            category.imgPath,
            category.permaLink
        )
    );
});

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