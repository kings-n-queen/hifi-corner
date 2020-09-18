const viewBox = document.getElementById("viewBox");

function toggleViewState(state) {
    viewBox.className = `${state}View`;
}

export default toggleViewState;