var text = '{ "signups" : [' +
'{ "Name":"Leo" , "Date":"7/2/2018" , "Time":"10a-3p" } ]}';

var calendarVar = JSON.parse(text);
var currDay = "";

$(document).ready(function()
{
    $("body").click(function(e) {
        if (e.target.id == "day") {
          var targetName = e.target.getAttribute('name');
          
        }
    });
});