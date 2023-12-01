const scores = [];
const ol = document.getElementById("highscores");

const highScore1Li = document.createElement("li");
const highScore2Li = document.createElement("li");
const highScore3Li = document.createElement("li");
const highScore4Li = document.createElement("li");
const highScore5Li = document.createElement("li");

highscores.appendChild(highScore1Li);
highscores.appendChild(highScore2Li);
highscores.appendChild(highScore3Li);
highscores.appendChild(highScore4Li);
highscores.appendChild(highScore5Li);

//Function to get the highest score from the scores array
let highestScore = function getHighestScore() {
    if (scores.length > 0) {
        return scores[0];
    } else {
        return 0; // Default value if no scores yet
    }
}

function displayFiveHighestScores(gameScore) {
     // Check if the current gameScore is greater than the lowest high score
    if (gameScore > scores[4] || scores.length < 5) {
        // Find the correct position to insert the new score
        let insertIndex = 0;
        while (insertIndex < scores.length && gameScore < scores[insertIndex]) {
            insertIndex++;
        }
        // Insert the new score at the correct position
        scores.splice(insertIndex, 0, gameScore);

        // Trim the array to keep only the top 5 scores
        scores.length = Math.min(scores.length, 5);
        // Display the updated scores
        for (let i = 0; i < 5; i++) {
            const highScore = document.getElementsByClassName("highscore")[i];
            highScore.textContent = scores[i]; 
        }
    }
}

