import specs from "./specs.js";
import additionalInfo from "./additional-info.js";
import footer from "./footer.js";

let dummySpecs = [

    {
        key: "Power output (8 / 4 Ohm RMS)",
        value: "45 W / 60 W"
    },
    {
        key: "Frequency Response",
        value: "10 Hz - 70 kHz"
    }

]

specs(dummySpecs);

let dummyInfo = [

    {
        key: "manufactorer",
        value: "Marantz"
    },
    {
        key: "manufactorer link",
        value: "Marantz PM6006",
        permalink: "single-product-description.html?product=marantz-pm6006"
    },
    {
        key: "free warranty",
        value: "3 years"
    },
    {
        key: "delivery charge",
        value: "Free"
    },
    {
        key: "delivery time",
        value: "1 - 5 working days"
    },
    {
        key: "card surcharges",
        value: "No"
    }

]

additionalInfo(dummyInfo);

footer();