// JavaScript Document

function b64e(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

function b64d(str) {
    return decodeURIComponent(escape(atob(str)));
}
