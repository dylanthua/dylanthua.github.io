var text = '{ "signups" : [' +
'{ "Name":"Ben" , "Date":"7/2/2018" , "Time":"10a-3p" } ]}';

var calendarVar = JSON.parse(text);
var lastDate = "";

$(document).ready(function()
{
    $('#detailModal').modal({ show: false})
    $("body").click(function(e) {
        if (e.target.id == "day") {
          var targetName = "7/" + e.target.getAttribute('name') + "/2018";
          lastDate = targetName;
          $('#detailModal').modal('show');
          $("#harvestCrops").empty();
          if (targetName == "7/10/2018") {
            $("#harvestCrops").append("Harvest Day for:<br>Olives 1<br><br>");
          } else if (targetName == "7/17/2018") {
            $("#harvestCrops").append("Harvest Day for:<br>Celery 1<br>Olives 2<br><br>");
          } else {
            $("#harvestCrops").append("No crops for harvests!<br><br>");
          }

          $("#targetModal").empty();
          $("#targetModal").append(targetName);

          $("#listOfNames").empty();
          var someoneAround = false;
          for (var i=0; i<calendarVar.signups.length; i++) {
              if (calendarVar.signups[i].Date == targetName) {
                  someoneAround = true;
                  var appending  = calendarVar.signups[i].Name + " is available at " + calendarVar.signups[i].Time+"<br>";
                  $("#listOfNames").append(appending);
              }
          }

          if (someoneAround == false) {
            $("#listOfNames").append("No one is around to help.");
          }

        }
    });

    $('#addTime').click(function(e) {
        var newName = document.getElementById("newName").value;
        var newDate = lastDate;
        var newTime = document.getElementById("newTime").value;
        var toBePushed = new Object();
        toBePushed.Name = newName;
        toBePushed.Date = newDate;
        toBePushed.Time = newTime;
        calendarVar.signups.push(toBePushed);
        
    });
});