// make a timed quiz that stores high scores
// when the start button is clicked the timer starts and i am presented with a question
// when i answer a question the next question loads
// when a question is answered incorrectly time is subtracted from the clock
// when all the questions are answered the timer reaches zero then the game is over
// i can then save my initials and my score

// DOM variables
var homePage = document.getElementById("home-page");
var quizPage = document.getElementById("quiz-page");
var lastPage = document.getElementById("last-page");

var quizQuestions = [
    {
        question: "Which of the following is a correct variable value?",
        options: [ "Boolean", "String", "Number", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is an array?",
        options: ["A group of values that are stored in a particular order",
                "data value that can change depending on conditions or information passed to the program",
                "A function that displays a defined variable",
                "A standalone entity, with properties and type"],
        answer: "A group of values that are stored in a particular order"
    },
    {
        question: "Which of the following is the correct way to name a variable?",
        options: ["Hyphen", "CamelCase", "Parentheses", " Commas"],
        answer: "CamelCase"
    },
    {
        question:  "What is the right way to create an array?",
        options: ["{}", "''", "()", "[]"],
        answer: "[]"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [ "=", ":", "()", ";"],
        answer: "="
    }
]
function startQuiz() {
    var startQuiz = document.getElementById('quiz-page');
    startQuiz.setAttribute("id", "hide");

    quizPage.removeAttribute("id");
    // timer code block
    time = setInterval(startTime, 300000);

    getquizQuestions();
}
function getquizQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    
}





//     var countDownEl = document.getElementById('countDown');
// }
// document.getElementById('bttn').addEventListener('click', startTime);



// for( i = 0; i < questions.length; i++) {

// }

// // <!-- <script> -->
// document.getElementById("bttn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = -->
//   });
//   </script>
// function startTime() {
    // time = setInterval(startTime, 300000);