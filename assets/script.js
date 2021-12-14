// make a timed quiz that stores high scores
// when the start button is clicked the timer starts and i am presented with a question
// when i answer a question the next question loads
// when a question is answered incorrectly time is subtracted from the clock
// when all the questions are answered the timer reaches zero then the game is over
// i can then save my initials and my score
// create a h2 and render question

//list array of questions, options and answers 
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
// variable reference to DOM elements
let startButton = document.getElementById('startButton');
let timer = document.getElementById('time');
let question = document.getElementById('question');
let questionOptions = document.getElementById('questionOptions');
let answerAlert = document.getElementById('answerAlert');

// quiz status variables
let stopTimerId;
let timerLength = 60;
let currentIndex = 0;

const beginQuiz = () => {
    // starts timer
    stopTimerId = setInterval(timerFunction, 1000)
    // renders timer to the user
    timer.textContent = 'Time: ' + timerLength;

    // hide homepage when start button is clicked
    let homePage = document.getElementById('homePage');
    homePage.setAttribute('class', 'hide');


}
const timerFunction = () => {
    timerLength--;
    timer.textContent = 'Time:' + timerLength;
}
function displayQuestion() {
    // renders next question
    let h2 = document.createElement('h2');
    // retrieves current question from questions array                          
    let currentQuestion = quizQuestions[currentIndex].question;
    h2.textContent = currentQuestion;

    // renders current question
    let questionTitle = document.getElementById('questionTitle');
    questionTitle.append(h2);

    // clears previous question and options
    // questionTitle.innerHTML = "";
    questionOptions.innerHTML = "";
    
    // loops over options
    let options = quizQuestions[currentIndex].options;
    for(var i = 0; i < options.length; i++){
        // creates a button for each option
        optionsButton = document.createElement('button');
        let questionOptions = document.getElementById('questionOptions');
        questionOptions.append(optionsButton);
        
        optionsButton.textContent = options[i];

        questionOptions.onclick = validateAnswer;
    }
}
function validateAnswer(){
    // checks user answer choice
    if(this.value !== quizQuestions[currentIndex].answer) {
        answerAlert.textContent = "Your Answer is Incorrect";
        timer -= 5;
    } else {
        answerAlert.textContent = "Your Answer is Correct!";
    }
    answerAlert.removeAttribute('class');
    currentIndex++;

    // conditional statement that cycles all the questions
    if(currentIndex === questionOptions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}
function endQuiz() {
    let endQuiz = document.getElementById('lastPage');

    // hides questions div and displays lastPage div
    endQuiz.removeAttribute('class');

    clearInterval(stopTimerId);
}
function saveScores() {
    let playerInitials = initials.value();
}
function renderScores() {
    var quizScores = JSON.parse
}

startButton.addEventListener('click', function(){
    beginQuiz();
    displayQuestion();
    startButton.setAttribute('class', 'hide');
});