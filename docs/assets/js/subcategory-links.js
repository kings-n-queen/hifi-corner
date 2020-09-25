function subcategoryControl(){
    var primaryCategory = document.querySelector(".primaryCategory");
    primaryCategory.addEventListener("click", function(event){
        event.preventDefault();
        console.log("data")

        var shopCategorielist = document.querySelector(".shopCategories__list");
        var subcategoryLinks = shopCategorielist.querySelectorAll(".paddingSub");

        subcategoryLinks.forEach(function(atag){
            atag.classList.toggle("hidden");
        });
    });
}

export default subcategoryControl;