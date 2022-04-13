<?php
    include '../dbConnect/config.php';
 $id="";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if(isset($_POST["id"]))
        {
$id=$_POST["id"];
        
    $sql = "SELECT  studentdetails.student_name,studentdetails.chemistry,studentdetails.physics,studentdetails.biology,studentdetails.mathematics,studentdetails.english,studentdetails.image, mentors.mentor_name FROM  studentdetails INNER JOIN  mentors ON studentdetails.mentor_id=mentors.mentor_id WHERE student_id='$id'";
    $result =mysqli_query($conn, $sql);
    
    if ($result->num_rows > 0) {
       
          
      
        $resultArray=array();
    while($row = mysqli_fetch_assoc($result)){               
      $resultArray[]=$row;
      
    }

echo json_encode($resultArray);
      
    }


$conn->close();
}
        }
    

    ?>
  