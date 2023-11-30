const highScore1Li = document.createElement("li");
const highScore2Li = document.createElement("li");
const highScore3Li = document.createElement("li");
const highScore4Li = document.createElement("li");
const highScore5Li = document.createElement("li");

if (gameCount <= 5) {
    for (i = 1; i <= 5; ++) {
        let(score + i) = document.createTextNode(userScore + i)
    }
} else if (gameScore > highestScore) {
    if (score5 > score4) {
        if (score4 > score3) {
            if (score3 > score2) {
                if (score2 > score1) {
                    score1 = highestScore;
                }
            }
        }

    }
}

// Append the text node to li element
highScore1Li.appendChild(score1);
    highScore2Li.appendChild(score2);
    highScore3Li.appendChild(score3);
    highScore4Li.appendChild(score4);
    highScore5Li.appendChild(score5);

