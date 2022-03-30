<?php

	include '../dbConnect/config.php';
	session_start();
    $email=$pswd="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['email']) && isset($_POST['pswd'])){
		$email=$_POST['email'];
		$pswd=$_POST['pswd'];
		
        $sql=mysqli_query($conn,"SELECT * FROM userdetails where email='$email' and password='$pswd'");
        
        $row  = mysqli_fetch_array($sql);
        if(is_array($row))

        {
            if(isset($row['name']) && isset($row['email']) && isset($row['password']))

            {
      
              $_SESSION["email"]=$row['email'];
              $_SESSION["password"]=$row['password'];
              $_SESSION["name"]=$row['name'];
            echo json_encode(array("statusCode"=>200));
            
        }
    }
    
        else
    
        {
            echo json_encode(array("statusCode"=>201));
        }
    
      }		
}
    
?>