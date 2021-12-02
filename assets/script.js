// make a timed quiz that stores high scores
// when the start button is clicked the timer starts and i am presented with a question
// when i answer a question the next question loads
// when a question is answered incorrectly time is subtracted from the clock
// when all the questions are answered the timer reaches zero then the game is over
// i can then save my initials and my score

var time = startTime;

function startTime() {
    time = setInterval(startTime, 300000);


    var countDownEl = document.getElementById('countDown');
}
document.getElementById('bttn').addEventListener('click', startTime);


var questions = []; {
    question[0] = "Which of the following is a correct variable value?";
    question[1] = "What is an array?";
    question[2] = "Which of the following is the correct wat to name a variable?";
    question[3] = "What is the right way to write an array?";
    question[4] = "Which operator is used to assign a value to a variable?";
}
for( i = 0; i < questions.length; i++) {

}



// Which of the following is a correct variable value?
// Boolean
// "String"
// Number
// All of the above

// What is an array?
// A group of values that are stored in a particular order
// data value that can change depending on conditions or information passed to the program
// A function that displays a defined variable
// A standalone entity, with properties and type

// Which of the following is the correct wat to name a variable?
// Hyphen
// CamelCase
// Parentheses
// Commas

// What is the right way to write an array?
// var = {}
// var = ""
// var = ()
// var = []

// Which operator is used to assign a value to a variable?
// =
// :
// ()
// *

// // <!-- <script> -->
// document.getElementById("bttn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = -->
//   });
//   </script>