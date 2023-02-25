var score = 0;
var dot = document.getElementById("dot");
var scoreCountElem = document.getElementById("score-count");
var clickSound = document.getElementById("click-sound");
var timeLeftElem = document.getElementById("time-remaining-count"); // update ID here

var timeLeft = 3; // set the initial time left to 3 seconds
var timerId = setInterval(countdown, 850); // start the countdown timer

function randomPosition() {
  var container = document.getElementById("game-container");
  var containerRect = container.getBoundingClientRect();
  var x = Math.floor(Math.random() * (containerRect.width - 20));
  var y = Math.floor(Math.random() * (containerRect.height - 20));
  return { x: x, y: y };
}

function resetDot() {

var gameContainer = document.getElementById("game-container");
var initialX =
  gameContainer.offsetWidth / 2 - dot.offsetWidth / 2;
var initialY =
  gameContainer.offsetHeight / 2 - dot.offsetHeight / 2;
dot.style.left = initialX + "px";
dot.style.top = initialY + "px";

}

function updateDotPosition() {
  var pos = randomPosition();
  dot.style.left = pos.x + "px";
  dot.style.top = pos.y + "px";
}

function countdown() {
  timeLeft--;
  timeLeftElem.textContent = timeLeft;

  if (timeLeft == 0) {
    clearInterval(timerId); // stop the timer
    dot.removeEventListener("click", handleClick); // disable the click event
    timeLeftElem.textContent = `Time's up!`;
    
    var loseSound = new Audio("lose.mp3"); // create a new Audio object with the lose.mp3 file
    loseSound.play(); // play the lose.mp3 file

    resetDot(); //cakls reset dot
  }
}

function handleClick() {
  score++;
  scoreCountElem.textContent = score;
  updateDotPosition();
  dot.classList.add("trail");
  setTimeout(function () {
    dot.classList.remove("trail");
  }, 100);
  clickSound.play(); // play sound on click
  timeLeft = 3; // reset the timer
}

dot.addEventListener("click", handleClick);

// Set the initial position of the dot to the center of the game area
var gameContainer = document.getElementById("game-container");
var initialX =
  gameContainer.offsetWidth / 2 - dot.offsetWidth / 2;
var initialY =
  gameContainer.offsetHeight / 2 - dot.offsetHeight / 2;
dot.style.left = initialX + "px";
dot.style.top = initialY + "px";
