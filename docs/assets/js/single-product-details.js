function productDetailsName(title, beskrivelse, manufacturer, andreProdukter, pris) { 
    var nameOfProduct = document.querySelector (".nameOfProduct");
    nameOfProduct.innerText = title + "MrX";


    var singleProductDescription = document.querySelector (".singleProductDescription");
    singleProductDescription.innerText = beskrivelse;



    var otherProductsFromBrand = document.querySelector (".otherProductsFromBrand");
    otherProductsFromBrand.href= "shop-category-list.html?manufacturer=" + manufacturer;
    otherProductsFromBrand.innerText = andreProdukter;


    var singlePrice = document.querySelector (".singlePrice");
    singlePrice.innerText = pris;
    
}
    


export default productDetailsName;