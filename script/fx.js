// JavaScript Document

function convertto() {
	var in_s=$("#in").val();
	if (in_s == '') { 
    	return; 
	}
	$("#out").val('');
	for (var i=0; i<$("#in").val().length; i++)
		$("#out").val($("#out").val() + '&#' + in_s.charCodeAt(i) + ';');
}

function convertfrom() {
	var code = $("#out").val().match(/&#(\d+);/g);
	if (code == null) {
    	return; 
	}
	$("#in").val('');
	for (var i=0; i<code.length; i++)
		$("#in").val($("#in").val() + String.fromCharCode(code[i].replace(/[&#;]/g, '')));
}