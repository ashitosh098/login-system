<?php
    include '../dbConnect/config.php';
    $limitPerPage=5;
    $sql="SELECT * FROM studentdetails";
    $result =mysqli_query($conn, $sql);
    $totalRecords= mysqli_num_rows($result);
    $totalPage=ceil($totalRecords/$limitPerPage);
     
    echo $totalPage;

 ?>

