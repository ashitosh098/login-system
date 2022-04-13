$(document).on('click','.update-btn',function()
{

$("#modal").show();
document.getElementById("formTitle").innerHTML = "Edit Student Details";
var add = document.getElementsByClassName("formButton")[0];
add.setAttribute("id", "editSave");
add.setAttribute("value", "Edit Student");


   var stdId =$(this).data("eid")
   $.ajax({
    type:"POST",
    url: "../php/loadData.php",
    data:{id:stdId},
    
    success: function(data)
    {
       var data = JSON.parse(data);
       
      document.getElementById("editName").value =data[0].student_name;
       document.getElementById("editChemistry").value =data[0].chemistry;
       document.getElementById("editPhysics").value =data[0].physics;
       document.getElementById("editBiology").value =data[0].biology;
       document.getElementById("editMathematics").value =data[0].mathematics;
       document.getElementById("editEnglish").value =data[0].english;
       document.getElementById("editMentorName").value =data[0].mentor_name;
       document.getElementById("editId").value =stdId;
       var currentImage = document.getElementById("imgChange");
       currentImage.setAttribute("src","http://localhost/login_system/img/"+data[0].image);
       currentImage.setAttribute("style", "border: 1px solid #ddd;border-radius: 4px;padding: 5px;width: 140px;height: 140px;");
     
    
    }
})
   

});