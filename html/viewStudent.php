<?php include_once("../php/session.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Log in (v2)</title>

  <!-- Google Font: Source Sans Pro -->

  <!-- Font Awesome -->
  <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../dist/css/adminlte.min.css">
  <link rel="stylesheet" href="../dist/css/error.css">
  <link rel="stylesheet" href="../dist/css/table.css">
</head>
<body>
  <div class="parent">
  <div class="child">
<h2>Student Details</h2>
</div>
<div id="searchBox" class="child">
  <input type="text" id="searchField" autocomplete="off">
  <button id="searchBtn">Search</button>
</div>
</div>
    <table style="margin-left:20px" id ="stdTable">
 
        <tr >
            <th>ID</th>
            <th>Image</th>
            <th>STUDENT NAME</th>
            <th >Chemistrty</th>
            <th >Physics</th>
            <th>Biology</th>
            <th>Mathematics</th>
            <th>English</th>
            <th>Mentor Name</th>
            <th>Percentage</th>
            <th>Class</th>
            <th>DELETE</th>
            <th>UPDATE</th>
            
        </tr>
       
        <tbody id="studentTable" >

        </tbody>
        </table>
        <div id="pagination">

</div>
<div id="searchpagination">

</div>
        
        <div id="modal">
          <div id="modal-form">

          <h2 id="formTitle"></h2>
          <p id="updateSuccess"></p>
          <table cellpading="10px" width="100%">
            <tr><td><input type="text" id="editId" hidden></td></tr>
              <tr><td><b>Student Name</b></td>
              <td><input type="text" id="editName"></td></tr>
              <tr><td></td>
              <td><p id ="editNameError" class="error"></p></td></tr>
             <tr> <td><b>Chemistry<b></td>
              <td><input type="text" id="editChemistry"></td></tr>
              <tr><td></td>
              <td><p id ="editChemistryError" class="error"></p></td></tr>
              <tr><td><b>Physics</b></td>
              <td><input type="text" id="editPhysics"></td></tr>
              <tr><td></td>
              <td><p id ="editPhysicsError" class="error"></p></td></tr>
             <tr> <td><b>Biology</b></td>
              <td><input type="text" id="editBiology"></td></tr>
              <tr><td></td>
              <td><p id ="editBiologyError" class="error"></p></td></tr>
              <tr><td><b>Mathematics<b></td>
              <td><input type="text" id="editMathematics"></td></tr>
              <tr><td></td>
              <td><p id ="editMathematicsError" class="error"></p></td></tr>
              <tr>  <td><b>English</b></td>
              <td><input type="text" id="editEnglish"></td></tr>
              <tr><td></td>
              <td><p id ="editEnglishError" class="error"></p></td></tr>
          <tr><td><label>Select Mentor</label></td>
                        <td><select class="form-control" id="editMentorName">
                        <option value="0">select</option>;
                        </select></td></tr>
                        <tr><td></td>
              <td><p id ="editMentorError" class="error"></p></td></tr>
              
            
              <tr><td> <label for="img">Select image</label></td>
              <td> 
  <input type="file" id="img" name="img"></td></tr>
  <tr><td></td>
              <td><p id ="editImageError" class="error"></p></td></tr>

 <tr><td></td>
              <td><img id="imgChange"/></td></tr>

              <td><input type="submit" class="formButton"></td></tr>

            </table>

            <div id="close-btn">X</div>
</div>
</div>
<div><button class="btn-primary" id="addBtn" >Add Student</button></div>


<!-- jQuery -->
<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../js/viewData.js"></script>
<script src="../js/deleteStudent.js"></script>
<script src="../js/editStudent.js"></script>
<script src="../js/updateStudent.js"></script>
<script src="../js/closeButton.js"></script>
<script src="../js/searchTable.js"></script>
<script src="../js/insertStudent.js"></script>


<script>
// self executing function here
(function() {
  $.ajax({
    type:"GET",
    url: "../php/getMentors.php",
    success: function(data)
    {
        
      var data = JSON.parse(data);
      var len = data.length;

      for(var i=0;i<len;i++)
      {
        
       var option = document.createElement("option");
option.text = data[i].mentor_name;
option.value =data[i].mentor_name;
var select = document.getElementById("editMentorName");
select && select.appendChild(option);
        
      }
      
    
    }
})

})();
</script>
</body>
</html>