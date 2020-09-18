const viewList = document.getElementById("listetest");

function displayProducts(arrayOfProducts) {
    arrayOfProducts.forEach(product => {
        let listView_card = document.createElement("div");
        listView_card.className = "listView__card";

        let productLink = document.createElement("a");
        productLink.href = product.permalink;

        const newImg = document.createElement("img");
        newImg.setAttribute("src", product.imgSrc);
        productLink.append(newImg);
        
        const productName = document.createElement("p");
        productName.className = "card__productName";
        productName.textContent = product.name;

        const price = document.createElement("p");
        price.className = "card__price";
        price.textContent = product.price;
        
        const button = document.createElement("button");
        button.className = "card__button";
        button.textContent = "ADD TO CART";

        listView_card.append(productLink, productName, price, button);
        viewList.append(listView_card);
    });
}

export default displayProducts;
