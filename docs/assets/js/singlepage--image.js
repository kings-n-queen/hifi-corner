const singlePageImageContainer = document.querySelector(".mainSinglePage__image");

function singlePageImage(product){
    var largeImage = document.createElement("img");
    largeImage.className = "mainSinglePage__image__largeImage";
    largeImage.src = product.billede[0];

    let thumbnailsContainer = document.createElement("div");
    thumbnailsContainer.className = "mainSinglePage__image__thumbnailContainer";

    product.billede.forEach(product => {
        let thumbnailImage = document.createElement("img");
        thumbnailImage.className = "thumbnailContainer__image";
        thumbnailImage.src = product;

        thumbnailsContainer.append(thumbnailImage);
    });

    singlePageImageContainer.append(largeImage, thumbnailsContainer);
}



function changeLargeImg(e){
    document.querySelector(".mainSinglePage__image__largeImage").src = e.target.src
}

export {singlePageImage, changeLargeImg};