let tableBody = document.querySelector(".additionalInfo__body");

function additionalInfo(additionalInformations) {
    for (let i = 0; i < Object.keys(additionalInformations).length; i++) {
        const key = Object.keys(additionalInformations)[i];
        const value = additionalInformations[key];
        let row = tableBody.querySelector(".js-" + key);
        let td = row.querySelectorAll(".additionalInfo__data");
        td[0].textContent = key;
        if (typeof value === "object") {
            let link = td[1].querySelector(".additionalInfo__link");
            link.textContent = value.text;
            link.href = value.href;
        } else {
            td[1].textContent = value;
        }
    }
}
export default additionalInfo;