const scores = [];
const ol = document.getElementById("highscores");
let highestScore = 0;

const highScore1Li = document.createElement("li");
const highScore2Li = document.createElement("li");
const highScore3Li = document.createElement("li");
const highScore4Li = document.createElement("li");
const highScore5Li = document.createElement("li");


function displayFiveHighestScores() {

    if (gameCount < 5) {
        for (let i = 1; i <= 5; i++) {
            //push  xxx to the array
            scores.push(scoreCount);
            document.getElementsByClassName("highscore")[i].textContent = scores[i];
        }
    } else {
        //push scoreCount to the array
        scores.push(scoreCount);
        //sort the array in descending order largest value to smallest value
        scores.sort(function (a, b) { return b - a });
        //remove the smallest value
        scores.pop()
        for (let i = 0; i <= scores.length; i++) {
            document.getElementsByClassName("highscore")[i].textContent = scores[i];
        }
    }
}