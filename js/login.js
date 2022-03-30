
$('#login').on('click', function(event) {

    
	event.preventDefault();
    var email = $('#loginEmail').val();
    var pswd = $('#loginPswd').val();
    var re = /\S+@\S+\.\S+/;
	 var validate =re.test(email);

    if(email!="" && pswd!="" && validate==true){
        $.ajax({
            url: "../php/login.php",
            type: "POST",
            data: {
                email:email,
                pswd: pswd						
            },
            cache: false,
            
            success:function(data)
            {
                var status = JSON.parse(data);
                if(status.statusCode==200)
                {
                    document.getElementById("invalidCredentials").innerHTML = "";
                    alert("login successfull!")
                    window.location = "../html/dashboard.php";
                    console.log(status)

                }
                else
                {
                    document.getElementById("invalidCredentials").innerHTML = "Invalid  Credentials ";
                }
                

            },
            error:function(error)
            {
                console.log(error);
            }
        });
    }
    
        else if(email=="")
		{
			
			document.getElementById("loginEmailError").innerHTML = "please enter email*";
			document.getElementById("loginPswdError").innerHTML = "";
            document.getElementById("invalidCredentials").innerHTML = "";
			
		}
        else if(validate ==false)
        {
            document.getElementById("loginEmailError").innerHTML = "please enter valid  email*";
			document.getElementById("loginPswdError").innerHTML = "";
            document.getElementById("invalidCredentials").innerHTML = "";
        }
        else if(pswd=="")
		{
			
			document.getElementById("loginEmailError").innerHTML = "";
			document.getElementById("loginPswdError").innerHTML = "please enter valid password*";	
            document.getElementById("invalidCredentials").innerHTML = "";
		}
        
    
});
