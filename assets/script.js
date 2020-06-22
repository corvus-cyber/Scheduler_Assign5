//Document.ready will make sure that the entire javascript is prepared before running
$(document).ready(function(){
    //call upon the moment.js to display the current date
    var dayOfWeek = moment().format("dddd");
    var currentDate = moment().format("MMMM Do YYYY");
    var currentInfo = "The Current Date: " + dayOfWeek + ", " + currentDate;
    $("#currentDay").text(currentInfo);

    //call upon the moment.js to display the current time
    var nowHour = moment().format("H HH");
    var nowMinute= moment().format("m mm");
    var nowSec= moment().format("s ss")
    var nowTime= nowHour + ":" +nowMinute + ":" + nowSec;
    $("#currentTime").text(nowTime);

})




