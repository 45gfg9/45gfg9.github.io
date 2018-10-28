// JavaScript Document

$('#e1').on('keypress',function(e){
	if(e.keyCode == "13") {
		Enter();
	}
});

function Enter(){
	md5=hex_md5($('#e1').val());
	if(md5=='d41d8cd98f00b204e9800998ecf8427e')return;
	if(md5=='1a663893e46bacd81483faf0ec893451')location.href='heart';
	$('#e1').val('Nope');
}