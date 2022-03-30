<?php

	include '../dbConnect/config.php';
	session_start();
    $email="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['email']) ){
		$email=$_POST['email'];
		
        $sql=mysqli_query($conn,"SELECT * FROM userdetails where email='$email'");
        
        $row  = mysqli_fetch_array($sql);
        if(is_array($row))

        {
            $comb = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            $pass = array(); 
            $combLen = strlen($comb) - 1; 
            for ($i = 0; $i < 8; $i++) {
                $n = rand(0, $combLen);
                $pass[] = $comb[$n];
            }
            $tempPswd=implode($pass);
           
            $sql1 =mysqli_query( $conn,"UPDATE userdetails SET password='$tempPswd'  WHERE email='$email'");
            
            echo $tempPswd;

        }
    
        else
    
        {
            echo "201";
        }
    
      }		
}
?>