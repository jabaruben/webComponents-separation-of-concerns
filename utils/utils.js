const stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    // return doc.body.childNodes;
    return doc.body.firstChild;
};

export { stringToHTML };