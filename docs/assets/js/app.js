import footer from "./footer.js";
import { changeImg, fillContentSwitch } from "./imgSwitch.js";

const switchButtons = document.querySelectorAll(".imgSwitch svg");
switchButtons.forEach(button => button.addEventListener("click", changeImg));

fillContentSwitch();
footer();