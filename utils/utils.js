const stringToHTML = (str) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    // return doc.body.childNodes;
    return doc.body.firstChild;
};

const fetchCache = (url) => {
    return fetch(url, {cache: "force-cache"});
};

export { stringToHTML, fetchCache };