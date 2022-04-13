<?php include_once("../php/session.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AdminLTE 3 | Registration Page (v2)</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="../dist/css/adminlte.min.css">
  <link rel="stylesheet" href="../dist/css/error.css">
</head>
<body class="hold-transition register-page" >
<div class="register-box" style="width:'50%'">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
     
      <h4 class="login-box-msg">Add New Student</h4>
      <p id="addSuccess"></p>

      <form  method="post">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="student name" id="studentName">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <p id="studentNameError" class="error"> </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="chemistry marks" id="chemistryMarks">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-flask"></span>
            </div>
          </div>
        </div>
        <p id="chemistryError" class="error"> </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="physics marks" id="physicsMarks">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-magnet"></span>
            </div>
          </div>
        </div>
        <p id="physicsError" class="error"> </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="biology marks" id="biologyMarks">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="	fas fa-microscope"></span>
            </div>
          </div>
        </div>
        <p id="biologyError" class="error"> </p>
         <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="mathematics  marks" id="mathematicsMarks">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-calculator"></span>
            </div>
          </div>
        </div>
        <p id="mathematicsError" class="error"> </p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="english  marks" id="englishMarks">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fa fa-language"></span>
            </div>
          </div>
        </div>
        <p id="EnglishError" class="error"> </p>
        
        <div class="row">
                    <div class="col-sm-6">
                      <!-- select -->
                      <div class="form-group">
                        <label>Select Mentor</label>
                        <select class="form-control" id="mentorName">
                        <option value="0">select</option>;
                        </select>
                      </div>
                    </div>
                    <p id="mentorError" class="error"> </p><br>
        </div>
        <p id="mentorError" class="error"> </p>
      </form>
      <button type="submit" class=" btn-primary" id="addStudent" >Add Student</button>
      <button type="submit" class=" btn-primary" id="addStudent" >Update Student</button>
      <a href ="./dashboard.php"><button type="submit" class="btn-primary" id="viewStudent" style="margin-top:10px">HOME</button></a>
   </div>
    <!-- /.form-box -->
  </div><!-- /.card -->
</div>
<!-- /.register-box -->

<!-- jQuery -->
<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="../js/insertStudent.js"></script>
<script src="../js/viewData.js"></script>
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
var select = document.getElementById("mentorName");
select && select.appendChild(option);
        
      }
      
    
    }
})

})();
</script>
</body>
</html>