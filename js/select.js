
$("#addBtn").on("click",function()
{
    
   $.ajax({
    type:"GET",
    url: "../php/getMentors.php",
    success: function(data)
    {
        
      var data = JSON.parse(data);
      var len = data.length;
     var flag=0
      for(var i=0;i<len;i++)
      {
         flag++;
       var option = document.createElement("option");
option.text = data[i].mentor_name;
option.value =data[i].mentor_name;
var select = document.getElementById("mentorName");
select && select.appendChild(option);
        
      }
      if(flag==len)
      {
        window.location ="../html/addStudent.php"
      }
    
    }
})
    
})