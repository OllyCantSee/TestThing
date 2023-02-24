var score = 0;
      var dot = document.getElementById("dot");
      var scoreCountElem = document.getElementById("score-count");
      var clickSound = document.getElementById("click-sound");

      function randomPosition() {
        var container = document.getElementById("game-container");
        var containerRect = container.getBoundingClientRect();
        var x = Math.floor(Math.random() * (containerRect.width - 20));
        var y = Math.floor(Math.random() * (containerRect.height - 20));
        return { x: x, y: y };
      }

      function updateDotPosition() {
        var pos = randomPosition();
        dot.style.left = pos.x + "px";
        dot.style.top = pos.y + "px";
      }

      dot.addEventListener("click", function () {
        score++;
        scoreCountElem.textContent = score;
        updateDotPosition();
        dot.classList.add("trail");
        setTimeout(function () {
          dot.classList.remove("trail");
        }, 100);
        clickSound.play(); // play sound on click
      });

      var dot = document.getElementById("dot");
      var gameContainer = document.getElementById("game-container");

      // Set the initial position of the dot to the center of the game area
      var initialX =
        gameContainer.offsetWidth / 2 - dot.offsetWidth / 2;
      var initialY =
        gameContainer.offsetHeight / 2 - dot.offsetHeight / 2;
      dot.style.left = initialX + "px";
      dot.style.top = initialY + "px";