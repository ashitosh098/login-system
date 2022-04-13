<?php

	include '../dbConnect/config.php';
	session_start();
    $email=$pswd="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['email']) && isset($_POST['pswd'])){
		$email=$_POST['email'];
		$pswd=$_POST['pswd'];

		
		
        $sql=mysqli_query($conn,"SELECT * FROM userdetails where email='$email'");
        
        $row  = mysqli_fetch_array($sql);
        if(is_array($row))

        {
            if(isset($row['name']) && isset($row['email']) && isset($row['password']))
              $verify= password_verify($pswd,$row['password']);
              if($verify==true)
            {
      
              $_SESSION["email"]=$row['email'];
              $_SESSION["password"]=$row['password'];
              $_SESSION["name"]=$row['name'];
            echo json_encode(array("statusCode"=>200));
            
        }
        else{
            echo json_encode(array("statusCode"=>201));
        }
    }
    
        else
    
        {
            echo json_encode(array("statusCode"=>202));
        }
    
      }		
}
    
?>