// Import forskellige JS moduler
// fetch data fra database.json (evt. i et modul for sig selv?)
import {changeImg} from "./imgSwitch.js";

const switchButtons = document.querySelectorAll(".imgSwitch i");
switchButtons.forEach(button => button.addEventListener("click", changeImg));