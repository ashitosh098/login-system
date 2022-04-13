<?php
    include '../dbConnect/config.php';
    $sql = "SELECT  mentors.mentor_name FROM  mentors";
    $result =mysqli_query($conn, $sql);
    
    if ($result->num_rows > 0) {
       
        $resultArray=array();
    while($row = mysqli_fetch_assoc($result)){               
      $resultArray[]=$row;
      
    }

echo json_encode($resultArray);
$conn->close();
}

    ?>