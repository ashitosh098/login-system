<?php

	include '../dbConnect/config.php';
	session_start();
    $name=$email=$pswd=$hash="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['pswd'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$pswd=$_POST['pswd'];

		$encdPassword= password_hash($pswd, PASSWORD_DEFAULT);
		
		
		
		$sql = "SELECT email FROM userdetails WHERE email='$email'";
           $result =mysqli_query($conn, $sql);

           if($result->num_rows > 0)
           {
	
			echo json_encode(array("statusCode"=>201));
			
			} 
			else {
				
				$sql = "INSERT INTO `userdetails`( `name`, `email`, `password`) 
			VALUES ('$name','$email', '$encdPassword')";
			if (mysqli_query($conn, $sql)) {
				echo json_encode(array("statusCode"=>200));
			}
				else{
					echo json_encode(array("statusCode"=>400));
					
				}
	
		
	}
    mysqli_close($conn);
}
	}

    ?>