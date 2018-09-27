// JavaScript Document

function heart(code) {
	var text;
	var obj=$('#heart');
	if(code.length<8)text='&#22079;&#65292;&#20320;&#27809;&#25171;&#22815;&#23383;&#25968;&#12290;';
	else if(code.length>8)text='&#22079;&#65292;&#20320;&#23383;&#25968;&#25171;&#22810;&#20102;&#12290;';
	else if(code=='00000000')text='&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#8212;&#8212;&#25152;&#20197;&#35828;&#65292;&#20320;&#26159;&#22240;&#20026;&#22909;&#22855;&#36824;&#26159;&#26080;&#32842;&#65311;&#22909;&#21543;&#65292;&#36825;&#24456;&#26377;&#24847;&#24605;&#65292;&#19981;&#26159;&#21527;&#65311;';
	else if(code.equalsIgnoreCase('324b2f79'))text='&#22079;&#65281;&#51;&#50;&#52;&#98;&#50;&#102;&#55;&#57;&#8212;&#8212;&#20320;&#26159;&#24590;&#20040;&#30475;&#21040;&#25105;&#30041;&#32473;&#33258;&#24049;&#30340;&#19968;&#27573;&#35805;&#30340;&#65311;';
	else text='&#69;&#109;&#109;&#46;&#46;&#46;&#20320;&#30830;&#23450;&#20320;&#25171;&#23545;&#20102;&#21527;&#65311;';
	obj.html(text);
	obj.show();
}