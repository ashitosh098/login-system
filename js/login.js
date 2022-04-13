
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
                    document.getElementById("userDontExsist").innerHTML = "";
                    document.getElementById("loginEmailError").innerHTML = "";
			document.getElementById("loginPswdError").innerHTML = "";
                    alert("login successfull!")
                    window.location = "../html/dashboard.php";
                    

                }
                else if(status.statusCode==201)
                {
                    document.getElementById("invalidCredentials").innerHTML = "Invalid  Credentials ";
                    document.getElementById("userDontExsist").innerHTML = "";
                    document.getElementById("loginEmailError").innerHTML = "";
                    document.getElementById("loginPswdError").innerHTML = "";
                    
                    
                }
                else if(status.statusCode==202){
                    document.getElementById("invalidCredentials").innerHTML = "";
                    document.getElementById("userDontExsist").innerHTML = "User Dosent Exsist";
                    document.getElementById("loginEmailError").innerHTML = "";
                    document.getElementById("loginPswdError").innerHTML = "";
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
            document.getElementById("userDontExsist").innerHTML = "";
			
		}
        else if(validate ==false)
        {
            document.getElementById("loginEmailError").innerHTML = "please enter valid  email*";
			document.getElementById("loginPswdError").innerHTML = "";
            document.getElementById("invalidCredentials").innerHTML = "";
            document.getElementById("userDontExsist").innerHTML = "";
        }
        else if(pswd=="")
		{
			
			document.getElementById("loginEmailError").innerHTML = "";
			document.getElementById("loginPswdError").innerHTML = "please enter valid password*";	
            document.getElementById("invalidCredentials").innerHTML = "";
            document.getElementById("userDontExsist").innerHTML = "";
		}
        
    
});
