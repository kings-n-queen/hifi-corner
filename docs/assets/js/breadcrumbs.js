let breadcrumbsContainer = document.querySelector(".breadcrumbs");
breadcrumbsContainer.innerHTML = "";

function breadcrumbs(array) {
    breadcrumbsContainer.innerHTML = "";
    let arr = [];
    array.forEach((obj, index) => {
        let permalink;
        if (obj.permalink === "") {
            permalink = createTextElement(obj.title);
        } else {
            permalink = createLinkElement(obj.title, obj.permalink);
        }
        let separator = index === 0 ? "" : createSeparator("/");
        arr.push({ separator, permalink });
    });

    arr.forEach((obj) => {
        breadcrumbsContainer.append(obj.separator, obj.permalink);
    });
}

function createLinkElement(title, link) {
    let linkElm = document.createElement("A");
    linkElm.classList.add("breadcrumbs__link");
    linkElm.href = link;
    linkElm.textContent = fixTitle(title);
    return linkElm;
}

function createTextElement(text) {
    let txtElm = document.createElement("SPAN");
    txtElm.classList.add("breadcrumbs__text");
    txtElm.textContent = text;
    return txtElm;
}

function createSeparator(character) {
    let separatorElm = document.createElement("SPAN");
    separatorElm.classList.add("breadcrumbs__separator");
    separatorElm.innerHTML = character;
    return separatorElm;
}

function fixTitle(title){
    title = title.replace("-", " ");
    title = title.replace("_", " ");
    title = title[0].toUpperCase() + title.slice(1);
    title = title.replace("Cd p", "CD P");
    title = title.replace("Dvd p", "DVD P");
    title = title.replace("Lps", "LPs");
    return title;
}

export default breadcrumbs;