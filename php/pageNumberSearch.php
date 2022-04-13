<?php
    include '../dbConnect/config.php';
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
		if(isset($_POST['search'])){
            $search=$_POST['search'];
            $resultArray=array();
            $r1=array();

if(is_numeric($search))
{
    $sqlNumeric = "SELECT studentdetails.student_id, studentdetails.student_name,studentdetails.chemistry,studentdetails.physics,studentdetails.biology,studentdetails.mathematics,studentdetails.english, mentors.mentor_name FROM  studentdetails INNER JOIN  mentors ON studentdetails.mentor_id=mentors.mentor_id";
    $resultNumeric=mysqli_query($conn, $sqlNumeric);
    if ($resultNumeric->num_rows > 0) {
        while($row = mysqli_fetch_assoc($resultNumeric)){
            if(isset($row['chemistry']) && isset($row['physics']) && isset($row['biology']) && isset($row['mathematics']) && isset($row['english']))
            {
                if($row['chemistry']!=$search && $row['physics']!=$search && $row['biology']!=$search && $row['mathematics']!=$search && $row['english']!=$search )
                {
              $markAddition=(int)$row['chemistry']+(int)$row['physics']+(int)$row['biology']+(int)$row['mathematics']+(int)$row['english'];
              $percentage=($markAddition/500)*100;
              if(is_int($percentage))
              {
                  $percentage=$percentage;
                
              }
              else{
                  $percentage=number_format($percentage, 2, '.', "");
              }
 

              if($percentage==$search)
              {
                  $resultArray[]=$row;
              }


            }
            }
        }
    }
  
   echo json_encode(sizeof($resultArray));
}
else{
    
    $sql = "SELECT studentdetails.student_id, studentdetails.student_name,studentdetails.chemistry,studentdetails.physics,studentdetails.biology,studentdetails.mathematics,studentdetails.english, mentors.mentor_name FROM  studentdetails 
    INNER JOIN  mentors ON studentdetails.mentor_id=mentors.mentor_id 
    WHERE studentdetails.student_name LIKE '%{$search}%' OR  mentors.mentor_name LIKE '%{$search}%'";
    $result =mysqli_query($conn, $sql);
   
    
    if ($result->num_rows > 0) { 
    while($row = mysqli_fetch_assoc($result)){               
      $resultArray[]=$row;
      
    }
}

echo json_encode(sizeof($resultArray));
}


    
        $conn->close();
     
    }}

          ?>