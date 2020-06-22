//Build a calendar 
// moment().format('MMMM Do YYYY, h:mm:ss a'); // June 18th 2020, 10:28:10 am
// moment().format('dddd');                    // Thursday
// moment().format("MMM Do YY");               // Jun 18th 20
// moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
// moment().format();    // 2020-06-18T10:28:10-06:00


//This will keep the javascript from running until everything is ready to go
$(document).ready(function(){
    console.log("hey")

//Using moment.js build a responsive date/time that will be presented in the jumbotron 
const current = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentday").append(current)

//Link the responsive time to the container so that it will respond (change color for past/present/future)
    //I'll do this by adding class by using if statements and then adding addClass
})




