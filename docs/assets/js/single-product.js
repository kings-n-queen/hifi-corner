import specs from "./specs.js";
import breadcrumbs from "./breadcrumbs.js";;
import { setURL, urlGetKey } from "./url-handler.js";
import fetchProducts from "./fetch.js"
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";
import { singlePageImage, changeLargeImg } from "./singlepage--image.js";
import productDetailsName from "./single-product-details.js";
import search from "./searchbarfunction.js";


fetchProducts().then(arrange);

function arrange(jsonObj) {
    var id = urlGetKey("id");
    
    if (id) {
        var product;
        for (let i = 0; i < jsonObj.products.length; i++) {
            if (jsonObj.products[i].id == id) {
                product = jsonObj.products[i];
                break
            }
        }

        productDetailsName(product.navn, product.beskrivelse, product.manufacturer, product.andreProdukter, product.pris);
        specs(product.description);
        singlePageImage(product);
        additionalInfo(product);
        var categoryLink = `shop-category-list.html?category=${product.category}`
        setBreadcrumbs(product.category, categoryLink, product.navn);

        const thumbnails = document.querySelectorAll(".thumbnailContainer__image");
        thumbnails.forEach(image => image.addEventListener("click", changeLargeImg));
    }

    footer();
    search();
}

function setBreadcrumbs(title, permalink, productName) {
    let breadCrumbArray = [{ title: "Home", permalink: "shop-category-list.html" }];
    breadCrumbArray.push({ title, permalink });
    breadCrumbArray.push({ title: productName, permalink: "" });
    breadcrumbs(breadCrumbArray);
}