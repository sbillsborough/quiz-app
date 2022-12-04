document.getElementById("start").addEventListener("click", startQuiz);
var unHide = document.getElementById("questions");

var time = 60;

var score = 0;

function correctAnswer() {
  score += 10;
  console.log(score);
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>How do you get 22?</h2>
  <button onclick="incorrectAnswerTwo()">1. 2++</button>
  <button onclick="questionTwo()">2. 2 + 2</button>
  <button onclick="incorrectAnswerTwo()">3. 2 += 2</button>

  </div>`;
}

function questionTwo() {
  score += 10;
  console.log(score);
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>What does 'ES6' stand for?</h2>
  <button onclick="">1. Elegant Syntax 6</button>
  <button onclick="">2. ECMA Script 6</button>
  <button onclick="">3. Elder Scrolls 6</button>

  </div>`;
}

function incorrectAnswer() {
  score -= 10;
  console.log(score);
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>How do you get 22?</h2>
  <button onclick="incorrectAnswerTwo()">1. 2++</button>
  <button onclick="questionTwo()">2. 2 + 2</button>
  <button onclick="incorrectAnswerTwo()">3. 2 += 2</button>
  </div>`;
}

function incorrectAnswerTwo() {
  score -= 10;
  console.log(score);
  document.getElementById("questions").innerHTML = `
  <div class="wrapper">
  <h2>What does 'ES6' stand for?</h2>
  <button onclick="">1. Elegant Syntax 6</button>
  <button onclick="">2. ECMA Script 6</button>
  <button onclick="">3. Elder Scrolls 6</button>

  </div>`;
}

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
}
