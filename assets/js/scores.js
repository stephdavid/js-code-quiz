
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

    if (latestGameCount >= 5) {
        // Sort the array in descending order
        scores.sort((a, b) => b - a);
        // Remove the smallest value in the array
        scores.pop();
    }

    // Update the highscore list
    if (scores[0]) {
        document.getElementById("highscore1").textContent = initials[0] + "-" + scores[0];
    }
    if (scores[1]) {
        document.getElementById("highscore2").textContent = initials[1] + "-" + scores[1];
    }
    if (scores[2]) {
        document.getElementById("highscore3").textContent = initials[2] + "-" + scores[2] || "";
    }
    if (scores[3]) {
        document.getElementById("highscore4").textContent = initials[3] + "-" + scores[3];
    }
    if (scores[4]) {
        document.getElementById("highscore5").textContent = initials[4] + "-" + scores[4] || "";
    }
}
// Call the function after retrieving local storage values
displayFiveHighestScores();

document.getElementById("clear").addEventListener("click", function (event) {
    event.preventDefault;
    localStorage.clear();
    location.reload(true);
});