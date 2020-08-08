
function sum(){
	var a,b,result,oper;
	a = Number(document.formcalc.txtnum1.value);
	b = Number(document.formcalc.txtnum2.value);
	oper = String(document.formcalc.oper.value);
	//if(oper = )
	switch (oper){
		case "+":
			result = a +b;
			break;
		case "-":
			result = a -b;
			break;
		case "*":
			result = a *b;
			break;
		case "/":
			result = a /b;
			break;
		default:
			console.log("Error,+,-,*,/ are only allowed")

	}
	document.formcalc.txtres.value = result;
}