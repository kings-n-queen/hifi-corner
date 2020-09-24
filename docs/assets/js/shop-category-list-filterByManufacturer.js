function filterProductsByManfacturer(products, manufacturer) {
    let filteredProducts = [];
    products.forEach(product => {
        if (product.additionalInformations.manufacturer == manufacturer) { 
            filteredProducts.push(product);
        }
    });
    console.log(filteredProducts);
    return filteredProducts;
}

export default filterProductsByManfacturer;