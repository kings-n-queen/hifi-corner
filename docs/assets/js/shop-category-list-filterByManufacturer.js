function filterProductsByManfacturer(products, manufacturer) {
    let filteredProducts = [];
    products.forEach(product => {
        if (product.manufacturer == manufacturer) { 
            filteredProducts.push(product);
            console.log(manufacturer);
        }
    });
    console.log(filteredProducts);
    return filteredProducts;
}

export default filterProductsByManfacturer;