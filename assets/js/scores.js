

function displayFiveHighestScores() {

    const ol = document.getElementById("highscores");

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
    //let latestScore = parseInt(localStorage.getItem("score"));
    //console.log("Latest Score:", latestScore);


    let latestGameCount = parseInt(localStorage.getItem("gameCount")) || 0;

    const scoresString = localStorage.getItem("scores");
    const scores = scoresString ? JSON.parse(scoresString) : [];

    const initialsString = localStorage.getItem("initials");
    const initials = initialsString ? JSON.parse(initialsString) : [];
    
    console.log(initials);

    //function displayFiveHighestScores() {
    if (latestGameCount >= 5) {
        // Sort the array in descending order
        scores.sort((a, b) => b - a);
        // Remove the smallest value in the array
        scores.pop();
    }


    // Update the highscore list

    document.getElementById("highscore1").textContent = initials[0] + "-" + scores[0] || "";
    document.getElementById("highscore2").textContent = initials[0] + "-" + scores[1] || "";
    document.getElementById("highscore3").textContent = initials[0] + "-" + scores[2] || "";
    document.getElementById("highscore4").textContent = initials[0] + "-" + scores[3] || "";
    document.getElementById("highscore5").textContent = initials[0] + "-" + scores[4] || "";
}
// Call the function after retrieving local storage values
displayFiveHighestScores();

document.getElementById("clear").addEventListener("click", function () {
    localStorage.clear();
    location.reload(true);
});