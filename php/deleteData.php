<?php
    include '../dbConnect/config.php';

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        if(isset( $_POST["id"]) && isset( $_POST["imgId"])){
     $sId=$_POST["id"];
     $imgId=$_POST["imgId"];
     $path="../img/".$imgId;
    $sql = "DELETE FROM studentdetails WHERE student_id='$sId'";
    if(mysqli_query($conn, $sql))
    {
        if(unlink($path))
        {
            echo 1;
        }
       else{
        echo 0;
       }
    }
    else{
        echo 0;
    }
        }
    }
    ?>