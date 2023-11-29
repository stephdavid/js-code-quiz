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



    /*
      ol5.setAttribute("class", "ol5 hide");
      quizQuestions1.setAttribute("class", "hide");
      questionTitle1.setAttribute("class", "hide");
     
      questionTitle2.setAttribute("class", "show");
      quizQuestions2.appendChild(questionTitle2);
  
      ol4.setAttribute("class", "ol4 buttons");
  
      questionTitle2.after(ol2);
  
      li2a.setAttribute("class", "show");
      li2b.setAttribute("class", "show");
      li2c.setAttribute("class", "correct");
      li2d.setAttribute("class", "show");
  
  
      anchor2a.setAttribute("class", "show");
      anchor2b.setAttribute("class", "show");
      anchor2c.setAttribute("class", "show");
      anchor2d.setAttribute("class", "show");
  
      anchor2a.href = "#";
      anchor2b.href = "#";
      anchor2c.href = "#";
      anchor2d.href = "#";
  
      const choice2a = document.createTextNode("quotes");
      const choice2b = document.createTextNode("curly brackets");
      const choice2c = document.createTextNode("parentheses"); // plural of parenthesis - Correct!
      const choice2d = document.createTextNode("square brackets");
  
  
      anchor2a.appendChild(choice2a);
      anchor2b.appendChild(choice2b);
      anchor2c.appendChild(choice2c);
      anchor2d.appendChild(choice2d);
  
      anchor2a.title = "link";
      anchor2b.title = "link";
      anchor2c.title = "link";
      anchor2d.title = "link";
  
      li2a.appendChild(anchor1a);
      li2b.appendChild(anchor1b);
      li2c.appendChild(anchor1c);
      li2d.appendChild(anchor1d);
  
      ol2.appendChild(li2a);
      ol2.appendChild(li2b);
      ol2.appendChild(li2c);
      ol2.appendChild(li2d);
  */

    //  console.log(questionTitle2);
    //   console.log(quizQuestions2);
    //   console.log(ol4);
    //  console.log(wrapper)





    // let h1 = document.querySelector("h1");
    //h1.appendChild(quizQuestions2);



    /*
        if (document.querySelector(".correct")) {
            alert("Correct!");
            // add 10 seconds to timer
        } else {
            alert("Nope!");
            // subtract 10 seconds from timer
        }

     */



}


document.getElementById("start").addEventListener("click", function () {
    //alert("Hello World!");
    showFirstQuestionPage();
});

document.querySelector(".buttons").addEventListener("click", function () {
    showNextQuestionPage();
});
