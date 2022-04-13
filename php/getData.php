
    <?php
    include '../dbConnect/config.php';

    $limitPerPage=5;
    $page="";
    if(isset($_POST["page"]))
    {
      $page=$_POST["page"];
    }
    else{
            $page= 1;
    }
    $offset=($page-1)*$limitPerPage;

    $sql = "SELECT studentdetails.student_id, studentdetails.student_name,studentdetails.chemistry,studentdetails.physics,studentdetails.biology,studentdetails.mathematics,studentdetails.english,studentdetails.image, mentors.mentor_name FROM  studentdetails INNER JOIN  mentors ON studentdetails.mentor_id=mentors.mentor_id
    LIMIT {$offset},{$limitPerPage}";
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
        