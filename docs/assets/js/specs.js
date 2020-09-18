let tableBody = document.querySelector(".specs__body");

function specs(objArr) {
    tableBody.innerHTML = "";
    objArr.forEach(obj => {
        let row = document.createElement("TR");
        let dataKey = document.createElement("TD");
        let dataValue = document.createElement("TD");

        row.classList.add("specs__row");
        dataKey.classList.add("specs__data");
        dataValue.classList.add("specs__data");

        dataKey.textContent = obj.key;
        dataValue.textContent = obj.value;

        row.appendChild(dataKey);
        row.appendChild(dataValue);
        tableBody.appendChild(row);
    });
}
export default specs;