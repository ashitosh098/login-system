$(document).on('click','#editSave',function(event)
{
  
   var editedId =$("#editId").val();
   var editedName =$("#editName").val();
   var editedChemistry =$("#editChemistry").val();
   var editedPhysics =$("#editPhysics").val();
   var editedBiology =$("#editBiology").val();
   var editedMathematics =$("#editMathematics").val();
   var editedEnglish =$("#editEnglish").val();
   var editedMentor =$("#editMentorName").val();

   


   

if(editedName!=""&& isNaN(editedName) && editedChemistry!="" &&editedPhysics!=""&&editedBiology!=""&&editedMathematics!=""&&editedEnglish!="" &&  isNaN(editedChemistry)==isNaN(editedPhysics)==isNaN(editedBiology)==isNaN(editedMathematics)==isNaN(editedEnglish)==false &&parseInt(editedChemistry)<=100 && parseInt(editedChemistry)>=0&&parseInt(editedPhysics)<=100 && parseInt(editedPhysics)>=0&&parseInt(editedBiology)<=100 && parseInt(editedBiology)>=0&&parseInt(editedMathematics)<=100 && parseInt(editedMathematics)>=0&&parseInt(editedEnglish)<=100 && parseInt(editedEnglish)>=0 &&editedMentor!="0")
{


   $.ajax({
    type:"POST",
    url: "../php/updateData.php",
    data:{
        
        id:editedId,
        name:editedName,
        chemistry:editedChemistry,
        physics:editedPhysics,
        biology:editedBiology,
        mathematics:editedMathematics,
        english:editedEnglish,
        mentor:editedMentor

    
    },
    
    success: function(data)
    {
        var data =JSON.parse(data);
       if(data.statusCode=='200')
       {
       
        document.getElementById("updateSuccess").innerHTML = "Data Updated Successfully";
        document.getElementById("editNameError").innerHTML = "";
        document.getElementById("editChemistryError").innerHTML = "";
        document.getElementById("editPhysicsError").innerHTML = "";
        document.getElementById("editBiologyError").innerHTML = "";
        document.getElementById("editMathematicsError").innerHTML = "";
        document.getElementById("editEnglishError").innerHTML = "";
        document.getElementById("editMentorError").innerHTML = "";
       

       }
       else{
           alert("error while updating data");
       }
      
    
    }
})
}


else if(editedName=="" || !isNaN(editedName) )
{
    document.getElementById("editNameError").innerHTML = "please enter  name*";
    document.getElementById("editChemistryError").innerHTML = "";
    document.getElementById("editPhysicsError").innerHTML = "";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "";
    document.getElementById("editEnglishError").innerHTML = "";
    document.getElementById("editMentorError").innerHTML = "";

}



else if(editedChemistry==""|| isNaN(editedChemistry)==true || parseInt(editedChemistry)>100 || parseInt(editedChemistry)<0)
{
    document.getElementById("editNameError").innerHTML = "";
    document.getElementById("editChemistryError").innerHTML = "please enter marks between 0 to 100*";
    document.getElementById("editPhysicsError").innerHTML = "";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "";
    document.getElementById("editEnglishError").innerHTML = "";
    document.getElementById("editMentorError").innerHTML = "";

}
else if(editedPhysics==""|| isNaN(editedPhysics)==true || parseInt(editedPhysics)>100 || parseInt(editedPhysics)<0)
{
    document.getElementById("editNameError").innerHTML = "";
    document.getElementById("editChemistryError").innerHTML = "";
    document.getElementById("editPhysicsError").innerHTML = "please enter marks between 0 to 100*";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "";
    document.getElementById("editEnglishError").innerHTML = "";
    document.getElementById("editMentorError").innerHTML = "";

}
else if(editedBiology==""|| isNaN(editedBiology)==true || parseInt(editedBiology)>100 || parseInt(editedBiology)<0)
{ document.getElementById("editNameError").innerHTML = "";
document.getElementById("editChemistryError").innerHTML = "";
document.getElementById("editPhysicsError").innerHTML = "";
document.getElementById("editBiologyError").innerHTML = "please enter marks between 0 to 100*";
document.getElementById("editMathematicsError").innerHTML = "";
document.getElementById("editEnglishError").innerHTML = "";
document.getElementById("editMentorError").innerHTML = "";

}
else if(editedMathematics==""|| isNaN(editedMathematics)==true || parseInt(editedMathematics)>100 || parseInt(editedMathematics)<0)
{
    document.getElementById("editNameError").innerHTML = "";
    document.getElementById("editChemistryError").innerHTML = "";
    document.getElementById("editPhysicsError").innerHTML = "";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "please enter marks between 0 to 100*";
    document.getElementById("editEnglishError").innerHTML = "";
    document.getElementById("editMentorError").innerHTML = "";

}
else if(editedEnglish==""|| isNaN(editedEnglish)==true || parseInt(editedEnglish)>100 || parseInt(editedEnglish)<0)
{
    document.getElementById("editNameError").innerHTML = "";
    document.getElementById("editChemistryError").innerHTML = "";
    document.getElementById("editPhysicsError").innerHTML = "";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "";
    document.getElementById("editEnglishError").innerHTML = "please enter marks between 0 to 100*";
    document.getElementById("editMentorError").innerHTML = "";

}
else if(editedMentor="0")
{
    document.getElementById("editNameError").innerHTML = "";
    document.getElementById("editChemistryError").innerHTML = "";
    document.getElementById("editPhysicsError").innerHTML = "";
    document.getElementById("editBiologyError").innerHTML = "";
    document.getElementById("editMathematicsError").innerHTML = "";
    document.getElementById("editEnglishError").innerHTML = "";
    document.getElementById("editMentorError").innerHTML = "please select mentor";

}

});
