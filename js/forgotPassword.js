
$('#passwordRequest').on('click', function(event) {

    
	event.preventDefault();
    var email = $('#forgotEmail').val();
    var re = /\S+@\S+\.\S+/;
    var validate =re.test(email);

    if(email!="" && validate==true){
        $.ajax({
            url: "../php/forgotPassword.php",
            type: "POST",
            data: {
                email:email					
            },
            cache: false,
            
            success:function(data)
            {
                if(data==201)
            {
                document.getElementById("emailError").innerHTML = "email doesNot Exsist*";
            }
            else{

            
                document.getElementById("emailError").innerHTML = "";
            
                document.getElementById("tempPasswordDisplay").innerHTML = "Use Following Password for Login : </br><b>"+data+"</b>";

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
			
			document.getElementById("emailError").innerHTML = "please enter email*";
			
			
		}
        else if(validate==false)
        {
            document.getElementById("emailError").innerHTML = "please enter valid email*";
        }
    
});
