let questionIndex = 0;
let timerInterval;
let time = document.getElementById("time");
let scoreCount = 0;
let gameCount = 0;
let highScore = 0;
let userScore = 0;

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

// add time out message 

function showQuestionScreen() {
    // hide the paragraph.show and button #show
    // show the paragraph section and the question ordered list
    // only the first question and options to be shown - hide all others

    const startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    quizQuestionsScreen.setAttribute("class", "show");

    setTime();

    // Multiple ordered lists are generated - these need to be hidden and eventually fixed
    ol4.setAttribute("class", "ol4 hide");
    ol3.setAttribute("class", "ol3 hide");
    ol2.setAttribute("class", "o12 hide");
    ol1.setAttribute("class", "ol1 hide");
}

function endOfQuiz() {

    // hide questions section
    // show end screen - is this your final score - if yes display highest 5 scores if no play another game
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

    renderLastRegistered();

    const maxScore = 5;
    const gameScore = document.getElementById("game-score");
    gameScore.textContent = scoreCount + " / " + maxScore;

    // Select the input element to get the value of the user initials
    document.getElementById("submit").addEventListener("click", function () {
        //console.log(document.getElementById("initials").value)
        let userInitials = document.getElementById("initials").value;
        userScore = userInitials + " - " + gameScore;
    });

    localStorage.setItem("scoreCount", scoreCount);
    renderLastRegistered();

    gameCount++;
    return gameCount;
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

// The correct answer correctChoice can be one of 5 objects, starting with the first or 0 in the questions array.
let i = 0;

// Add an event listener to capture the the user selection
document.querySelector(".buttons").addEventListener("click", function (event) {
    // the event is stored in a variable
    let selectedAnswer = event.target.textContent;
    // Determine if the user selection matches the object property correctChoice and then carry out the respective actions
    if (selectedAnswer === questions[i].correctChoice) {
        scoreCount++;
        alert("Correct Answer!");
    } else {
        // scoreCounter--; // not for score but for the timer
        alert("Incorrect Answer! The correct answer is " + questions[i].correctChoice + ".");
    }

    // Once the loop has completed then display the next questions

    showNextQuestion();
    // The index is incremented to correspond to the next question
    i++;
});





// add condition to stop counter if all questions are answered before time out

// add a message saying the count has stopped

// add a message giving results

// add feature if correct add five seconds

// add feature if incorrect subtract five seconds


