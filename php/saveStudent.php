<?php

	include '../dbConnect/config.php';
	session_start();
   $name=$chemistry=$physics=$biology=$mathematics=$english=$mentorName=$mentorId="";
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['name']) && isset($_POST['chemistry']) && isset($_POST['physics']) && isset($_POST['biology']) && isset($_POST['mathematics']) && isset($_POST['english'])&& isset($_POST['mentorName']) && isset($_FILES['file']['name'])){
		$name=$_POST['name'];
        $chemistry=$_POST['chemistry'];
        $physics=$_POST['physics'];
        $biology=$_POST['biology'];
        $mathematics=$_POST['mathematics'];
        $english=$_POST['english'];
        $mentorName=$_POST['mentorName'];
        $filename= $_FILES['file']['name'];
        $extension =pathinfo($filename,PATHINFO_EXTENSION);
        $date=date('YmdHis');
        $newName="";
        $path ="";
		
		
		$sql = "SELECT mentor_id FROM mentors WHERE mentor_name='$mentorName'";
           $result =mysqli_query($conn, $sql);
           $row = $result->fetch_assoc();

           $mentorId= $row["mentor_id"];
           
           $sqlInsert = "INSERT INTO studentdetails(student_name,chemistry,physics,biology,mathematics,english,mentor_id)
           VALUES ('$name', '$chemistry', '$physics','$biology','$mathematics','$english','$mentorId')";

if (mysqli_query($conn, $sqlInsert)) {

    $last_id = mysqli_insert_id($conn);
    $newName=$last_id.$date.".".$extension;
    $path ="../img/".$newName;

    if(move_uploaded_file($_FILES['file']['tmp_name'],$path)){

        $sqlImage="UPDATE studentdetails SET image='$newName' WHERE student_id='$last_id'";
        if (mysqli_query($conn, $sqlImage)) {
            echo json_encode(array("statusCode"=>200));
        } else {
            echo json_encode(array("statusCode"=>201));
        }
}


    //echo json_encode(array("statusCode"=>200));

} else {
    echo json_encode(array("statusCode"=>201));
}
    }     
      
    



    mysqli_close($conn);

	}

    ?>