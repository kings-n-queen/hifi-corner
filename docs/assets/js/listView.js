const viewBox = document.getElementById("viewBox");

function displayProducts(arrayOfProducts) {
    arrayOfProducts.forEach(product => {
        let listView_card = document.createElement("div");
        listView_card.className = "listView__card";

        let productLink = document.createElement("a");
        productLink.href = product.permalink;

        const newImg = document.createElement("img");
        newImg.setAttribute("src", product.imgSrc);
        productLink.append(newImg);
        productLink.className = "card__productLink";
        
        const productName = document.createElement("p");
        productName.className = "card__productName";
        productName.textContent = product.name;

        const priceContainer = document.createElement("div");
        priceContainer.className = "card__priceContainer";

        const reference = document.createElement("p");
        reference.className = "card__referencePrice";
        reference.textContent = product.reference;

        const price = document.createElement("p");
        price.className = "card__price";
        price.textContent = product.price;
        
        const button = document.createElement("button");
        button.className = "card__button";
        button.textContent = "ADD TO CART";

        priceContainer.append(reference, price);
        listView_card.append(productLink, productName, priceContainer, button);
        viewBox.append(listView_card);
    });
}

export default displayProducts;
