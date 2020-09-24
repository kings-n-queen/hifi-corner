import filterProductsByManfacturer from "./shop-category-list-filterByManufacturer.js";
import filterProductsByPrice from "./shop-category-list-filterByPrice.js";

function numbersForFilterPrice(products, minPrice, maxPrice) {
    let numberOfProducts = filterProductsByPrice(products, minPrice, maxPrice);

    return numberOfProducts.length;
}

function numbersForFilterManufacturer(products, manufacturer) {
    let numberOfProducts = filterProductsByManfacturer(products, manufacturer);

    return numberOfProducts.length;
}

function displayNumbers(element, number) {
    element.textContent = number;
}

export { numbersForFilterPrice, numbersForFilterManufacturer, displayNumbers };