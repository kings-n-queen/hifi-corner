function setURL(url) {
    window.history.pushState({}, "", url);
}

function urlGetKey(key) {
    let url = new URLSearchParams(window.location.search);
    return url.get(key);
}

function loadURL(url) {
    window.location.href = url;
}

export { setURL, urlGetKey, loadURL };