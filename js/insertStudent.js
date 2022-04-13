
$(document).on('click','#addBtn',function()
{
$("#modal").show();
document.getElementById("formTitle").innerHTML = "Add Student Details";
var add = document.getElementsByClassName("formButton")[0];
add.setAttribute("id", "saveStd");
add.setAttribute("value", "Save Student");



    
})

$(document).on('click','#saveStd',function(event)
{
   
	event.preventDefault();
    var fullname = $('#editName').val();
    var chemistry = $('#editChemistry').val();
    var physics = $('#editPhysics').val();
    var biology = $('#editBiology').val();
    var mathematics = $('#editMathematics').val();
    var english = $('#editEnglish').val();
	var mentorName=$('#editMentorName').val();
    var img = document.getElementById('img').files[0];
    var imgExt="";
    var imgSize=0;
    if(img !=null)
    {

    
    var imgExt =document.getElementById('img').files[0].type;
    var imgSize =document.getElementById('img').files[0].size/1024;

    }




    var fd = new FormData();
    fd.append("file", document.getElementById('img').files[0])
    fd.append("name",fullname);
    fd.append("chemistry",chemistry);
    fd.append("physics",physics);
    fd.append("biology",biology);
    fd.append("mathematics",mathematics);
    fd.append("english",english);
    fd.append("mentorName",mentorName);
    
    
   

    
    
    
	if(fullname!=""&& isNaN(fullname) && chemistry!=""&&physics!=""&&biology!=""&&mathematics!=""&&english!="" && isNaN(chemistry)==isNaN(physics)==isNaN(biology)==isNaN(mathematics)==isNaN(english)==false &&parseInt(chemistry)<=100 && parseInt(chemistry)>=0&&parseInt(physics)<=100 && parseInt(physics)>=0&&parseInt(biology)<=100 && parseInt(biology)>=0&&parseInt(mathematics)<=100 && parseInt(mathematics)>=0&&parseInt(english)<=100 && parseInt(english)>=0 && mentorName!="0" && imgExt=="image/jpeg" && imgSize<1000  && img!=null){
		$.ajax({
			url: "../php/saveStudent.php",
			type: "POST",
            data:fd,
            contentType:false,
            processData:false,
			
			success:function(data)
			{
				var status = JSON.parse(data);
				console.log(status.statusCode)

				
				if(status.statusCode==200)
				{
					document.getElementById("updateSuccess").innerHTML = "Data saved Successfully";
                    document.getElementById("editNameError").innerHTML = "";
                    document.getElementById("editChemistryError").innerHTML = "";
                    document.getElementById("editPhysicsError").innerHTML = "";
                    document.getElementById("editBiologyError").innerHTML = "";
                    document.getElementById("editMathematicsError").innerHTML = "";
                    document.getElementById("editEnglishError").innerHTML = "";
                    document.getElementById("editMentorError").innerHTML = "";
                    document.getElementById("editName").value="";
                    document.getElementById("editChemistry").value="";
                    document.getElementById("editPhysics").value="";
                    document.getElementById("editBiology").value="";
                    document.getElementById("editMathematics").value="";
                    document.getElementById("editEnglish").value="";
                    document.getElementById("editMentorName").value="0";
                    document.getElementById("editImageError").innerHTML = "";
                
					
					
				}
				else {
					document.getElementById("updateSuccess").innerHTML = "Error While adding student data";
                    document.getElementById("editNameError").innerHTML = "";
                    document.getElementById("editChemistryError").innerHTML = "";
                    document.getElementById("editPhysicsError").innerHTML = "";
                    document.getElementById("editBiologyError").innerHTML = "";
                    document.getElementById("editMathematicsError").innerHTML = "";
                    document.getElementById("editEnglishError").innerHTML = "";
                    document.getElementById("editMentorError").innerHTML = "";
                    document.getElementById("editImageError").innerHTML = "";
				}

				

			},
			error:function(error)
			{
				console.log(error);
			}
		});
	}

	else if(fullname=="" || !isNaN(fullname))
		{
			document.getElementById("editNameError").innerHTML = "Please enter name *";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}

	
		
		else if(chemistry==""|| isNaN(chemistry)==true || parseInt(chemistry)>100 || parseInt(chemistry)<0)
		{
            document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "Please enter marks between 0 to 100";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}
		else if(physics==""|| isNaN(physics)==true || parseInt(physics)>100 || parseInt(physics)<0)
		{
            document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "Please enter marks between 0 to 100";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}
		else if(biology==""|| isNaN(biology)==true || parseInt(biology)>100 || parseInt(biology)<0)
		{
			document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "Please enter marks between 0 to 100";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}
		
		else if(mathematics==""|| isNaN(mathematics)==true || parseInt(mathematics)>100 || parseInt(mathematics)<0)
		{
			document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "Please enter marks between 0 to 100";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}
		else if(english==""|| isNaN(english)==true || parseInt(english)>100 || parseInt(english)<0)
		{
			document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "Please enter marks between 0 to 100";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "";
		}
		else if (mentorName=="0")
		{
			document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "please select mentor*";
            document.getElementById("editImageError").innerHTML = "";
		}
        else if (imgExt!="image/jpeg" || imgSize>1000 || img==null)
		{
			document.getElementById("editNameError").innerHTML = "";
            document.getElementById("editChemistryError").innerHTML = "";
            document.getElementById("editPhysicsError").innerHTML = "";
            document.getElementById("editBiologyError").innerHTML = "";
            document.getElementById("editMathematicsError").innerHTML = "";
            document.getElementById("editEnglishError").innerHTML = "";
            document.getElementById("editMentorError").innerHTML = "";
            document.getElementById("editImageError").innerHTML = "please upload image less than 1000Kb* ";
		}
		
})

$("#img").on('change',function(){
    
});
   
