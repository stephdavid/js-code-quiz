//Function to get the highest score from the scores array
function getHighestScore() {
    if (scores.length > 0) {
        return scores[0];
    } else {
        return 0; // Default value if no scores yet
    }
}

// Function to display highest scores
function displayHighestScores() {
    // Assuming highestScore is defined somewhere in your code
    let highestScore = getHighestScore();

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

        // Display the updated scores in the list items
        for (let i = 0; i < 5; i++) {
            const liElement = document.getElementsByClassName("highscore")[i];
            liElement.textContent = scores[i] || ""; // Handle cases where there are fewer than 5 scores
        }
    }
}