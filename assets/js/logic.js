document.getElementById("start").addEventListener("click", startQuiz);
var unHide = document.getElementById("questions");
var counting = document.getElementById("time");

var time = 60;

// var timer = setInterval(function () {
//   document.body.innerText = time;
//   console.log(time);
//   time--;

//   if (time === 0) {
//     clearTimeout(timer);
//   }
// }, 1000);

var score = 0;

function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>Which of these is NOT a valid JavaScript data type?</h2>
  <button onclick="correctAnswer()">1. Variable</button>
  <button onclick="incorrectAnswer()">2. String</button>
  <button onclick="incorrectAnswer()">3. Number</button>
  <button onclick="incorrectAnswer()">4. Null</button>
  </div>
  `;
  unHide.classList.remove("hide");

  var timer = setInterval(function () {
    counting.innerText = time;
    console.log(time);
    time--;

    if (time === 0) {
      clearTimeout(timer);
    }
  }, 1000);
}

function correctAnswer() {
  score += 10;
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>How do you get "22"?</h2>
  <button onclick="incorrectAnswerTwo()">1. 2++</button>
  <button onclick="correctAnswerTwo()">2. "2" + "2"</button>
  <button onclick="incorrectAnswerTwo()">3. 2 += 2</button>

  </div>`;
}

function incorrectAnswer() {
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>How do you get "22"?</h2>
  <button onclick="incorrectAnswerTwo()">1. 2++</button>
  <button onclick="correctAnswerTwo()">2. "2" + "2"</button>
  <button onclick="incorrectAnswerTwo()">3. 2 += 2</button>
  </div>
  `;
}

function correctAnswerTwo() {
  score += 10;
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>What does 'ES6' stand for?</h2>
  <button onclick="finalAnswerIncorrect()">1. Elegant Syntax 6</button>
  <button onclick="finalAnswerCorrect()">2. ECMA Script 6</button>
  <button onclick="finalAnswerIncorrect()">3. Elder Scrolls 6</button>
  </div>
  `;
}

function incorrectAnswerTwo() {
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>What does 'ES6' stand for?</h2>
  <button onclick="finalAnswerIncorrect()">1. Elegant Syntax 6</button>
  <button onclick="finalAnswerCorrect()">2. ECMA Script 6</button>
  <button onclick="finalAnswerIncorrect()">3. Elder Scrolls 6</button>
  </div>
  `;
}

function finalAnswerCorrect() {
  score += 10;
  localStorage.setItem("highScore", score);
  var highScore = localStorage.getItem("highScore");
  console.log(`High score: ${highScore}`);
  document.getElementById("questions").innerHTML = `
  <div id="end-screen">
      <h2>All done!</h2>
      <p>Your final score is <span id="final-score">${highScore}</span>.</p>
      <p>
        Enter initials: <input type="text" id="initials" max="3" />
        <button id="submit" onclick="submitScore()">Submit</button>
      </p>
    </div>
  `;
  // window.location = "highscores.html";
}

function finalAnswerIncorrect() {
  localStorage.setItem("highScore", score);
  var highScore = localStorage.getItem("highScore");
  console.log(`High finalpage score: ${highScore}`);
  document.getElementById("questions").innerHTML = `
  <div id="end-screen">
      <h2>All done!</h2>
      <p>Your final score is <span id="final-score">${highScore}</span>.</p>
      <p>
        Enter initials: <input type="text" id="initials" max="3" />
        <button id="submit" onclick="submitScore()">Submit</button>
      </p>
    </div>
  `;
  // window.location = "highscores.html";
}

function submitScore(initials) {
  var userInitials = document.getElementById("initials").value;
  localStorage.setItem("initials", userInitials);
  window.location = "highscores.html";
}
