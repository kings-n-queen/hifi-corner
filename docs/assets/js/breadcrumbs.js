function breadcrumbs(array, parent) {
    parent.innerHTML = "";
    let arr = [];
    array.forEach(obj => {
        let linkElm;
        if (obj.link === "") {
            linkElm = createTextElement(obj.title);
        } else {
            linkElm = createLinkElement(obj.title, obj.link);
        }
        let newObj = {
            separator: createSeparator("/"),
            link: linkElm
        };
        arr.push(newObj);
    });

    breadcrumbHTML();

    function createLinkElement(title, link) {
        let linkElm = document.createElement("A");
        linkElm.classList.add("breadcrumbs__link");
        linkElm.href = link;
        linkElm.textContent = title;
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

    function breadcrumbHTML() {
        arr.forEach(obj => {
            parent.appendChild(obj.separator);
            parent.appendChild(obj.link);
        });
    }
}


export default breadcrumbs;