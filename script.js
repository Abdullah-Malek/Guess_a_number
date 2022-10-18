"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = "20";
document.querySelector(".score").textContent = "18";

document.querySelector(".guess").value = "18";
console.log(document.querySelector(".guess").value);
*/

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setSecretNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const setStyles = function () {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.padding = "30px 100px";
};

const resetStyles = function () {
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.padding = "30px 70px";
};

let secretNumber = generateSecretNumber();

let score = 20;

let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  //No Value
  if (!guess) {
    setMessage("No Number");
    // document.querySelector(".message").textContent = "No Number:)";

    //Correct Value
  } else if (guess === secretNumber && score >= 1) {
    setMessage("Correct Number");
    // document.querySelector(".message").textContent = "Correct Number";

    setSecretNumber(secretNumber);
    // document.querySelector(".number").textContent = secretNumber;

    setStyles();

    // document.querySelector("body").style.backgroundColor = "#60b347";

    // document.querySelector(".number").style.padding = "30px 100px";

    //Setting of HighScore variable

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // guess is not equal to secret number
  } else if (guess !== secretNumber) {
    if (score <= 1) {
      setMessage("You Lost the game");
      //   document.querySelector(".message").textContent = "You Lost the game";

      setScore(0);
      //   document.querySelector(".score").textContent = 0;
    } else {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";

      score = score - 1;
      setScore(score);
      //   document.querySelector(".score").textContent = score;
    }
  } // else if (guess > secretNumber) {
  //     if (score <= 1) {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     } else {
  //       document.querySelector(".message").textContent = "Too High";

  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     }

  //     //Value lesser
  //   } else if (guess < secretNumber) {
  //     if (score <= 1) {
  //       document.querySelector(".message").textContent = "You Lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     } else {
  //       document.querySelector(".message").textContent = "Too Low";

  //       score = score - 1;
  //       document.querySelector(".score").textContent = score;
  //     }
  //   }
});

//Again

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = generateSecretNumber();

  score = 20;
  setScore(score);
  //   document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "none";

  setMessage("Start guessing");
  //   document.querySelector(".message").textContent = "Start guessing";

  setSecretNumber("?");
  //   document.querySelector(".number").textContent = "?";

  resetStyles();
  //   document.querySelector("body").style.backgroundColor = "#222222";

  //   document.querySelector(".number").style.padding = "30px 70px";
});
