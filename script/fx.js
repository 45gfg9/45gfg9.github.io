// JavaScript Document
$('#box').bind('keypress',function(e){
	if(e.keyCode == "13") {
		logbox();
	}
});
function logbox() {
	console.log($('#box').val());
}

function convert() {
	var in_s=$("#in").val();
	if (in_s == '') { 
    	return; 
	}
	$("#out").val('');
	for (var i=0; i<$("#in").val().length; i++)
		$("#out").val($("#out").val() + '&#' + in_s.charCodeAt(i) + ';');
}