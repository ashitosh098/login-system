
$('#register').on('click', function(event) {

	event.preventDefault();
    var fullname = $('#name').val();
	var name =fullname.split(" ");
	var nameLength = name.length;
    var email = $('#email').val();
    var pswd = $('#pswd').val();
	var pswdLength = pswd.length;
    var confirmPswd = $('#pswdConfirm').val();
    var agree = document.querySelector('#agreeTerms');
	var checkBox = agree.checked;
	var re = /\S+@\S+\.\S+/;
	var validate = re.test(email);
	


	
		if(fullname!="" && email!="" && pswd!="" &&   confirmPswd!="" && checkBox == true && pswd == confirmPswd && validate == true && nameLength==2){
			$.ajax({
				url: "../php/save.php",
				type: "POST",
				data: {
                    type : 1,
					name: fullname,
                    email:email,
					pswd: pswd						
				},
				cache: false,
				
				success:function(data)
				{
					var status = JSON.parse(data);

					
					if(status.statusCode==200)
					{
					document.getElementById("registrationSuccess").innerHTML = "Member registered successfully !For Login ";
					document.getElementById("loginRedirect").innerHTML = "Click Here";
					document.getElementById("name").value = "";
					document.getElementById("email").value = "";
					document.getElementById("pswd").value = "";
					document.getElementById("pswdConfirm").value = "";
					document.getElementById("agreeTerms").checked= false;
					document.getElementById("nameNullError").innerHTML = "";
					document.getElementById("emailNullError").innerHTML = "";
					document.getElementById("pswdNullError").innerHTML = "";
					document.getElementById("cnfPswdNullError").innerHTML = "";
					document.getElementById("checkBoxError").innerHTML = "";
					document.getElementById("cnfPswdNullError").innerHTML = "";

					}
					else {

						document.getElementById("nameNullError").innerHTML = "";
						document.getElementById("emailNullError").innerHTML = "email already exsist*";
						document.getElementById("pswdNullError").innerHTML = "";
						document.getElementById("cnfPswdNullError").innerHTML = "";
						document.getElementById("checkBoxError").innerHTML = "";
					}

					

				},
				error:function(error)
				{
					console.log(error);
				}
			});
		}
		else if(fullname=="")
		{
			document.getElementById("nameNullError").innerHTML = "please enter full name*";
			document.getElementById("emailNullError").innerHTML = "";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
		}

	
		else if(nameLength!=2)
		{
			document.getElementById("nameNullError").innerHTML = "please enter valid full name*";
			document.getElementById("emailNullError").innerHTML = "";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
		}
		else if(email=="")
		{
			document.getElementById("nameNullError").innerHTML = "";
			document.getElementById("emailNullError").innerHTML = "please enter email*";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
		}
		else if(validate==false)
		{
			document.getElementById("nameNullError").innerHTML = "";
			document.getElementById("emailNullError").innerHTML = "please provide valid email*";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "";
		}
		else if(pswdLength<5)
		{
			document.getElementById("nameNullError").innerHTML = "";
			document.getElementById("emailNullError").innerHTML = "";
			document.getElementById("pswdNullError").innerHTML = "password length should be greater than 5*";
			document.getElementById("cnfPswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
			
		}
		else if(confirmPswd=="")
		{
			document.getElementById("nameNullError").innerHTML ="";
			document.getElementById("emailNullError").innerHTML ="";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "please enter confirm password*";
			document.getElementById("checkBoxError").innerHTML = "";
			


		}
		else if(checkBox==false)
		{
			document.getElementById("nameNullError").innerHTML = "";
			document.getElementById("emailNullError").innerHTML = "";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "please agree all the terms by clicking on checkbox*";
		

		}
		else if(pswd != confirmPswd)
		{
			document.getElementById("nameNullError").innerHTML = "";
			document.getElementById("emailNullError").innerHTML = "";
			document.getElementById("pswdNullError").innerHTML = "";
			document.getElementById("checkBoxError").innerHTML = "";
			document.getElementById("cnfPswdNullError").innerHTML = "password and confirm password does not match*";
		}		
		
	});
