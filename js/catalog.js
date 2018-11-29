$(document).ready(function(){
    console.log("HI");
    $("#olives1Water").click(function(e) {
        console.log("1");
        $("#olives1body").empty();
        $("#olives1body").append("&nbsp;&nbsp;&nbsp;Watered 0 hours ago<br>\
        &nbsp;&nbsp;&nbsp;Harvest in 20 days<br>\
        &nbsp;&nbsp;&nbsp;Crop yield 90 bushels<br><br>\
        ");
    });

    $('#celery1Water').click(function(e) {
        $("#celery1body").empty();
        $("#celery1body").append("&nbsp;&nbsp;&nbsp;Watered 0 hours ago<br>\
        &nbsp;&nbsp;&nbsp;Harvest in 20 days<br>\
        &nbsp;&nbsp;&nbsp;Crop yield 90 bushels<br><br>\
        ");
    });

    $('#olives2Water').click(function(e) {
        $("#olives2body").empty();
        $("#olives2body").append("&nbsp;&nbsp;&nbsp;Watered 0 hours ago<br>\
        &nbsp;&nbsp;&nbsp;Harvest in 20 days<br>\
        &nbsp;&nbsp;&nbsp;Crop yield 90 bushels<br><br>\
        ");
    });

    $('#celery2Water').click(function(e) {
        $("#celery2body").empty();
        $("#celery2body").append("&nbsp;&nbsp;&nbsp;Watered 0 hours ago<br>\
        &nbsp;&nbsp;&nbsp;Harvest in 20 days<br>\
        &nbsp;&nbsp;&nbsp;Crop yield 90 bushels<br><br>\
        ");
    });
});