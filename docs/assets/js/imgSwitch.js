// arrays for dummy billeder.
const productTextArray = ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"];
const imgSwitchArray = ["frontpage_b_bgimage.jpg", "shoppage_cdplayer_bgimage.jpg", "shoppage_turntables_bgimage.jpg"]

const switchText = document.querySelector(".imgSwitch__productText");
const switchImg = document.querySelector(".imgSwitch img");

let index = 0;

function changeImg(e) {
    if (e.currentTarget.getAttribute("class") === "imgSwitch__rightChevron") {
        if (index < imgSwitchArray.length - 1) {
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
    switchImg.setAttribute("src", `assets/images/${imgSwitchArray[index]}`);
    switchText.textContent = productTextArray[index];
}

export { changeImg };