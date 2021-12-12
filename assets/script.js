// make a timed quiz that stores high scores
// when the start button is clicked the timer starts and i am presented with a question
// when i answer a question the next question loads
// when a question is answered incorrectly time is subtracted from the clock
// when all the questions are answered the timer reaches zero then the game is over
// i can then save my initials and my score
// create a h2 and render question
// 
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
let startButton = document.getElementById('startButton');
let timer = document.getElementById('time');
let question = document.getElementById('question');
let stopTimerId;
let timerLength = 60;
let currentIndex = 0;

const beginQuiz = () => {
    stopTimerId = setInterval(timerFunction, 1000)
    timer.textContent = 'Time: ' + timerLength;


}
const timerFunction = () => {
    timerLength--;
    timer.textContent = 'Time:' + timerLength;
}
const displayQuestion = () => {
    let h2 = document.createElement('h2');
    let currentQuestion = quizQuestions[currentIndex].question;
    h2.textContent = currentQuestion;

    let questionTitle = document.getElementById('questionTitle');
    questionTitle.append(h2);
    
    let options = quizQuestions[currentIndex].options;
    for(var i = 0; i < options.length; i++){
        optionsButton = document.createElement('button');
        let questionOptions = document.getElementById('questionOptions');
        questionOptions.append(optionsButton);
        
        optionsButton.textContent = options[i];
    }
}
function validateAnswer(){
    currentIndex++;
}

startButton.addEventListener('click', function(){
    beginQuiz();
    displayQuestion();
    startButton.setAttribute('class', 'hide');
});