<?php

if(isset($_FILES['file']['name']) && isset($_POST['fullname']))
{

    $filename= $_FILES['file']['name'];
    $name =$_POST['fullname'];
   

    //echo $filename;
    $extension =pathinfo($filename,PATHINFO_EXTENSION);
    //echo $extension;
    $date=date('YmdHis');
    $newName=$date.".".$extension;
    echo $newName;
    
    $path ="../img/".$newName;

    if(move_uploaded_file($_FILES['file']['tmp_name'],$path)){

            echo "success";
    }




}
?>