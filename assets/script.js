//Document.ready will make sure that the entire javascript is prepared before running
$(document).ready(function(){
    //call upon the moment.js to display the current date
    var dayOfWeek = moment().format("dddd");
    var currentDate = moment().format("MMMM Do YYYY");
    var currentInfo = "The Current Date: " + dayOfWeek + ", " + currentDate;
    $("#currentDay").text(currentInfo);

    //call upon the moment.js to display the current time
    function updateTime(){
        var nowHour1 = moment().format("HH");
        var nowMinute= moment().format("mm");
        var nowSec= moment().format("ss")
        var nowTime= nowHour1+ ":" + nowMinute + ":" + nowSec;
        $("#currentTime").text(nowTime);
        
    }
        //Used setInterval to update the timer every second
        setInterval(updateTime, 1000);

    var nowHour = moment().hours();
    for (i=0; i < 9; i++){
        console.log($(".work-hr").eq(i).data("hour"));
        debugger
        if ($(".work-hr").eq(i).data("hour") < nowHour){
            ($(".textarea").eq(i).addClass("past"));
        }
        else if ($(".work-hr").eq(i).data("hour") === nowHour){
            ($(".textarea").eq(i).addClass("present"));
        }
        else {($(".textarea").eq(i).addClass("future"));
    }}
        setInterval(nowHour, 1000);



    




})






