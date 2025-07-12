const questions = [
    {question: "What do you end every line of code with?",
        answerArray: [":", ";", ",", "."],
        answerIndex: 1,
    },
    {question: "What is two plus two?",
        answerArray: ["1", "2", "3", "4"],
        answerIndex: 3,
    },
    {question:"What is the best pizza topping?",
        answerArray: ["pepperoni", "sausage", "bacon", "cheese"],
        answerIndex: 0,
    },
    {question: "What am sky? How does eat food?",
        answerArray: ["Yes", "No", "True", "False"],
        answerIndex: 3,
    }
];

//How I am incrementing through the questions array--this is incremented up by "next" button
let currentlyDisplayedQ = 0;

//cached elements
const questionField = document.getElementById("question-field");
const answer1Button = document.getElementById("answer1");
const answer2Button = document.getElementById("answer2");
const answer3Button = document.getElementById("answer3");
const answer4Button = document.getElementById('answer4');
const nextButton = document.getElementById('next-button');
const feedback = document.getElementById("feedback");
feedback.textContent = "";




function questionFunction() {

questionField.textContent = questions[currentlyDisplayedQ].question;
answer1Button.textContent = questions[currentlyDisplayedQ].answerArray[0];
answer2Button.textContent = questions[currentlyDisplayedQ].answerArray[1];
answer3Button.textContent = questions[currentlyDisplayedQ].answerArray[2];
answer4Button.textContent = questions[currentlyDisplayedQ].answerArray[3];


    answer1Button.disabled = false;
    answer2Button.disabled = false;
    answer3Button.disabled = false;
    answer4Button.disabled = false;
}

//Function to check the given answer against the anaswerIndex and disable the buttons after first try
function checkAnswerFunction(selectedAnswerIndex) {
    if(selectedAnswerIndex === questions[currentlyDisplayedQ].answerIndex){
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect.";
    }
    answer1Button.disabled = true;
    answer2Button.disabled = true;
    answer3Button.disabled = true;
    answer4Button.disabled = true;
}
 
//next question logic that increments value to move through index
nextButton.addEventListener("click", () => {
    currentlyDisplayedQ++;
    if (currentlyDisplayedQ < questions.length) {
        questionFunction();
    }
})


//event listeners which run the check asnwer function
answer1Button.addEventListener('click', () => {
    checkAnswerFunction(0);
} ); 
answer2Button.addEventListener('click', () => {
    checkAnswerFunction(1);
} ); 
answer3Button.addEventListener('click', () => {
    checkAnswerFunction(2);
} ); 
answer4Button.addEventListener('click', () => {
    checkAnswerFunction(3);
} ); 





//start the quiz
questionFunction();

