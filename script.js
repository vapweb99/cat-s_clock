var noon = 12;
var wakeuptime = 7;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 17;

// live clock time on webpage
var showCurrentTime = function (){
	var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
   // 12 hour clock format AM & PM
    if (hours >= noon) {
       meridian = "PM";
    }
   // 12 hour clock time
    if (hours > noon) {
    	hours = hours-12;
    }
   // set minutes for displaying perfect time like 01,02,08,09
   if (minutes < 10) {
   	    minutes = "0" + minutes;
   }
   // set seconds similarly
   if (seconds < 10) {
   	     seconds = "0" + seconds;
   }
   var clockTime = hours + ":" + minutes + ":" + seconds + meridian + "!";

   clock.innerText = clockTime;
}

// to update and run the clock on its own and changes in pictures with messages
var updateClock = function() {
   var time = new Date().getHours();
   var messageText;
   var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

   var timeEventJS = document.getElementById("timeEvent");
   var lolcatImageJS = document.getElementById("lolcatImage");

   if (time == partytime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "Let's party!";
   }

   else if (time == wakeuptime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Wake Up!";
   }

   else if (time == lunchtime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Let's have some lunch!";
   }

   else if (time == naptime){
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "Sleep tight!";
   }

   else if (time < noon) {
      image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
      messageText = "Good morning!";
   }

   else if (time >= evening){
      image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
      messageText = "Good evening!";
   }

   else{
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
      messageText = "Good afternoon!";
   }

     console.log(messageText); 
     timeEventJS.innerText = messageText;
     lolcatImage.src = image;

     showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// part time button to work

var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function(){
   if (partytime < 0){
      partytime = new Date().getHours();
      partyTimeButton.innerText = "Party Over!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }

   else{
      partytime = -1;
      partyTimeButton.innerText = "Party Time!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};

partyButton.addEventListener("click",partyEvent);


// Activates wakeup time

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function(){
      wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates lunch time selector

var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function(){
   lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates nap time selector

var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function(){
   naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change",napEvent);