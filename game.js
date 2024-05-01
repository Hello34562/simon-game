

$(document).keypress(function(e) {
  //console.log(e);
  
  var t = e.key;
  
  console.log(t);
  switch (t) {
      case "a":
          
          nextSequence();
          
          break;

  }
});


var level=0;

  
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

//2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
var userChosenColour = $(this).attr("id");

//4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
userClickedPattern.push(userChosenColour);

//console.log(userClickedPattern);
playsound(userChosenColour);
animatepress(userChosenColour);
checkanswer(userClickedPattern.length-1);


});
console.log(userClickedPattern);
function playsound(name){

var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}
function animatepress(currentColour){
$("#" + currentColour).addClass("pressed");
var delayInMilliseconds = 100//1 second

setTimeout(function() {
$("#" + currentColour).removeClass("pressed");
//your code to be executed after 1 second
}, delayInMilliseconds);

}
function nextSequence() {
userClickedPattern=[];

var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

$("h1").text("LEVEL"+" " +level);
level++;


}
function checkanswer(currentlevel){
if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
  console.log("success");
  if (arraysAreEqual(userClickedPattern, gamePattern)) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }


}
else{
  
 
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");


setTimeout(function() {
$("body").removeClass("game-over");
//your code to be executed after 1 second
}, 100);
$("h1").text("Game Over, Press Any Key to Restart");
$(document).keypress(function(e){
  startover();
});
 

}
}
function startover(){
  gamePattern=[];
  var level=0;
}

