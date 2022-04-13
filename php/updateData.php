<?php

	include '../dbConnect/config.php';
	session_start();
   $id=$name=$chemistry=$physics=$biology=$mathematics=$english=$mentorName=$mentorId="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){

        
		if(isset($_POST['id']) &&isset($_POST['name']) && isset($_POST['chemistry']) && isset($_POST['physics']) && isset($_POST['biology']) && isset($_POST['mathematics']) && isset($_POST['english'])&& isset($_POST['mentor'])){
		$id=$_POST['id'];
        $name=$_POST['name'];
        $chemistry=$_POST['chemistry'];
        $physics=$_POST['physics'];
        $biology=$_POST['biology'];
        $mathematics=$_POST['mathematics'];
        $english=$_POST['english'];
        $mentorName=$_POST['mentor'];

        $sql = "SELECT mentor_id FROM mentors WHERE mentor_name='$mentorName'";
           $result =mysqli_query($conn, $sql);
           $row = $result->fetch_assoc();
           $mentorId= $row["mentor_id"];

        $sqlUpdate = "UPDATE studentdetails SET student_name='$name' ,chemistry='$chemistry' ,physics='$physics' ,biology='$biology' ,mathematics='$mathematics' ,english='$english' ,mentor_id='$mentorId' WHERE student_id='$id'";

        if (mysqli_query($conn, $sqlUpdate)) {
            echo json_encode(array("statusCode"=>200));
        } else {
            echo json_encode(array("statusCode"=>201));
        }
            mysqli_close($conn);

        }}

           ?>