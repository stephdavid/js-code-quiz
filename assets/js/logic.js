function showFirstQuestionPage() {
    // hide the paragraph.show and button #show
    // show the paragraph section and the question ordered list
    // only the first question and options to be shown - hide all others

    // TO DO: keep the function generic for specific questions send arguments

    // Using the remove() method as these elements are no longer required could get in the way of future actions
    // select the intro paragraph
    const removeIntroParagraph = document.querySelector(".show");
    // remove the intro paragraph
    removeIntroParagraph.remove();

    // select the start button
    const removeStartButton = document.getElementById("start");
    // remove the start button
    removeStartButton.remove();

    quizQuestions1.setAttribute("class", "show");// n.b. quizQuestions1 is a global variable

    ol5.setAttribute("class", "buttons"); // another global variable and strange but 5 is 1 etc.
}

function showNextQuestionPage() {
    // hide 1st question page
    // show next question page



    const hideMe = document.querySelector(".show");
    hideMe.setAttribute("class", "hide");

    const showMe = document.querySelector(".hide");
    showMe.setAttribute("class", "show");

}

document.getElementById("start").addEventListener("click", function () {
    //alert("Hello World!");
    showFirstQuestionPage();
});

document.querySelector("ol li:nth-child(1)").addEventListener("click", function () {
    alert("Hi Again!");
    showNextQuestionPage();
});

