function filterProductsByPrice (products, minPrice, maxPrice) {
    let filteredProducts = [];
    products.forEach(product => {
        let price = parseFloat(product.pris);
        if (price >= 10000) {
            maxPrice = Infinity;
        }
        if (price >= minPrice && price < maxPrice) {
            filteredProducts.push(product);
        }
    })
    
    return filteredProducts;
}

export default filterProductsByPrice;