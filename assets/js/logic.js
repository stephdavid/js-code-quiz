let questionIndex = 0;

function showFirstQuestionPage() {
    // hide the paragraph.show and button #show
    // show the paragraph section and the question ordered list
    // only the first question and options to be shown - hide all others

    // TO DO: keep the function generic for specific questions send arguments
    /*
      // Using the remove() method as these elements are no longer required could get in the way of future actions
      // select the intro paragraph
  
      const removeIntroParagraph = document.querySelector(".show");
      // remove the intro paragraph
      removeIntroParagraph.remove();
      // select the start button
      const removeStartButton = document.getElementById("start");
  
      // remove the start button
      removeStartButton.remove();
   */



    const startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");

    quizQuestions.setAttribute("class", "questions1 show");// n.b. quizQuestions1 is a global variable

    // Multiple ol lists are generated - these need to be hidden and eventually fixed
    ol4.setAttribute("class", "ol4 hide");
    ol3.setAttribute("class", "ol3 hide");
    ol2.setAttribute("class", "o12 hide");
    ol1.setAttribute("class", "ol1 hide");
}

function endQuiz() {
    // stop timer
    // hide questions page
    // show end screen - is this your final score
    alert("End of Quiz!");
}

function showNextQuestionPage() {
    questionIndex++;
    if (questionIndex < questions.length) {
        questionTitle1.textContent = questions[questionIndex].question;

        choice1a.textContent = choice2a.textContent;
        choice1b.textContent = choice2b.textContent;
        choice1c.textContent = choice2c.textContent;
        choice1d.textContent = choice2d.textContent;

        choice2a.textContent = choice3a.textContent;
        choice2b.textContent = choice3b.textContent;
        choice2c.textContent = choice3c.textContent;
        choice2d.textContent = choice3d.textContent;
        
        choice3a.textContent = choice4a.textContent;
        choice3b.textContent = choice4b.textContent;
        choice3c.textContent = choice4c.textContent;
        choice3d.textContent = choice4d.textContent;

        choice4a.textContent = choice5a.textContent;
        choice4b.textContent = choice5b.textContent;
        choice4c.textContent = choice5c.textContent;
        choice4d.textContent = choice5d.textContent;
      
    } else {
        endQuiz();
    }



}


document.getElementById("start").addEventListener("click", function () {
    //alert("Hello World!");
    showFirstQuestionPage();
});

document.querySelector(".buttons").addEventListener("click", function () {
    showNextQuestionPage();
});
