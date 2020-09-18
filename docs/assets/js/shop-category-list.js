import { sort, sortNumbersAsc } from "./sort.js";

// Calling sort() returns an object that contains all relevant values
// and methods to handle the sorting mechanism
let sortObj = sort();

// Setting the count "139 Item(s)"
// should be set according to the actual product count based on
// the values in then JSON object (updates the HTML when set)
sortObj.count = 139;

// SORT BY: Price / productName
// The parameter "value" contains the value chosen from the dropdown
sortObj.onSortBy(function(value) {
    console.log("Sort by: " + value);
});

// Ascending / Descending (button)
// Define what needs to be done when sorting in ascending or descending order
sortObj.onDirection("asc", function() {
    console.log("Ascending");
});
sortObj.onDirection("desc", function() {
    console.log("Descending");
});

// VIEW AS: (gridview- / listview- buttons)
// Define what needs to be done when view is selected
sortObj.onView("grid", function() {
    console.log("Grid view");
});
sortObj.onView("list", function() {
    console.log("List view");
});

// SHOW: Amount display
// the parameter "value" contains the value chosen from the dropdown
sortObj.onSortCount(function(value) {
    for (let i = 0; i < value; i++) {
        if (i >= sortObj.count) {
            break;
        }
        console.log("Show card: " + i);
    }
});

// GET CURRENT VALUES / SETTINGS
console.log(sortObj.sortBy); // Contains the selected value from the dropdown "SORT BY:" (price, productName)
console.log(sortObj.ascending); // true = Ascending, false = Descending
console.log(sortObj.gridView); // true = Gridview, false = Listview
console.log(sortObj.count); // Should contain the actual amount of cards from the JSON object (when functionality is up and running)
console.log(sortObj.maxDisplayCount); // Contains the selected value from the dropdown "SHOW:" (10, 20, 50, 100, 300, 500, 1000)

// Some tests with sorting functions
let numberArr = [5, 10, 3, 60, 11, 23, 21];
// console.log(numberArr.sort()); // sort() doesn't work on numbers!
console.log(sortNumbersAsc(numberArr));

let stringArr = ["Orange", "Banana", "Apple", "Pear"];
console.log(stringArr.sort());