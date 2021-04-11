var currentQuestionIndex = 0;
var time = 120;
var timerInterval;

var quizQuestions = document.getElementById("listedQuestions");
var timerID = document.getElementById("timerID");
var quizAnswers = document.getElementById("quizAnswers");
var questionTitle = document.getElementById("questionTitle");
var submitButton = document.getElementById("submitButton");
var startButton = document.getElementById("startButton");
var yourInitials = document.getElementById("yourInitials");
var autoFeedback = document.getElementById("feedback");

function beginQuiz() {
    // hide start screen
    var startQuiz = document.getElementById("listedQuestions");
    startQuiz.setAttribute("class", "hide");
  
    // un-hide questions section
    quizQuestions.removeAttribute("class");
  
    // start timer
    timerInterval = setInterval(timerUpdate, 1000);
  
    // show starting time
    timerID.textContent = time;
  
    showQuestions();
}

function showQuestions() {
    // get current question object from array
    var currentQuestion = listedQuestions[currentQuestionIndex];
  
    // update title with current question
    var questionTitle = document.getElementById("questionTitle");
    questionTitle.textContent = currentQuestion.title;
  
    // clear out any old answer choices
    quizAnswers.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var newButton = document.createElement("button");
      newButton.setAttribute("class", "choice");
      newButton.setAttribute("value", choice);
  
      newButton.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      newButton.onclick = questionClick;
  
      // display on the page
      quizAnswers.appendChild(newButton);
    });
  }

  function questionClick() {
    // check if user guessed wrong
    if (this.value !== listedQuestions[currentQuestionIndex].correct) {
      // penalize time
      time -= 10;
  
      if (time < 0) {
        time = 0;
      }

      // display new time on page
      timerID.textContent = time;
      //Give answer feedback
      autoFeedback.textContent = "Sorry!";
    } else {
      autoFeedback.textContent = "Nice Work!";
    }
  
    // flash right/wrong feedback on page for half a second
    autoFeedback.setAttribute("class", "feedback");
    setTimeout(function() {
      autoFeedback.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (currentQuestionIndex === listedQuestions.length) {
      endQuiz();
    } else {
      showQuestions();
    }
  }
  function endQuiz() {
    // stop timer
    clearInterval(timerInterval);
  
    // show end screen
    var endScreen = document.getElementById("endScreen");
    endScreen.removeAttribute("class");
  
    // show final score
    var finalScore = document.getElementById("finalScore");
    finalScore.textContent = time;
  
    // hide questions section
    quizQuestions.setAttribute("class", "hide");
  }

  function timerUpdate() {
    // update time
    time--;
    timerID.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      endQuiz();
    }
  }

  function saveScore() {
    // get value of input box
    var yourInitials = document.querySelector("#yourInitials");
    var yourInitials = yourInitials.value.trim();
  
    // make sure value wasn't empty
    if (yourInitials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newestScore = {
        score: time,
        yourInitials: yourInitials
      };
  
      // save to localstorage
      highscores.push(newestScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "score-page.html";
    }
  }

  function enterKey(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveScore();
    }
  }
  
  // user clicks button to submit initials
  submitButton.onclick = saveScore;
  
  // user clicks button to start quiz
  startButton.onclick = beginQuiz;
  
  yourInitials.onkeyup = enterKey;