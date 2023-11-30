let questionIndex = 0;
let timerInterval;
var time = document.getElementById("time");

function showQuestionScreen() {
    // hide the paragraph.show and button #show
    // show the paragraph section and the question ordered list
    // only the first question and options to be shown - hide all others

    const startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    quizQuestionsScreen.setAttribute("class", "show");

    // Multiple ordered lists are generated - these need to be hidden and eventually fixed
    ol4.setAttribute("class", "ol4 hide");
    ol3.setAttribute("class", "ol3 hide");
    ol2.setAttribute("class", "o12 hide");
    ol1.setAttribute("class", "ol1 hide");
}

function endOfQuiz() {

    // hide questions page
    // show end screen - is this your final score
    alert("End of Quiz!");
    // stop timer
    clearInterval(timerInterval);
    // hide Timer:
    const showTime = document.querySelector(".timer");
    showTime.textContent = "";
    time.textContent = " ";

    const quizQuestionsScreen = document.getElementById("questions");
    quizQuestionsScreen.setAttribute("class", "hide");
    const endScreen = document.getElementById("end-screen");
    endScreen.setAttribute("class", "show");


}

function showNextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
        questionTitle1.textContent = questions[questionIndex].question;

        choice1a.textContent = choice2a.textContent;
        choice1b.textContent = choice2b.textContent;
        choice1c.textContent = choice2c.textContent;
        choice1d.textContent = choice2d.textContent;

        choice2a.textContent = choice3a.textContent;
        choice2b.textContent = choice3b.textContent;
        choice2c.textContent = choice3c.textContent;
        choice2d.textContent = choice3d.textContent;

        choice3a.textContent = choice4a.textContent;
        choice3b.textContent = choice4b.textContent;
        choice3c.textContent = choice4c.textContent;
        choice3d.textContent = choice4d.textContent;

        choice4a.textContent = choice5a.textContent;
        choice4b.textContent = choice5b.textContent;
        choice4c.textContent = choice5c.textContent;
        choice4d.textContent = choice5d.textContent;

    } else {
        endOfQuiz();
    }
}


document.getElementById("start").addEventListener("click", function () {
    showQuestionScreen();
});

let i = 0;
let scoreCounter = 0;

document.querySelector(".buttons").addEventListener("click", function (event) {
    // Get the user-selected answer
    let selectedAnswer = event.target.textContent;

    if (selectedAnswer === questions[i].correctChoice) {
        scoreCounter++;
        alert("Correct Answer!");
    } else {
        scoreCounter--;
        alert("Incorrect Answer! The correct answer is " + questions[i].correctChoice + ".");
    }

    showNextQuestion();
    i++;
});



document.querySelector(".buttons").addEventListener("click", function () {
    let i = 0;
    //questions[i].correctChoice;

    let scoreCounter = 0;

    if (questions[i].hasOwnProperty(correctChoice) && questions[i].correctChoice === true) {
        scoreCounter++
        alert("Correct Answer!")
        showNextQuestion();
    } else {
        scoreCounter--
        alert("Incorrect Answer! The correct answer is " + questions[0].correctChoice + ".")
        showNextQuestion();
    }
    i++;

});
// Countdown timer

const main = document.getElementById("main");

let secondsLeft = 30;

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left till quiz is over.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            //  sendMessage();
        }

    }, 1000);
    return timerInterval;
}

// Function to display the numbers counting down
function displayCountdown() {
    time.textContent = " ";
}

let intervalId = setTime();


// add time out message 

// add condition to stop counter if all questions are answered before time out

// add a message saying the count has stopped

// add a message giving results

// add feature if correct add five seconds

// add feature if incorrect subtract five seconds


