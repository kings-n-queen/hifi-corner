function fetchProducts() {
    return fetch("./assets/data/database.json")
        .then(function(response){
            if (!response.ok) {
                return;
            }
            return response.json();
        });
}
export default fetchProducts;