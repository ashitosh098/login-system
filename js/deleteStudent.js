
$(document).on('click','.del-btn',function()
{
    
    if(confirm("Do you really want to delete this data?"))
    {
    var studentId = $(this).data("id");
    var imgId =$(this).data("img");
    console.log(imgId)
    var $ele = $(this).parent().parent();
    $.ajax({
        url:"../php/deleteData.php",
        type:"POST",
        data:{id:studentId,
        imgId:imgId},
        success:function(data)
        {
            if(data ==1)
            {
                $ele.fadeOut();
            }
            else{
                alert("cant delete record");
            }
        }

    });
}
});