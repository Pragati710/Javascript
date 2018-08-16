function validation(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var password2 = document.getElementById('password2').value;
	var mobile = document.getElementById('mobile').value;
	var address = document.getElementById('address').value;
	var zip = document.getElementById('zip').value;
	var country = document.getElementById('country').value;
	


	if(name == ""){
		document.getElementById("name_error").innerHTML = " ** Please fill the username field";
	    return false;
	}
	if((name.length <=2) ||(name.length>20)){
		document.getElementById("name_error").innerHTML = " ** Username must be between 2 to 20 characters";
		return false;
	}
	if (!isNaN(name)) {
		document.getElementById("name_error").innerHTML = " ** Only characters are allowed";
		return false;
	}
    if (email == "") {
		document.getElementById("email_error").innerHTML = " ** Please fill email id field";
		return false;
	}
     if (email.indexOf('@') <= 0) {
		document.getElementById("email_error").innerHTML = " ** Email id not valid, @ position is wrong";
		return false;
	}
	 if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
		document.getElementById("email_error").innerHTML = " ** Email id not valid, . position is wrong";
		return false;
	}

	if(password == ""){
		document.getElementById("password_error").innerHTML = " ** Please fill the password field";
	    return false;
	}
	if(password.length < 8){
		document.getElementById("password_error").innerHTML = " ** Password must be of atleast 8 characters";
		return false;
	}
	
	if(password != password2){
		document.getElementById("password2_error").innerHTML = " ** Password are not matching";
		return false;
	}
	if(password2 == ""){
		document.getElementById("password2_error").innerHTML = " ** Please fill the confirm password field";
		return false;
	}
    if(mobile == ""){
		document.getElementById("mobile_error").innerHTML = " ** Please fill the mobile field";
	    return false;
	} 
    if (isNaN(mobile)) {
		document.getElementById("mobile_error").innerHTML = " ** Use digits in mobile number";
		return false;
	}
    if(mobile.length != 10){
		document.getElementById("mobile_error").innerHTML = " ** Use valid mobile number";
		return false;
	}
	if(address == ""){
		document.getElementById("address_error").innerHTML = " ** Please fill the address field";
	    return false;
	}
	if(zip == ""){
		document.getElementById("zip_error").innerHTML = " ** Please fill the zip code field";
	    return false;
	}
	if (isNaN(zip)) {
		document.getElementById("zip_error").innerHTML = " ** Use digits in zip code";
		return false;
	}
    if(country == "Default"){
		document.getElementById("country_error").innerHTML = " ** Select your country";
	    return false;
	} 
	return true;
}


