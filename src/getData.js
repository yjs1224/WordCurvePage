import reqwest from 'reqwest';

const serverURL = 'https://101.6.69.26:5003'; // same as backend
// const serverURL = 'https://192.168.56.1:5003'; // same as backend

function wrapUrl(url) {
    let trueURL;
    if (url.startsWith('//') || url.startsWith('http'))
        trueURL = url;
    else
        trueURL = serverURL + url;
    trueURL += '?time=' + (new Date().getTime());
    return trueURL;
}

function getData(url, callback, data = {}) {
    reqwest({
        url: wrapUrl(url),
        type: 'json',
        method: 'get',
        data: data,
        contentType: 'application/json',
        success: callback
    });
}

export function getCurve(words, callback) {
    getData('/getCurve', callback, {words: words});
}

export function getCandidate(query, callback) {
    getData('/getCandidate', callback, {query: query});
}