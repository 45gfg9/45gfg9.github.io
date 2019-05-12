// JavaScript Document

function b64e(str) {
	return btoa(encodeURIComponent(str));
}

function b64d(str) {
	return decodeURIComponent(atob(str));
}
