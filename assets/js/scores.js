const scores = [];
const ol = document.getElementById("highscores");
let highestScore = 0;
let gameScore = ""

const highScore1Li = document.createElement("li");
const highScore2Li = document.createElement("li");
const highScore3Li = document.createElement("li");
const highScore4Li = document.createElement("li");
const highScore5Li = document.createElement("li");


let latestScore = localStorage.getItem("gameScore");
console.log(latestScore);

let latestGameCount = localStorage.getItem("gameCount");
console.log(latestGameCount);

function displayFiveHighestScores() {

    if (latestGameCount < 5) {
            //push latest score to the array
            scores.push(latestScore);
    } else {
        //push latest score to the to the array
        scores.push(latestScore);
        //sort the array in descending order largest value to smallest value
        scores.sort(function (a, b) {
            return b - a
        });
        //remove the smallest value in the array
        scores.slice(-1,1) // remove only the last element - supposedly faster than pop

    }
    for (let i = 0; i <= scores.length; i++) {
        document.getElementsByClassName("highscore")[i].textContent = scores[i];
    }
}

displayFiveHighestScores();
    
