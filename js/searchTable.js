function loadSearchTable(page)
{
var searchTerm = $('#searchField').val();
var pg = page;
$.ajax({
    url:"../php/liveSearch.php",
    type:"POST",
    data:{search:searchTerm,
    page:pg},
    success: function(data)
    {
        $("#studentTable tr").remove(); 
       var data = JSON.parse(data);

       
      for(var i=0;i<data.length;i++)
      {
        var marksAddition= parseInt(data[i].chemistry)+parseInt(data[i].physics)+parseInt(data[i].biology)+parseInt(data[i].mathematics)+parseInt(data[i].english)
        var percentage=(marksAddition/500)*100;
        if(Number.isInteger(percentage))
        {
            percentage =percentage;
        }
        else{
            percentage=percentage.toFixed(2);
        }
        
        
        var cls="";
        var color="";
        if(percentage>=75)
        {
          cls="Distinction";
          color='green';
        }
        else if(percentage>=60 && percentage<75)
        {
          cls="First Class";
          color='aqua';
        }
        else if(percentage>=35 && percentage<60)
        {
          cls="Second Class";
          color='yellow';
        }
        else{
          cls="Fail";
          color='red';
        }
        var id ="";
                if(page==null)
                {
                    id=0;
                }
                else{
                    id=(page-1)*5
                }
                var table = document.getElementById("studentTable");
                var row = table && table.insertRow(i);
                var cell1 = row && row.insertCell(0);
                cell1.innerHTML =id+i+1;
                var cell2 = row && row.insertCell(1);
                cell2.innerHTML ="<img class='stdImage' src='http://localhost/login_system/img/"+data[i].image+"'/>"
                var cell3 =row &&  row.insertCell(2);
                cell3.innerHTML =data[i].student_name;
                var cell4= row && row.insertCell(3);
                cell4.innerHTML =data[i].chemistry;
                var cell5= row && row.insertCell(4);
                cell5.innerHTML =data[i].physics;
                var cell6 = row && row.insertCell(5);
                cell6.innerHTML =data[i].biology;
                var cell7 = row && row.insertCell(6);
                cell7.innerHTML =data[i].mathematics;
                var cell8 = row && row.insertCell(7);
                cell8.innerHTML =data[i].english;
                var cell9 = row && row.insertCell(8);
                cell9.innerHTML =data[i].mentor_name;
                var cell10 = row && row.insertCell(9);
                cell10.innerHTML =percentage;
                var cell11 =row &&  row.insertCell(10);
                cell11.innerHTML =cls;
                cell10.style.backgroundColor = color;
                var cell12 = row && row.insertCell(11);
                cell12.innerHTML ="<button class='del-btn'data-img='"+data[i].image+"' data-id='"+data[i].student_id+"'>Delete</button>"
                var cell13 = row && row.insertCell(12);
                cell13.innerHTML ="<button class='update-btn' data-eid='"+data[i].student_id+"'>Edit</button>";
      } ;

      $.ajax({
        type:"POST",
        url: "../php/pageNumberSearch.php",
        data:{search:searchTerm},
        success: function(d)
        {
            $("#pagination a").remove(); 
            $("#searchpagination a").remove(); 
          var numberOfPage = parseInt(Math.ceil(d/5));
          for(var i=0;i<numberOfPage;i++)
          {
            var className=""
              var id=i+1;
              if(page!=null)
              {
              if(id==page)
              {
                  className="activeBtn";
              }
              else{
                  className="";
              }
            }
            $("#searchpagination").append("<a class='"+className+"' id="+id+">"+id+"</a>")
          }
          
        }
    });

    }
})
}
//search button
$("#searchBtn").on("click",function()
{
loadSearchTable();

});
$(document).on("click","#searchpagination a",function(e)
{
    e.preventDefault();
    var pageId = $(this).attr("id");
    loadSearchTable(pageId);

})
