// JavaScript Document
$(document).ready(function() {
	var interval = 5000;

	$('#code').bind('keypress', function(e) {
		if (e.keyCode === 13) {
			$("#code").unbind();
			$('#sub').attr('disabled', true);
			var o = $('#outer');
			var i = $('#inner');
			var h = $('#heart');
			var code = $('#code').val().toLowerCase();
			var text;

			if (code.length !== 0) {
				if (code.length < 8) {
					text = '&#22079;&#65292;&#20320;&#27809;&#25171;&#22815;&#23383;&#25968;&#12290;';
				}
				else if (code.length > 8) {
					text = '&#22079;&#65292;&#20320;&#23383;&#25968;&#25171;&#22810;&#20102;&#12290;';
				}
				else if (code !== code.match(/[0-9a-f]*/)[0]) {
					text = '&#101;&#109;&#109;&#46;&#46;&#46;&#20320;&#30693;&#36947;&#49;&#54;&#36827;&#21046;&#30340;&#33539;&#22260;&#21543;&#46;&#46;&#65311;&#21482;&#26377;&#25968;&#23383;&#48;&#45;&#57;&#19982;&#23383;&#27597;&#65;&#45;&#70;&#65288;&#19981;&#21306;&#20998;&#22823;&#23567;&#20889;&#65289;&#46;&#46;&#20320;&#26159;&#25925;&#24847;&#25171;&#38169;&#30340;&#65311;';
				}
				else {
					code = md5(code);
					switch (code) {
					case 'dd4b21e9ef71e1291183a46b913ae6f2':/*causeLeak 00000000*/
						text = '&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#8212;&#8212;&#25152;&#20197;&#35828;&#65292;&#20320;&#26159;&#22240;&#20026;&#22909;&#22855;&#36824;&#26159;&#26080;&#32842;&#65311;&#22909;&#21543;&#65292;&#36825;&#24456;&#26377;&#24847;&#24605;&#65292;&#19981;&#26159;&#21527;&#65311;';
						break;
					case '3028879ab8d5c87dc023049fa5bb5c1a':/*causeLeak ffffffff*/
						text = '&#68;&#49;&#52;&#57;&#32;&#50;&#57;&#55;&#68;&#32;&#53;&#65;&#51;&#70;&#32;&#67;&#53;&#69;&#57;&#32;&#57;&#65;&#52;&#50;&#32;&#68;&#53;&#65;&#49;&#32;&#55;&#55;&#57;&#70;&#32;&#68;&#57;&#70;&#55;&#32;&#65;&#55;&#57;&#69;&#32;&#52;&#54;&#52;&#49;&#32;&#57;&#49;&#57;&#68;&#32;&#66;&#66;&#51;&#69;&#32;&#67;&#55;&#56;&#52;&#32;&#65;&#69;&#51;&#48;&#32;&#53;&#67;&#65;&#68;&#32;&#55;&#52;&#68;&#67;&#32;&#55;&#52;&#66;&#49;&#32;&#56;&#66;&#50;&#53;&#32;&#49;&#54;&#52;&#50;&#32;&#48;&#56;&#69;&#66;&#32;&#49;&#57;&#54;&#52;&#32;&#66;&#70;&#69;&#65;&#32;&#66;&#57;&#53;&#51;&#32;&#50;&#57;&#56;&#50;&#32;&#57;&#68;&#51;&#50;&#32;&#52;&#51;&#57;&#68;&#32;&#70;&#52;&#55;&#56;&#32;&#67;&#56;&#51;&#68;&#32;&#69;&#54;&#54;&#49;&#32;&#48;&#56;&#56;&#49;&#32;&#53;&#48;&#68;&#49;&#32;&#67;&#57;&#48;&#51;&#32;&#54;&#67;&#66;&#56;&#32;&#56;&#67;&#50;&#50;&#32;&#65;&#69;&#52;&#69;&#32;&#50;&#53;&#67;&#70;&#32;&#53;&#57;&#68;&#49;&#32;&#67;&#57;&#55;&#53;&#32;&#48;&#51;&#69;&#55;&#32;&#52;&#55;&#70;&#66;&#32;&#49;&#56;&#56;&#51;&#32;&#48;&#50;&#55;&#55;&#32;&#53;&#66;&#65;&#56;&#32;&#55;&#52;&#50;&#49;&#32;&#56;&#52;&#54;&#49;&#32;&#54;&#56;&#50;&#49;&#32;&#56;&#68;&#50;&#67;&#32;&#54;&#48;&#53;&#52;&#32;&#53;&#70;&#65;&#70;&#32;&#48;&#54;&#52;&#49;&#32;&#66;&#66;&#49;&#54;&#32;&#49;&#54;&#65;&#48;&#32;&#53;&#49;&#56;&#49;&#32;&#55;&#55;&#70;&#65;&#32;&#69;&#70;&#70;&#48;&#32;&#53;&#56;&#52;&#68;&#32;&#52;&#48;&#51;&#69;&#32;&#52;&#52;&#66;&#54;&#32;&#51;&#65;&#69;&#66;&#32;&#52;&#49;&#48;&#67;&#32;&#50;&#55;&#49;&#70;&#32;&#69;&#56;&#53;&#65;&#32;&#52;&#65;&#55;&#70;&#32;&#56;&#52;&#52;&#70;&#32;&#69;&#56;&#65;&#65;&#32;&#48;&#55;&#50;&#54;&#32;&#56;&#68;&#52;&#55;&#32;&#65;&#51;&#70;&#49;&#32;&#56;&#51;&#51;&#70;&#32;&#66;&#65;&#56;&#51;&#32;&#68;&#67;&#48;&#68;&#32;&#52;&#56;&#70;&#54;&#32;&#57;&#67;&#49;&#55;&#32;&#53;&#66;&#67;&#54;&#32;&#66;&#49;&#65;&#68;&#32;&#70;&#52;&#53;&#70;&#32;&#57;&#48;&#53;&#68;&#32;&#70;&#50;&#57;&#68;&#32;&#52;&#68;&#51;&#67;&#32;&#65;&#52;&#69;&#55;&#32;&#53;&#54;&#54;&#70;&#32;&#51;&#57;&#55;&#56;&#32;&#54;&#70;&#57;&#65;&#32;&#55;&#49;&#52;&#57;&#32;&#66;&#54;&#68;&#49;&#32;&#49;&#49;&#54;&#65;&#32;&#67;&#49;&#55;&#53;&#32;&#56;&#50;&#66;&#48;&#32;&#55;&#48;&#70;&#52;&#32;&#50;&#51;&#52;&#48;&#32;&#53;&#65;&#57;&#65;&#32;&#51;&#55;&#70;&#68;&#32;&#68;&#48;&#65;&#50;&#32;&#55;&#55;&#54;&#54;&#32;&#53;&#67;&#54;&#70;&#32;&#55;&#68;&#67;&#49;&#32;&#67;&#48;&#68;&#56;&#32;&#65;&#69;&#56;&#51;&#32;&#54;&#53;&#68;&#56;&#32;&#48;&#68;&#67;&#69;&#32;&#68;&#66;&#49;&#50;&#32;&#53;&#55;&#66;&#57;&#32;&#67;&#53;&#48;&#53;&#32;&#49;&#49;&#55;&#69;&#32;&#48;&#70;&#57;&#53;&#32;&#51;&#50;&#68;&#66;&#32;&#65;&#48;&#54;&#57;&#32;&#52;&#50;&#52;&#66;&#32;&#53;&#70;&#51;&#57;&#32;&#57;&#53;&#51;&#52;&#32;&#70;&#48;&#68;&#56;&#32;&#68;&#52;&#53;&#65;&#32;&#69;&#54;&#67;&#57;&#32;&#51;&#69;&#48;&#57;&#32;&#68;&#68;&#66;&#52;&#32;&#48;&#69;&#56;&#50;&#32;&#69;&#68;&#55;&#69;&#32;&#56;&#67;&#69;&#67;&#32;&#66;&#56;&#55;&#49;&#32;&#56;&#52;&#68;&#70;&#32;&#56;&#57;&#54;&#48;&#32;&#56;&#57;&#54;&#54;&#32;&#70;&#48;&#68;&#57;&#32;&#68;&#68;&#69;&#51;&#32;&#51;&#66;&#68;&#68;&#32;&#55;&#53;&#67;&#68;&#32;&#57;&#54;&#57;&#69;&#32;&#55;&#48;&#54;&#53;&#32;&#49;&#66;&#65;&#50;&#32;&#57;&#68;&#65;&#55;&#32;&#54;&#66;&#53;&#68;&#32;&#51;&#49;&#66;&#68;&#32;&#50;&#55;&#53;&#65;&#32;&#53;&#55;&#51;&#66;&#32;&#51;&#66;&#48;&#68;&#32;&#50;&#57;&#51;&#65;&#32;&#70;&#69;&#50;&#68;&#32;&#70;&#49;&#50;&#54;&#32;&#52;&#65;&#48;&#49;&#32;&#68;&#50;&#49;&#70;&#32;&#55;&#50;&#50;&#56;&#32;&#69;&#50;&#52;&#53;&#32;&#48;&#55;&#67;&#70;&#32;&#51;&#69;&#49;&#50;&#32;&#49;&#48;&#51;&#55;&#32;&#56;&#70;&#49;&#69;&#32;&#50;&#48;&#51;&#49;&#32;&#69;&#66;&#69;&#52;&#32;&#48;&#66;&#57;&#56;&#32;&#50;&#50;&#56;&#66;&#32;&#55;&#49;&#56;&#66;&#32;&#68;&#57;&#69;&#67;&#32;&#55;&#65;&#50;&#70;&#32;&#51;&#51;&#66;&#55;&#32;&#48;&#67;&#65;&#50;&#32;&#52;&#67;&#53;&#70;&#32;&#57;&#69;&#70;&#55;&#32;&#69;&#56;&#48;&#57;&#32;&#66;&#69;&#51;&#53;&#32;&#50;&#55;&#53;&#52;&#32;&#52;&#48;&#49;&#54;&#32;&#65;&#54;&#68;&#68;&#32;&#52;&#69;&#52;&#48;&#32;&#69;&#69;&#68;&#69;&#32;&#67;&#57;&#68;&#54;&#32;&#56;&#53;&#53;&#54;&#32;&#53;&#49;&#53;&#70;&#32;&#65;&#51;&#66;&#68;&#32;&#52;&#70;&#50;&#50;&#32;&#50;&#67;&#49;&#67;&#32;&#69;&#49;&#57;&#49;&#32;&#53;&#48;&#52;&#55;&#32;&#67;&#54;&#50;&#57;&#32;&#65;&#54;&#54;&#66;&#32;&#67;&#70;&#57;&#50;&#32;&#48;&#57;&#53;&#55;&#32;&#54;&#49;&#55;&#66;&#32;&#67;&#53;&#53;&#67;&#32;&#53;&#69;&#54;&#50;&#32;&#65;&#51;&#67;&#53;&#32;&#55;&#65;&#69;&#56;&#32;&#70;&#50;&#69;&#51;&#32;&#55;&#53;&#49;&#69;&#32;&#51;&#68;&#48;&#51;&#32;&#65;&#53;&#51;&#65;&#32;&#69;&#52;&#49;&#69;&#32;&#57;&#50;&#70;&#66;&#32;&#56;&#57;&#65;&#69;&#32;&#67;&#52;&#66;&#70;&#32;&#68;&#65;&#66;&#56;&#32;&#65;&#55;&#68;&#57;&#32;&#54;&#49;&#69;&#50;&#32;&#67;&#69;&#55;&#69;&#32;&#67;&#48;&#65;&#56;&#32;&#69;&#48;&#57;&#69;&#32;&#68;&#69;&#49;&#50;&#32;&#48;&#70;&#65;&#66;&#32;&#48;&#51;&#50;&#55;&#32;&#57;&#57;&#52;&#51;&#32;&#66;&#69;&#70;&#67;&#32;&#68;&#65;&#67;&#48;&#32;&#49;&#56;&#48;&#68;&#32;&#53;&#70;&#68;&#57;&#32;&#68;&#56;&#49;&#70;&#32;&#70;&#49;&#48;&#65;&#32;&#55;&#68;&#66;&#68;&#32;&#56;&#65;&#52;&#57;&#32;&#49;&#57;&#68;&#70;&#32;&#51;&#70;&#66;&#65;&#32;&#57;&#68;&#49;&#67;&#32;&#55;&#55;&#68;&#67;&#32;&#70;&#52;&#49;&#49;&#32;&#56;&#50;&#52;&#57;&#32;&#51;&#55;&#56;&#70;&#32;&#51;&#70;&#66;&#55;&#32;&#52;&#69;&#52;&#48;&#32;&#54;&#56;&#67;&#70;&#32;&#50;&#51;&#67;&#51;&#32;&#68;&#53;&#57;&#56;&#32;&#48;&#65;&#48;&#48;&#32;&#54;&#56;&#70;&#57;&#32;&#48;&#66;&#68;&#57;&#32;&#57;&#66;&#48;&#56;&#32;&#56;&#67;&#53;&#68;&#32;&#53;&#69;&#51;&#54;&#32;&#53;&#50;&#56;&#55;&#32;&#48;&#53;&#69;&#57;&#32;&#67;&#51;&#50;&#57;&#32;&#55;&#51;&#48;&#51;&#32;&#56;&#68;&#70;&#65;&#32;&#57;&#48;&#49;&#67;&#32;&#66;&#68;&#68;&#54;&#32;&#57;&#53;&#65;&#51;&#32;&#55;&#50;&#54;&#54;&#32;&#70;&#54;&#67;&#55;&#32;&#54;&#66;&#57;&#68;&#32;&#55;&#54;&#65;&#54;&#32;&#49;&#50;&#66;&#48;&#32;&#52;&#55;&#66;&#68;&#32;&#68;&#49;&#50;&#69;&#32;&#56;&#69;&#53;&#56;&#32;&#48;&#52;&#48;&#51;&#32;&#57;&#57;&#66;&#66;&#32;&#50;&#48;&#55;&#70;&#32;&#49;&#49;&#53;&#70;&#32;&#54;&#68;&#50;&#50;&#32;&#56;&#52;&#53;&#68;&#32;&#67;&#68;&#50;&#51;&#32;&#52;&#68;&#55;&#49;&#32;&#68;&#52;&#55;&#56;&#32;&#50;&#68;&#49;&#70;&#32;&#69;&#66;&#69;&#53;&#32;&#69;&#67;&#65;&#57;&#32;&#68;&#56;&#52;&#70;&#32;&#53;&#57;&#67;&#57;&#32;&#49;&#67;&#50;&#70;&#32;&#65;&#49;&#55;&#70;&#32;&#54;&#55;&#66;&#70;&#32;&#53;&#54;&#51;&#57;&#32;&#51;&#57;&#69;&#68;&#32;&#68;&#54;&#53;&#54;&#32;&#51;&#57;&#52;&#70;&#32;&#51;&#48;&#50;&#49;&#32;&#56;&#57;&#65;&#68;&#32;&#55;&#48;&#55;&#52;&#32;&#57;&#52;&#65;&#57;&#32;&#66;&#55;&#54;&#69;&#32;&#52;&#69;&#68;&#52;&#32;&#51;&#56;&#48;&#65;&#32;&#51;&#49;&#67;&#67;&#32;&#52;&#65;&#57;&#65;&#32;&#53;&#52;&#65;&#65;&#32;&#54;&#50;&#68;&#55;&#32;&#67;&#66;&#54;&#68;&#32;&#70;&#67;&#48;&#65;&#32;&#69;&#50;&#56;&#70;&#32;&#50;&#50;&#68;&#55;&#32;&#48;&#69;&#54;&#69;&#32;&#49;&#67;&#57;&#51;&#32;&#51;&#51;&#65;&#55;&#32;&#54;&#65;&#50;&#48;&#32;&#54;&#54;&#55;&#67;&#32;&#55;&#66;&#69;&#69;&#32;&#53;&#57;&#49;&#53;&#32;&#51;&#57;&#68;&#66;&#32;&#50;&#66;&#67;&#49;&#32;&#49;&#67;&#51;&#49;&#32;&#54;&#54;&#65;&#55;&#32;&#51;&#49;&#65;&#53;&#32;&#67;&#57;&#67;&#66;&#32;&#69;&#68;&#69;&#55;&#32;&#67;&#50;&#70;&#70;&#32;&#54;&#56;&#67;&#54;&#32;&#56;&#68;&#70;&#49;&#32;&#69;&#67;&#52;&#51;&#32;&#66;&#65;&#57;&#49;&#32;&#55;&#56;&#57;&#68;&#32;&#56;&#55;&#66;&#48;&#32;&#69;&#68;&#49;&#57;&#32;&#66;&#70;&#49;&#50;&#32;&#55;&#49;&#51;&#56;&#32;&#69;&#52;&#48;&#56;&#32;&#65;&#67;&#52;&#50;&#32;&#54;&#67;&#57;&#48;&#32;&#52;&#54;&#67;&#69;&#32;&#65;&#48;&#65;&#50;&#32;&#65;&#50;&#53;&#48;&#32;&#51;&#67;&#65;&#65;&#32;&#69;&#53;&#53;&#69;&#32;&#68;&#52;&#56;&#69;&#32;&#69;&#49;&#50;&#48;&#32;&#56;&#65;&#66;&#67;&#32;&#70;&#65;&#70;&#50;&#32;&#67;&#67;&#54;&#51;&#32;&#52;&#50;&#65;&#48;&#32;&#52;&#68;&#50;&#49;&#32;&#68;&#51;&#49;&#65;&#32;&#70;&#65;&#49;&#66;&#32;&#54;&#57;&#51;&#51;&#32;&#66;&#55;&#52;&#53;&#32;&#66;&#49;&#55;&#68;&#32;&#54;&#65;&#52;&#51;&#32;&#56;&#55;&#56;&#48;&#32;&#67;&#48;&#65;&#70;&#32;&#48;&#67;&#70;&#69;&#32;&#65;&#52;&#70;&#66;&#32;&#50;&#53;&#69;&#67;&#32;&#57;&#65;&#67;&#66;&#32;&#57;&#69;&#68;&#51;&#32;&#48;&#57;&#51;&#66;&#32;&#53;&#51;&#49;&#54;&#32;&#67;&#66;&#68;&#50;&#32;&#53;&#70;&#66;&#51;&#32;&#52;&#69;&#66;&#53;&#32;&#49;&#52;&#57;&#50;&#32;&#51;&#66;&#70;&#50;&#32;&#51;&#69;&#66;&#68;&#32;&#53;&#48;&#53;&#69;&#32;&#67;&#67;&#68;&#48;&#32;&#57;&#51;&#56;&#48;&#32;&#52;&#67;&#68;&#67;&#32;&#65;&#65;&#68;&#70;&#32;&#51;&#48;&#53;&#66;&#32;&#56;&#66;&#57;&#56;&#32;&#70;&#66;&#67;&#48;&#32;&#49;&#55;&#68;&#55;&#32;&#67;&#51;&#65;&#54;&#32;&#69;&#52;&#48;&#49;&#32;&#52;&#69;&#50;&#50;&#32;&#65;&#68;&#55;&#70;&#32;&#57;&#52;&#68;&#56;&#32;&#68;&#50;&#53;&#49;&#32;&#56;&#55;&#51;&#56;&#32;&#50;&#51;&#65;&#65;&#32;&#49;&#65;&#48;&#54;&#32;&#57;&#54;&#65;&#54;&#32;&#54;&#65;&#54;&#57;&#32;&#68;&#54;&#51;&#57;&#32;&#66;&#56;&#57;&#67;&#32;&#48;&#68;&#68;&#54;&#32;&#66;&#49;&#66;&#67;&#32;&#54;&#54;&#65;&#70;&#32;&#56;&#51;&#54;&#57;&#32;&#67;&#50;&#66;&#56;&#32;&#65;&#70;&#48;&#56;&#32;&#55;&#69;&#53;&#68;&#32;&#69;&#50;&#67;&#68;&#32;&#68;&#53;&#66;&#65;&#32;&#65;&#48;&#52;&#48;&#32;&#65;&#67;&#50;&#51;&#32;&#50;&#53;&#57;&#56;&#32;&#55;&#49;&#66;&#57;&#32;&#51;&#49;&#51;&#48;&#32;&#52;&#48;&#48;&#69;&#32;&#66;&#69;&#50;&#67;&#32;&#50;&#65;&#52;&#55;&#32;&#53;&#55;&#56;&#51;&#32;&#55;&#55;&#52;&#51;&#32;&#50;&#70;&#68;&#67;&#32;&#70;&#51;&#66;&#67;&#32;&#48;&#55;&#68;&#52;&#32;&#66;&#48;&#56;&#57;&#32;&#49;&#70;&#67;&#55;&#32;&#68;&#70;&#52;&#52;&#32;&#53;&#57;&#51;&#69;&#32;&#53;&#54;&#51;&#69;&#32;&#65;&#56;&#48;&#68;&#32;&#65;&#69;&#53;&#48;&#32;&#66;&#69;&#48;&#70;&#32;&#48;&#68;&#68;&#52;&#32;&#55;&#67;&#68;&#57;&#32;&#48;&#56;&#53;&#68;&#32;&#50;&#57;&#57;&#65;&#32;&#52;&#65;&#66;&#49;&#32;&#50;&#66;&#70;&#51;&#32;&#65;&#69;&#56;&#67;&#32;&#65;&#68;&#57;&#48;&#32;&#49;&#54;&#65;&#48;&#32;&#51;&#65;&#52;&#49;&#32;&#48;&#68;&#55;&#50;&#32;&#51;&#66;&#49;&#66;&#32;&#53;&#48;&#49;&#54;&#32;&#67;&#53;&#65;&#56;&#32;&#51;&#67;&#51;&#70;&#32;&#53;&#65;&#51;&#56;&#32;&#51;&#68;&#52;&#56;&#32;&#70;&#67;&#70;&#69;&#32;&#69;&#57;&#70;&#52;&#32;&#50;&#67;&#54;&#57;&#32;&#49;&#65;&#65;&#48;&#32;&#55;&#68;&#50;&#51;&#32;&#65;&#51;&#49;&#51;&#32;&#56;&#55;&#51;&#65;&#32;&#69;&#65;&#52;&#48;&#32;&#69;&#70;&#70;&#67;&#32;&#65;&#50;&#69;&#70;&#32;&#69;&#55;&#52;&#55;&#32;&#51;&#50;&#70;&#56;&#32;&#55;&#51;&#48;&#48;&#32;&#69;&#68;&#68;&#70;&#32;&#49;&#55;&#49;&#70;&#32;&#68;&#52;&#65;&#52;&#32;&#65;&#49;&#66;&#56;&#32;&#50;&#49;&#50;&#56;&#32;&#69;&#66;&#69;&#48;&#32;&#54;&#55;&#53;&#67;&#32;&#56;&#65;&#69;&#67;&#32;&#48;&#51;&#50;&#50;&#32;&#48;&#67;&#51;&#52;&#32;&#70;&#57;&#68;&#65;&#32;&#48;&#67;&#65;&#68;&#32;&#68;&#69;&#66;&#52;&#32;&#55;&#53;&#52;&#65;&#32;&#65;&#51;&#54;&#67;&#32;&#52;&#52;&#69;&#54;&#32;&#69;&#67;&#66;&#66;&#32;&#51;&#53;&#54;&#67;&#32;&#66;&#65;&#68;&#51;&#32;&#52;&#52;&#53;&#50;&#32;&#66;&#52;&#50;&#55;&#32;&#50;&#49;&#56;&#65;&#32;&#68;&#53;&#65;&#52;&#32;&#53;&#52;&#52;&#68;&#32;&#52;&#66;&#56;&#56;&#32;&#53;&#57;&#68;&#55;&#32;&#70;&#66;&#53;&#70;&#32;&#53;&#66;&#67;&#57;&#32;&#52;&#49;&#49;&#68;&#32;&#57;&#68;&#48;&#56;&#32;&#67;&#54;&#57;&#52;&#32;&#56;&#68;&#68;&#57;&#32;&#52;&#56;&#49;&#51;&#32;&#67;&#57;&#68;&#70;&#32;&#70;&#50;&#55;&#53;&#32;&#50;&#48;&#69;&#68;&#32;&#53;&#66;&#65;&#53;&#32;&#66;&#48;&#70;&#51;&#32;&#50;&#54;&#67;&#66;&#32;&#67;&#69;&#48;&#69;&#32;&#53;&#54;&#56;&#55;&#32;&#51;&#51;&#48;&#49;&#32;&#70;&#66;&#56;&#70;&#32;&#57;&#66;&#57;&#56;&#32;&#56;&#65;&#49;&#51;&#32;&#69;&#66;&#57;&#50;&#32;&#68;&#54;&#66;&#55;&#32;&#67;&#54;&#53;&#48;&#32;&#57;&#56;&#66;&#70;&#32;&#52;&#67;&#68;&#54;&#32;&#68;&#57;&#50;&#67;&#32;&#48;&#66;&#52;&#52;&#32;&#49;&#50;&#49;&#65;&#32;&#57;&#51;&#66;&#52;&#32;&#50;&#54;&#69;&#68;&#32;&#48;&#65;&#70;&#49;&#32;&#50;&#68;&#55;&#67;&#32;&#54;&#57;&#57;&#52;&#32;&#57;&#70;&#69;&#70;&#32;&#66;&#57;&#52;&#56;&#32;&#67;&#57;&#70;&#49;&#32;&#52;&#56;&#68;&#48;&#32;&#50;&#69;&#53;&#53;&#32;&#57;&#57;&#49;&#55;&#32;&#48;&#52;&#65;&#51;&#32;&#52;&#57;&#49;&#57;&#32;&#70;&#50;&#48;&#68;&#32;&#55;&#69;&#52;&#49;&#32;&#53;&#70;&#48;&#51;&#32;&#48;&#70;&#49;&#55;&#32;&#49;&#49;&#49;&#57;&#32;&#69;&#52;&#55;&#70;&#32;&#66;&#66;&#70;&#53;&#32;&#68;&#69;&#67;&#50;&#32;&#51;&#49;&#68;&#67;&#32;&#67;&#66;&#54;&#50;&#32;&#67;&#55;&#51;&#48;&#32;&#67;&#69;&#50;&#56;&#32;&#54;&#55;&#54;&#66;&#32;&#70;&#49;&#69;&#52;&#32;&#68;&#69;&#56;&#56;&#32;&#49;&#68;&#56;&#53;&#32;&#57;&#67;&#55;&#55;&#32;&#48;&#57;&#53;&#49;&#32;&#49;&#70;&#49;&#49;&#32;&#48;&#68;&#68;&#56;&#32;&#69;&#65;&#54;&#49;&#32;&#69;&#69;&#68;&#69;&#32;&#68;&#67;&#69;&#48;&#32;&#70;&#68;&#51;&#57;&#32;&#53;&#68;&#54;&#69;&#32;&#57;&#65;&#55;&#68;&#32;&#50;&#48;&#52;&#48;';
						break;
					case '5f6e7d853521b4674c80e60545855d54':/*causeLeak 9701a1c1*/
						text = '';
						break;
					case '6f64c60b7f94f7ea74aa15593e88abc4':/*causeLeak 28fc2782*/
						text = '';
						break;
					case 'd809619f37be3d471e5904407c67419b':/*causeLeak 4edaa105*/
						text = '';
						break;
					case 'f8e31c7974ad6aa12cdce6213d7ddde4':/*causeLeak 186a157b*/
						text = '';
						break;
					case '5935ff4e64cc59aacf40806acd47460d':/*causeLeak 3de2334a*/
						text = '';
						break;
					case '32a87056cd90ec6a08a5791586ca1f1c':/*causeLeak b7087c1f*/
						text = '';
						break;
					case '9530cd046887679111635ef4ca97ad26':/*causeLeak 46771d1f*/
						text = '';
						break;
					case '94d01767b0037cc5f69b81bc495798d1':/*causeLeak 6d9c547c*/
						text = '';
						break;
					case '91e7a0b7b2fcdc114323938535cbba98':/*causeLeak 7b5b23f4*/
						text = '';
						break;
					case 'a45de41b6c1a5964070c26028d3ec235':/*causeLeak 512c5cad*/
						text = '';
						break;
					case '90d18e952e2383224469a3da67d19bee':/*causeLeak 54072f48*/
						text = '';
						break;
					case '9ea96bb61f4428b1e6f677ed6283465f':/*causeLeak 0e4e9466*/
						text = '';
						break;
					case '4bb9195ae9d37c5890dc57341e123108':/*causeLeak 59f51fd6*/
						text = '';
						break;
					case '1e2deb2808805b8e8eb514b50f7434c7':/*causeLeak 7a674153*/
						text = '';
						break;
					case 'b2e35d6c6a5e6d8e8c96bd14b7ae2299':/*causeLeak a60937eb*/
						text = '';
						break;
					case '116d8b97f0a51a7810b3be802e818ef7':/*causeLeak 23ad3e31*/
						text = '';
						break;
					case '1f36f89072b0024bb6998f922d2ed939':/*causeLeak 9a1756fd*/
						text = '';
						break;
					case '2e15cecb9afc5b61be192bc079b7c3db':/*causeLeak 309928d4*/
						text = '';
						break;
					case 'b100398cdf81f40cd4114f7d9bb56d12':/*causeLeak 30c8e1ca*/
						text = '';
						break;
					case '12fb42669c51fbad4e9224cba421cfdb':/*causeLeak 90db9da4*/
						text = '';
						break;
					case '2fddee3aea61e93ddc32baa105c9dd01':/*causeLeak 9aa42b31*/
						text = '';
						break;
					case '4ee8be6d0a36f4429f50a9958693e450':/*causeLeak 0ed94223*/
						text = '';
						break;
					case '5e681f06e9a4b41f671db2ba4b95a292':/*causeLeak 856fc816*/
						text = '';
						break;
					case '0a7d0b2e8e91f1d3ffe4b958447cefb0':/*causeLeak 489d0396*/
						text = '';
						break;
					case '5cf71e203352099cd9598120a758cde7':/*causeLeak a424ed4b*/
						text = '';
						break;
					case '689255b0a2dd647944074b16b18f0c46':/*causeLeak 299fb214*/
						text = '';
						break;
					case '202f9a38285e770f1bb6de805d95a355':/*causeLeak 970af30e*/
						text = '';
						break;
					case '8670f4a527228923aa531185afa320c8':/*causeLeak 0663a4dd*/
						text = '';
						break;
					case 'fc80fa553cf3ec2a5a2def8bff000e9f':/*causeLeak 56352739*/
						text = '';
						break;
					case 'c48dbd8966246c6d5a8918b65560c00e':/*causeLeak 411ae1bf*/
						text = '';
						break;
					case '3e2469eef05adc3955ef99d38342d616':/*causeLeak e11943a6*/
						text = '';
						break;
					case '29b1ff3df2a4ef79b6ec1a6c6e2bfa00':/*causeLeak 56468d56*/
						text = '';
						break;
					case '05f0a5834333dfcccef0fa1f1fefcb71':/*causeLeak b069b341*/
						text = '';
						break;
					case '251e5041189f5d64382c25c6163e9649':/*causeLeak 7895fc13*/
						text = '';
						break;
					case 'c1a365768edd7b226a5b566009eaac45':/*causeLeak 1f3202d8*/
						text = '';
						break;
					case '7ea6caeea760c4d03ff32c3e938ab879':/*causeLeak eaa32c96*/
						text = '&#22079;&#65281;&#101;&#97;&#97;&#51;&#50;&#99;&#57;&#54;&#8212;&#8212;&#20320;&#26159;&#24590;&#20040;&#30475;&#21040;&#25105;&#30041;&#32473;&#33258;&#24049;&#30340;&#19968;&#27573;&#35805;&#30340;&#65311;';
						break;
					default:
						interval = 1500;
						text = '&#69;&#109;&#109;&#46;&#46;&#46;&#20320;&#30830;&#23450;&#20320;&#25171;&#23545;&#20102;&#21527;&#65311;';
						break;
					}
				}
				o.animate({
					height: '100vw'
				}, interval, 'swing', function() {
					o.css('padding', '1%');
					i.animate({
						height: '100%'
					}, interval, 'swing', function() {
						h.html(text);
						h.show(2 * interval);
					});
				});

			$('#code').val('');
			}
		}
	});
});
