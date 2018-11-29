var text = '{ "bulletins" : [' +
'{ "creator":"Leo" , "date":"10/10/2018 - 5:00 PM" , "title":"GARDEN HOSE BROKEN" ,"body":"Garden hose is broken. Do not use it." } ]}';

var bulletinsVar = JSON.parse(text);

var userAuthorized = true;

$(document).ready(function(){
    for (var i=bulletinsVar.bulletins.length-1; i >= 0; i--) {
        $("#bulletinBoard").append("\
        <div class='card card-custom' >\
            <div class='card-header'>"+bulletinsVar.bulletins[i].creator+"-"+bulletinsVar.bulletins[i].date+"</div>\
            <div class='card-body'>\
                <h5 class='card-title'>"+bulletinsVar.bulletins[i].title+"</h5>\
                <p class='card-text'>"+bulletinsVar.bulletins[i].body+"</p>\
            </div>\
        </div>");
    }

    $('#addBulletin').click(function(e) {
        console.log("ASSERT");
        if (userAuthorized == true) {
            var newTitle = document.getElementById("newBulletinTitle").value;
            var newBody = document.getElementById("newBulletinBody").value;
            var toBePushed = new Object();
            toBePushed.creator = "Leo";
            toBePushed.date = "10/10/2018 - 5:00 PM";
            toBePushed.title = newTitle;
            toBePushed.body = newBody;
            bulletinsVar.bulletins.push(toBePushed);

            $("#bulletinBoard").empty();
            for (var i=bulletinsVar.bulletins.length-1; i >= 0; i--) {
                $("#bulletinBoard").append("\
                <div class='card card-custom' >\
                <div class='card-header'>"+bulletinsVar.bulletins[i].creator+"-"+bulletinsVar.bulletins[i].date+"</div>\
                <div class='card-body'>\
                <h5 class='card-title'>"+bulletinsVar.bulletins[i].title+"</h5>\
                <p class='card-text'>"+bulletinsVar.bulletins[i].body+"</p>\
                </div>\
                </div>");
            }
        } else {
            window.alert("Error! You do not have permission to create bulletin posts. Ask the lead gardener to grant you permission.");
        }
        
    });
});

