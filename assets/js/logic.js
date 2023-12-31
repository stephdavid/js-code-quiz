let questionIndex = 0;
let timerInterval;
let time = document.getElementById("time");
let score = 0;
let gameCount = localStorage.getItem("gameCount") || 0;
let highScore = 0;
let latestScore = "";
let initialsArr = [];

const scoresString = localStorage.getItem("scores");
const scores = scoresString ? JSON.parse(scoresString) : [];

//Countdown timer
const main = document.getElementById("main");

let secondsLeft = 30;

function setTime() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = secondsLeft + " seconds left till quiz is over.";

        if (secondsLeft === 0) {
            let timesUp = confirm("Time's Up! Start again?");
            clearInterval(timerInterval);
            if (timesUp) {
                quizQuestionsScreen = document.getElementById("questions");
                quizQuestionsScreen.setAttribute("class", "hide");
                startScreen = document.getElementById("start-screen");
                startScreen.setAttribute("class", "show");
                startTimer();
            } else {
                alert(Ok.Bye)
                return;
            }
        }

    }, 1000);
    return timerInterval;
}

// Function to display the numbers counting down
function displayCountdown() {
    time.textContent = " ";
}

function showQuestionScreen() {
    // hide the paragraph.show and button #show
    // show the paragraph section and the question ordered list
    // only the first question and options to be shown - hide all others

    const startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    quizQuestionsScreen.setAttribute("class", "show");
    questionTitle1.setAttribute("class", "show");

    setTime();

    // Multiple ordered lists are generated - these need to be hidden and eventually fixed
    ol4.setAttribute("class", "ol4 hide");
    ol3.setAttribute("class", "ol3 hide");
    ol2.setAttribute("class", "o12 hide");
    ol1.setAttribute("class", "ol1 hide");
}

function displayScore() {
    const quizQuestionsScreen = document.getElementById("questions");
    quizQuestionsScreen.setAttribute("class", "hide");
    const endScreen = document.getElementById("end-screen");
    endScreen.setAttribute("class", "show");

    const maxScore = 5;
    const gameScore = document.getElementById("game-score");
    gameScore.textContent = score + " / " + maxScore;

    // Select the input element to get the value of the user initials
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault;
        let initials = document.getElementById("initials").value;
        userScoreTxt = initials + " - " + score;

        initialsArr.push(initials);

        // initials placed in local storage to picked up in scores.js
        const stringifiedInitialsArr = JSON.stringify(initialsArr);
        initialsArr = localStorage.setItem("initials", stringifiedInitialsArr);

    });

    gameCount++;

    // store updated gameCount in local storage to picked up in scores.js
    latestGameCount = localStorage.setItem("gameCount", gameCount.toString());

    let button = document.getElementById("submit");
    let input = document.getElementById("initials");

    button.disabled = true;
    input.addEventListener("change", stateHandle);

    function stateHandle() {
        if (document.getElementById("initials").value === "") {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }

    document.getElementById("submit").onclick = function () {
        location.href = "highscores.html";
    };
}

function endOfQuiz() {
    // inform the user that the quiz is over
    // shut down and hide the timer
    alert("End of Quiz!");
    // stop timer
    clearInterval(timerInterval);
    // hide Timer:
    const showTime = document.querySelector(".timer");
    showTime.textContent = "";
    time.textContent = " ";
    displayScore();
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
        scores.push(score);

        // place the updated scores array into local storage
        const stringifiedScores = JSON.stringify(scores);
        localStorage.setItem("scores", stringifiedScores);

        endOfQuiz();
    }
}

document.getElementById("start").addEventListener("click", function (event) {
    event.preventDefault;
    showQuestionScreen();
});

// The correct answer correctChoice can be one of 5 objects, starting with the first or 0 in the questions array.
let i = 0;

// Add an event listener to capture the the user selection
document.querySelector(".buttons").addEventListener("click", function (event) {
    event.preventDefault;
    // the event is stored in a variable
    let selectedAnswer = event.target.textContent;
    // Determine if the user selection matches the object property correctChoice and then carry out the respective actions
    if (selectedAnswer === questions[i].correctChoice) {
        score++;
        alert("Correct Answer!");
        // Add 10 seconds to the timer for a correct answer
        secondsLeft += 10;
    } else {

        alert("Incorrect Answer! The correct answer is " + questions[i].correctChoice + ".");
        // Subtract 10 seconds from the timer for an incorrect answer
        secondsLeft -= 10;
    }

    // Once the loop has completed then display the next question
    showNextQuestion();
    // The index is incremented to correspond to the next question
    i++;
});