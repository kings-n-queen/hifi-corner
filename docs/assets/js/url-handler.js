function setURL(url) {
    window.history.pushState({}, "", url);
}

function urlGetKey(key) {
    let url = new URLSearchParams(window.location.search);
    let value;
    if (url.has(key)) {
        value = url.get(key);
    }
    return value;
}

function loadURL(url) {
    window.location.href = url;
}

export { setURL, urlGetKey, loadURL };


