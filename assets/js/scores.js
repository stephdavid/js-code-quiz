
function displayFiveHighestScores() {

    const ol = document.getElementById("highscores");
    ol.setAttribute("class", "highscore");

    const highscore1 = document.createElement("li");
    const highscore2 = document.createElement("li");
    const highscore3 = document.createElement("li");
    const highscore4 = document.createElement("li");
    const highscore5 = document.createElement("li");

    ol.appendChild(highscore1);
    ol.appendChild(highscore2);
    ol.appendChild(highscore3);
    ol.appendChild(highscore4);
    ol.appendChild(highscore5);

    highscore1.setAttribute("id", "highscore1");
    highscore2.setAttribute("id", "highscore2");
    highscore3.setAttribute("id", "highscore3");
    highscore4.setAttribute("id", "highscore4");
    highscore5.setAttribute("id", "highscore5");

    //Retrieve local storage values

    let latestGameCount = parseInt(localStorage.getItem("gameCount")) || 0;

    const scoresString = localStorage.getItem("scores");
    const scores = scoresString ? JSON.parse(scoresString) : [];

    const initialsString = localStorage.getItem("initials");
    const initials = initialsString ? JSON.parse(initialsString) : [];

    // Create an array of objects with initials and scores
    const highscores = [];
    for (let i=0; i < scores.length ; i++) {
        
            highscores.push({ initials: initials[i], score: scores[i] });
 
    }


    if (latestGameCount >= 5) {
        // Sort the array in descending order by score
        highscores.sort((a, b) => b.score - a.score);
        // Remove the smallest value in the array
        highscores.pop();
    }

 console.log(highscores)
    // Update the highscore list
    if (highscores[0]) {
        document.getElementById("highscore1").textContent = highscores[0].initials + "-" + highscores[0].score;
    }
    if (highscores[1]) {
        document.getElementById("highscore2").textContent = highscores[1].initials + "-" + highscores[1].score;
    }
    if (highscores[2]) {
        document.getElementById("highscore3").textContent = highscores[2].initials + "-" + highscores[2].score;
    }
    if (highscores[3]) {
        document.getElementById("highscore4").textContent = highscores[3].initials + "-" + highscores[3].score;
    }
    if (highscores[4]) {
        document.getElementById("highscore5").textContent = highscores[4].initials + "-" + highscores[4].score;
    }
}
// Call the function after retrieving local storage values
displayFiveHighestScores();

document.getElementById("clear").addEventListener("click", function (event) {
    event.preventDefault;
    localStorage.clear();
    location.reload(true);
});