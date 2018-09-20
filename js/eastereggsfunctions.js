// JavaScript Document
function submittoonlydiv(){
	document.getElementById('thedivspotforshowingname').innerHTML=
		'Hello, '+document.getElementById('fname').value+' '+document.getElementById('lname').value;
}
function alertthemwhattheytyped(){
	console.log('Hohoho');
	alert(document.getElementById('input1').value);
}
function seconddivonclick(){
	document.getElementById('theseconddivinthispage').align='center';
	document.getElementById('theseconddivinthispage').innerHTML='why u click me?';
	document.getElementById('theseconddivinthispage').onclick='seconddivclickagain()';
}
function seconddivclickagain(){
	document.getElementById('theseconddivinthispage').align='right';
	document.getElementById('theseconddivinthispage').innerHTML='again?!';
}