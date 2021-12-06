// make a timed quiz that stores high scores
// when the start button is clicked the timer starts and i am presented with a question
// when i answer a question the next question loads
// when a question is answered incorrectly time is subtracted from the clock
// when all the questions are answered the timer reaches zero then the game is over
// i can then save my initials and my score
var currentQuestionIndex = 0;
var time;
// DOM variables
var homePage = document.getElementById("homePage");
var questions = document.getElementById("questions");
var optionsEl = document.getElementById("options")
var lastPage = document.getElementById("lastPage");
var startButton = document.getElementById("startButton");
var submitButton = document.getElementById("submit");
var optionsEL = document.getElementById("quizQuestions.options");

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
];


function startQuiz() {
    // hide homePage
    var startQuizEl = document.getElementById("homePage");
    startQuizEl.setAttribute("class", "hide");

    // reveal questions
    questions.removeAttribute("class");
    // timer code block
    time = setInterval(timerCountdown, 300000);

    getQuizQuestions();
}
function getQuizQuestions() {
    var currentQuestion = quizQuestions[currentQuestionIndex];

    var questions = document.getElementById("questions");
    questions.textContent = currentQuestion.quizQuestion;

    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(function(options, i) {

        var optionsBranch = document.createElement("button");
        optionsBranch.setAttribute("class", "options");
        optionsBranch.setAttribute("value", options);

        optionsBranch.textContent = i + 1 + "." + options;

        optionsBranch.onclick = questionsClick;

        optionsEl.appendChild(optionsBranch);
    });
}
function questionsClick() {
    if (this.value !== quizQuestions[currentQuestionIndex].answer) {
        console.log("Your selected answer is incorrect. Please try again")
    } else {
        console.log("Your answer is Correct!")
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        finishedQuiz();
    } else {
        getQuizQuestions();
    }
}
function finishedQuiz() {
    clearInterval(time);

    var lastPage = document.getElementById("lastPage");
    lastPage.removeAttribute("class");

    quizQuestions.setAttribute("class", "hide");

}
function timerCountdown() {
    time--;
    time.textContent = time;
    if(timerCountdown === 0) {
        finishedQuiz();
    }
}

startButton.onclick = startQuiz;