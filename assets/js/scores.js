const scores = [];
const ol = document.getElementById("highscores");
let highestScore = 0;
let gameScore = ""

const highscore1 = document.createElement("li");
const highscore2 = document.createElement("li");
const highscore3 = document.createElement("li");
const highscore4 = document.createElement("li");
const highscore5 = document.createElement("li");

highscores.appendChild(highscore1);
highscores.appendChild(highscore2);
highscores.appendChild(highscore3);
highscores.appendChild(highscore4);
highscores.appendChild(highscore5);

highscore1.setAttribute("id", "highscore1");
highscore2.setAttribute("id", "highscore2");
highscore3.setAttribute("id", "highscore3");
highscore4.setAttribute("id", "highscore4");
highscore5.setAttribute("id", "highscore5");

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
        scores.slice(-1, 1) // remove only the last element - supposedly faster than pop

    }
    // Update the highscore list
    highscore1.textContent = scores[0] || "";
    highscore2.textContent = scores[1] || "";
    highscore3.textContent = scores[2] || "";
    highscore4.textContent = scores[3] || "";
    highscore5.textContent = scores[4] || "";

}

displayFiveHighestScores();

