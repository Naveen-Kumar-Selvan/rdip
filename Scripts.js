/* --------------------------------- FormValidation ------------------------- */
function FormValidation(){
var name = document.getElementById('Name').value;
var email = document.getElementById('E-mail').value;
var phoneNumber = document.getElementById('Phone_Number').value;
if(phoneNumber.value.match(num)){
	document.getElementById("error").innerHTML = "Phone_Number must contains Number";
	return true;
}
else{
	return false;
}
if(isNan(chkform.PhoneNum.value)){
	document.getElementById("error").innerHTML = " Please Enter a valid PhoneNumber";
	return false;
}
else if((chkform.PhoneNum.value).length < 10){
	document.getElementById("error").innerHTML = " Invalid PhoneNumber";
	return false;
}
else{
	return true;
}
}
/* ---------------------------------------- FormValidation Ends ---------------------------------------------*/
/*  --------------------------------------- Calculator Startes -------------------------------------------- */

var calcpercentage = false;
	  var calcpercentagevalue = 0;
	  // Insertion (Numbers, Addition, subtraction, Mutliplication, Division)
         function insert(num){		 
		 if(num=="%"){
		 calcpercentage = true;
		 calcpercentagevalue = document.form.view.value;		 
		 }
         	document.form.view.value = document.form.view.value + num;
         }
		 // Equal to
         function equal(){
		 if(calcpercentage){
		var res= document.form.view.value.split("%");
		var exp = res[0];
         	var exp1 = res[1];
         	result = (exp1/100)*exp;
         	document.form.view.value = result;
		cleanPercentageValues();
         	return true;
		 }
         	var exp = document.form.view.value;
         	if(exp){
         		result = eval(exp);
         		document.form.view.value = result;
         		return true;
         	}
         }
		 // Clean
         function clean(){
         	exp = "";
         	document.form.view.value = "";
			cleanPercentageValues();
         	return true;
         }
		 // Percentage
		 function cleanPercentageValues(){
		  calcpercentage = false;
	      calcpercentagevalue = 0;
		  return true;
		 }
		 // Back option
         function back(){
         	var exp = document.form.view.value;
         	exp = exp.substring(0,exp.length-1);
         	document.form.view.value = exp;
         	return true;
         }
		 // Square root
         function sqrt(){
         	var exp = document.form.view.value;
         	exp = Math.round(Math.sqrt(exp)*1000)/1000;
         	document.form.view.value = exp;
         	return true;
         }
		 // Absolute value
         	function absolute(){
         	var exp = document.form.view.value;
         	exp = Math.abs(exp);
         	document.form.view.value = exp;
         	return true;
         }
		 
/*  -------------------------------------------  Calculator Ends  ------------------------------------------------*/

/*  ------------------------------------------------- Anagram --------------------------------------------------- */

function anagram(){
    var str1 = document.getElementById("ag1").value;
    var str2 = document.getElementById("ag2").value;
    if(str1.length !== str2.length)
    {
        alert("It is not an Anagram");
        return false;
    }
    stringA = str1.replace(/[^\w]/g, '').toLowerCase()
    stringB = str2.replace(/[^\w]/g, '').toLowerCase()

    let arrB = stringB.split("")

    for (let char of stringA ){ 
        if (!arrB.includes(char)) {
            alert("It is not an Anagram");
            return false;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }
    console.log("True");
    alert("It is an Anagram");
    return true;
}

/* --------------------------------------------- Anagram Ends ----------------------------------------------*/

/* ---------------------------------------------- Palindrome -----------------------------------------------*/

function palindrome(){
	revString = "";
	orgString = document.getElementById("pd").value;
	len = orgString.length;
	
	for(var check=len; check >= 0; check--){
		revString = revString + orgString.charAt(check);
	}
	
	if(orgString == revString){
		alert(orgString + " is a Palindrome")
		return true;
	}
	else{
		alert(orgString + " is a not Palindrome")
		return false;
	}
}


/* -------------------------------------------- Who will Survive? --------------------------------------------- */

 function calculate() {
	    console.log(CaluculateResult());
        alert(CaluculateResult());
    }

    function CaluculateResult() {
        var input1 = parseInt(document.getElementById("input1").value);
        var input2 = parseInt(document.getElementById("input2").value);
        input1 = input1 < 2 ? input1 : (input1 % 3);
        input2 = input2 < 2 ? input2 : (input2 % 3);
        //Rule 1
        if (input1 == input2) {
            return "Tie";
        }
        //Rule 2
        else if ((input1 == 0 && input2 == 1) || (input2 == 0 && input1 == 1)) {
            return "Human Wins...!!! :)";
        }
        //Rule 3
        else if ((input1 == 1 && input2 == 2) || (input2 == 1 && input1 == 2)) {
            return "Cocroach Wins...!!!!" ;
        }
        //Rule 4
        else if ((input1 == 0 && input2 == 2) || (input2 == 0 && input1 == 2)) {
            return "Nuclear bomb Wins...!!!";
        }

        return "No match found";
    }
	
/* --------------------------------------------- Who will Survive? Ends ------------------------------------- */

/* ------------------------------------------------ Currency Converter -------------------------------------- */
	
	function currencyConverter(){		
		var amount = document.getElementById("input1").value;
		var fromcurrency = document.getElementById("from_currency");
		fromcurrency = fromcurrency.options[fromcurrency.selectedIndex].value;
		var tocurrency = document.getElementById("to_currency");
		tocurrency = tocurrency.options[tocurrency.selectedIndex].value;
		var query = fromcurrency + "_" + tocurrency;
		
		var url = "https://free.currconv.com/api/v7/convert?q=" + query + "&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
		
		// This is to make api call for currency converter.
		var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
	  document.getElementById("displayvalue").innerHTML  = parseInt(amount) * data[query];
  } else {
    alert('error')
  }
}

request.send();
		
	}

/* ----------------------------------------------- The End! -------------------------------------------- */