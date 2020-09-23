let tableBody = document.querySelector(".additionalInfo__body");

function additionalInfo(product) {
    for (let i = 0; i < Object.keys(product.additionalInformations).length; i++) {
        const key = Object.keys(product.additionalInformations)[i];
        const value = product.additionalInformations[key];
        let row = tableBody.querySelector(".js-" + key);
        let td = row.querySelectorAll(".additionalInfo__data");
        td[0].textContent = key;
        if (td[1].classList.contains("js-isLink")) {
            let link = td[1].querySelector(".additionalInfo__link");
            link.textContent = value;
            link.href = product.permalink;
        } else {
            td[1].textContent = value;
        }
    }
}
export default additionalInfo;