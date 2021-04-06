
/* I need to:
create a timer for the quiz (2 minutes),
the time is deducted by 10 when a question is wrong.
When a question is answered, change to another question.
when questions are answered or time hits 0, game over.
When the game is  over, save initials and score.*/


// Start Button: Once clicked, show questions one at a time 
// and begin timer. Set timer parameters.
var h

var startQuiz = $("#startButton");
var timerID = $("time");

function startQuiz(){
    //start timer
timerId = setInterval(clockTick, 1000);
// show starting time
timerEl.textContent = time;
// once timer is going, go get the questions, but the function must be defined.
getQuestions();
}

// function getQuestions() {
//     // get question from other js file.
//     var 
// }

// startQuiz(function(index, el){
//     el.addEventListener("click", runQuestions)
// });

/* Submit Button: If statement. Once all questions are
answered or timer reaches 0, end quiz and switch to "All Done."*/

// var submitQuiz = $("#submit")

// submitQuiz(function(index, el){
//     el.addEventListener("click", )
// });

//This a for statement to run the timer. If a question is wrong
// add ten seconds.

// function timer(event) {
//     for (var i = 0; i < 18; i++){
//         /* Created variable i, starting at 9am until 1700 (military time) If i is less than 17, add 1 and go until 17. 
//         This creates a way for me to get the value stored in the individual ids.*/

//         // using corresponding key in the localStorage for the input id.
//         console.log(localStorage.getItem(i));
//         console.log($(`#${i}`))
//         /*the template literal (backtick) allows you to put javascript directly inside of a string.*/
//         $(`#${i}`).val(localStorage.getItem(i))
//     }
// }
// storeEvent()

function myFunction() {
var endScreen = document.getElementById("end-screen");
if (endScreen.style.display === "inline"){
    endScreen.style.display === "block";
}else {
endScreen.setAttribute("inline");
}}