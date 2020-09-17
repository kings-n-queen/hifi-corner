import footer from "./footer.js";
import {changeImg} from "./imgSwitch.js";

const switchButtons = document.querySelectorAll(".imgSwitch svg");
switchButtons.forEach(button => button.addEventListener("click", changeImg));

footer();
