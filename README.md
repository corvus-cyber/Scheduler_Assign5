# Scheduler_Assign5

# Purpose:
The purpose of this assignment was to create a workday scheduler that would be color-coded based on whether the hour was past, present or future, changing as the day progresses. This scheduler would allow the user to input text into the given rows, and upon clicking the save button, it should upload it into the localStorage and then display it back in that row should the user leave the website only to return at a later point in time. I built this project to apply my newfound knowledge in Javascript, Jquery, and server-side API's.  

# Process
* First I developed the html, building rows and columns pulling from the pre-designed css format. I would later use Jonathan's (instructor) help in figuring out why the css formatting wasn't properly showing up. 
* I then copied the code for the moment.js and pasted it into its own javascript file so that I could pull info from it at a later time. 
* I then used the ready function to make sure that the color-coding and clock wouldn't be displayed until they were both ready. 
* I then called upon the moment.js to display the current date
* After that I built a function to display the current time, using setInterval to run the function once every second to update the time.
* Then I used a for loop to take the data from every row and use it to check against nowHour. Whether it the data is greater than, less, then or equal to nowHour will decide what color the textarea will be given. 
* Finally, I built two functions, each with a for loop that would take the data-hour from every row, make it the key, and use the user-placed content within the text area as the value for localStorage. This way the user based content will be returned to the proper row that it was originally placed in.

# Problems I Encountered:
* Scoping: on multiple occasions I tried to use a variable that I declared in a function in an entirely seperate function
* Building a live clock. I needed to use Stack overflow to discover that I could use a setInterval to run the clock function every second to create the illusion of a live clock. 
* CSS styling: Because I didn't build the html exactly like the example I was unable to get all of the predesigned formatting in the css. I needed to go to the instructor to resolve this issue. 
* 

# What I Learned: 
* How to download and apply server-side api's.
* Other uses for setInterval
* Using data within the html to distinguish them within javascript (such as for color coding rows and saving and displaying content from localStorage).

# Link:
https://corvus-cyber.github.io/Scheduler_Assign5/

# Screenshot: 
![screenshot of the application](./assets/screenshot/Workday-scheduler.png)

