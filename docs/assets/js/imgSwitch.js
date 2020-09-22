const dummyProjectArray = [

    {
        "permalink": "single-product-description.html?product=manley-mahi-power-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/manley_mahi.jpg",
        "name": "MANLEY MAHI POWER AMPLIFIER",
        "price": "£329.00",
        "manufactorer": {
            "name": "manley",
            "permalink": "?manufactorer=manley"
        },
    },
    {
        "permalink": "single-product-description.html?product=manley-neoclassic-300b-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/manley_neoclassic300b.jpg",
        "name": "MANLEY NEOCLASSIC 300B AMPLIFIER",
        "reference": "£1299.00",
        "price": "£739.00",
        "manufactorer": {
            "name": "manley",
            "permalink": "?manufactorer=manley"
        },
    },
    {
        "permalink": "single-product-description.html?product=manley-snapper-power-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/manley_snapper.jpg",
        "name": "MANLEY SNAPPER POWER AMPLIFIER",
        "reference": "749.00",
        "price": "£599.00",
        "manufactorer": {
            "name": "manley",
            "permalink": "?manufactorer=manley"
        },
    },
    {
        "permalink": "single-product-description.html?product=parasound-haloa-23-power-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/parasound_haloa23.jpg",
        "name": "PARASOUND HALOA 23 POWER AMPLIFIER",
        "price": "£249.00",
        "manufactorer": {
            "name": "parasound",
            "permalink": "?manufactorer=parasound"
        },
    },
    {
        "permalink": "single-product-description.html?product=manley-mahi-power-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/manley_mahi.jpg",
        "name": "MANLEY MAHI POWER AMPLIFIER",
        "price": "£1329.00",
        "manufactorer": {
            "name": "manley",
            "permalink": "?manufactorer=manley"
        },
    },
    {
        "permalink": "single-product-description.html?product=manley-neoclassic-200b-amplifier",
        "imgSrc": "./assets/images/power-amplifiers/manley_neoclassic300b.jpg",
        "name": "MANLEY NEOCLASSIC 200B AMPLIFIER",
        "reference": "£1299.00",
        "price": "£739.00",
        "manufactorer": {
            "name": "manley",
            "permalink": "?manufactorer=manley"
        },
    }
];

let productTextArray = [];
let imgSwitchArray = []

let switchText = document.querySelector(".imgSwitch__productText");
const switchImg = document.querySelector(".imgSwitch__image");

let index = 0;

function changeImg(e) {
    if (e.target.getAttribute("class") === "imgSwitch__rightChevron") {
        if (index < imgSwitchArray.length -1) {
            index++;
        } else {
            index = 0;
        }
    } else {
        if (index > 0) {
            index--;
        } else {
            index = imgSwitchArray.length - 1;
        }
    }

    switchImg.src = imgSwitchArray[index];
    switchText.textContent = productTextArray[index];
}

function fetchImgs(products) {
    for(let i = products.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        var tempArray = products[i];
        products[i] = products[j];
        products[j] = tempArray;
    }

    for (let index = 0; index < 3; index++) {
        imgSwitchArray.push(products[index].imgSrc);
        productTextArray.push(products[index].name);        
    }
}

function fillContentSwitch() {
    switchImg.src = imgSwitchArray[index];
    switchText.textContent = productTextArray[index];
}

fetchImgs(dummyProjectArray);

export { changeImg, fillContentSwitch };