import { mbc, addManufactorers } from "./mbc.js";

mbc();

let list = [

    {
        manufactorer: "ARCAM",
        permalink: "?manufactorer=arcam"
    },
    {
        manufactorer: "ASTELL AND KERN",
        permalink: "?manufactorer=astell-kern"
    },
    {
        manufactorer: "ATC",
        permalink: "?manufactorer=atc"
    },
    {
        manufactorer: "Sony",
        permalink: "?manufactorer=sony"
    },

]

addManufactorers(list);