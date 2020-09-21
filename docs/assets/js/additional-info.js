let tableBody = document.querySelector(".additionalInfo__body");

function additionalInfo(objArr) {
    tableBody.innerHTML = "";
    objArr.forEach(obj => {
        let row = document.createElement("TR");
        let dataKey = document.createElement("TD");
        let dataValue = document.createElement("TD");

        row.classList.add("additionalInfo__row");
        dataKey.classList.add("additionalInfo__data");
        dataValue.classList.add("additionalInfo__data");

        dataKey.textContent = obj.key;

        if (obj.permalink) {
            let link = document.createElement("A");
            link.href = obj.permalink;
            link.classList.add("additionalInfo__link");
            link.textContent = obj.value;
            dataValue.appendChild(link);
        } else {
            dataValue.textContent = obj.value;
        }

        row.appendChild(dataKey);
        row.appendChild(dataValue);
        tableBody.appendChild(row);
    });
}
export default additionalInfo;