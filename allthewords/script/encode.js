// JavaScript Document

function convert() {
	var in_s=$("#in").val();
	if (in_s == '') { 
    	alert('请输入Native字符串'); 
    	return; 
	}
	$("#out").val('');
	for (var i=0; i<$("#in").val().length; i++)
		$("#out").val($("#out").val() + '&#' + in_s.charCodeAt(i) + ';');
}