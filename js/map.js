var sectorAInfo = "Olives 1:<br>Watered 10 hours ago<br>Harvest in 20 days<br/><br/>Celery 1:<br>Watered 10 hours ago<br>Harvest in 20 days";
var sectorBInfo = "Olives 2:<br>Watered 10 hours ago<br>Harvest in 20 days<br/><br/>Celery 2:<br>Watered 10 hours ago<br>Harvest in 20 days";
var sectorCInfo = "No crops here!";

// Create the tooltips only when document ready
$(document).ready(function()
{
    document.getElementById("sectorA").alt = sectorAInfo;
    document.getElementById("sectorB").alt = sectorBInfo;
    document.getElementById("sectorC").alt = sectorCInfo;
    // We'll target all AREA elements with alt tags (Don't target the map element!!!)
    $('area[alt]').qtip(
    {
        content: {
            attr: 'alt' // Use the ALT attribute of the area map for the content
        },
        
        position: {
            my: 'top center',
            at: 'center'
        }
    });
});