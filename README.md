# js-code-quiz
## Module 6 Challenge - Working with Web APIs: Code Quiz

Challenge - build a timed coding quiz with multiple-choice questions which will use dynamically updated HTML and CSS from JavaScript code and have a clean, polished, and responsive user interface.

---

### Webpage

Coding Quiz Challenge
https://stephdavid.github.io/js-code-quiz/

---

### Screenshots


**Start section**

![start page ](start-page.png)

---

**Question section**

![question two ](question-two.png)

---

**End section**

![end section showing score and initials input element and high scores button](end-section.png)

---

**High scores page**

![high scores page ](highscores-page.png)

---

**Initials bug** 🐛

![initials bug on high scores page ](initials-bug.png)

---

### Acceptance Criteria

GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question  ✔️

WHEN I answer a question

THEN I am presented with another question  ✔️

WHEN I answer a question incorrectly

THEN time is subtracted from the clock ❌

WHEN all questions are answered or the timer reaches 0

THEN the game is over ✔️

WHEN the game is over

THEN I can save my initials and score ✔️

---

### Process

* To start, I've created and cloned a GitHub repo, and started writing this README.

* As of this Sunday morning (Nov 26), I haven't yet worked out the logic. I think that creating the "building blocks", i.e. the set of questions from the extracted frames of the gif image, might be helpful in doing this.

* As well, I'll set up the file structure, creating a folder and adding 3 js files, and sketching out an initial static html page to determine where the generated pieces will go.

* Hoping that it won't be a time-wasting distraction, I'm going to create some JavaScript snippets for the DOM changing elements, making them as intuitive as possible - https://code.visualstudio.com/docs/editor/userdefinedsnippets.

* I'm also starting the References section, adding one as I go along, along with updating this README file.

* Five sets of questions have been created. TODO: code something to remove/add hide class 

* The removeAttribute() method works - will need to be able to show and hide as part of the logic process.

* For a bit of a change, however, time to fix the button and do some hover effects. 

* Making the start button bigger and bright was easy enough, it was rather involved making the list items look like buttons but I did it eventually. #

* I amended some code that should have been the .after() method (as a sibling) rather than the appendChild() method which inserts an element into another element, not what I wanted in this case.

* Monday morning. For some reason, the ordered list numbers fall outside the buttons. 
![strange button-numbers behaviour ](strange-nums.png)

TO BE REVISTED: Will try to programmically create them using a css counter with the ::marker pseudo-element -  CSS Lists, Markers, And Counters https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/
  
* Commence the logic bit. Game plan: in logic.js, initiate the quiz and display the first question.

* Successfully coded the first event listener - when start button clicked, the start paragraph and button elements are removed and the first question and choices is displayed. Still some way to go.

* For some reason the question titles need to be in reverse order in the code - otherwise the highest number will appear on the screen (and not be associated with the options)

* Keeping in mind the reverse order issue, by hiding all 5 ordered lists in questions.js, then in the showFirstQuestionPage() function in the logic.js page, removing hidden whensetting the class of the first ordered list (using ol5).

* Now considering the second event listener triggered upon selection of one of the four options to the first question. One has been "tagged" with a class name of "correct". It gets different treatment to the other three.

* I'm stuck. I just can't hide the first question and show the second. 

* Try the timer feature - add time - subtract time?

* Try adding subtracting the score?

* Still trying to build the second page - found an interesting method - insertBefore() The syntax that worked in this case:  parentNode.insertBefore(newNode, paraentnode.firstElementChild) I used the *firstElementChild* property which returns an element's first child (element).

* Wednesday morning - still stuck, so I reviewed a couple of similar apps on GitHub - hat tip to Queen, Tuesday night's instructor. This confirmed my idea that all that needs to change is the text of the title and options elements. With this in mind, I began my session with tutor Suresh.

* We went with my idea (change text only). The code for the questions title text and options text was refactored into a array of objects (question: text, answerChoices: text and correctChoice: text as elements)

* Added the additional code in logic.js, to change the set of options with the change of questions. Some minimal refactoring to tidy up extraneous code and commented code. More than this unravelled the working app. Time to proceed to the next feature - the timer.

* Started on the timer, and the score counter. Added label to input element.

* I've added code to determine if whether the answer selected by the user is the correct answer. As it could be one of five object properties, either one of these represented by i is true. With an event listener, get the user's selected option. If it matches the obect property correctChoice (is true) increment the score counter by 1, alert the user that the answer is correct. If it does not match (is false) alert the user that it is an incorrect answer and tell them what the correct answer is

* Have commenced writing the code to get the user's initials

* Start to display the game total

* Clarification in Friday night class - in the end-screen section the "enter initials and then submit" takes user to the next page.

* Yes, local storage is expected...
  
* As well, a bit of housekeeping - in questions.js replaced what became the duplicate text to its object location - this is one example of refactoring as I go long. At some point the redundant anchor tags will be removed. It's kinda sad to see code I working so lovingly on, just thrown away. 

* In my daily email from Medium.com this Saturday morning was the article "Speed Up JavaScript Array Processing". Switched from pop.

* renderLastElement() or getItem("gameScore")?

* Saturday evening - I'm still not able to display the highest 5 scores - there's an issue with the scores array. I have created 3 items of local storage in logic.js to be retrieved in scores.js - not sure what the issue is here

* Late Saturday evening. The array was displaying as an array of strings (which inlcuded commas and square brackets) not numbers. A thorny problem - I resorted to a lengthy chat with ChatGPT over a few hours. But this bit is sorted. More coding to do. This has become a two-pizza project.

* Added an onclick function to redirect to the highscores.html page. 

* Created the button event listener to clear the highest scores (localStorage.clear) and reload the page (location.reload(true)).

* Sunday morning. I created an initials array and put it in local storage. TO DO: keep the individuals initials connected to the results.

* Changed back from a link back to index.html to a button link to index.html.

* Change the questions ordered list to buttons and remove unnecessary anchor tags - in my best Capt. Picard voice "Belay that order!" - I changed the CSS to more specific selectors instead.

* Anchor tags for the question options are not necessary, but I've left them in as they are ingrained in the logic and they're not doing any harm - knitting analogy - unravelling several rows to remove an minor miss stich that won't be seen.

* TO DO:
    1.	Add/lose seconds - if correct add five seconds, if incorrect subtract five seconds
    2.	Disable the button until the user adds initials - a onkeyup event?
    3.	Add a confirm message saying the count has stopped time out try again?
    4.	Concatenate the initials with the score - keep initials of previous players
    5.	event propagation?
    6.	isolate the start button from the others and for them apply the provided style

* Added **event.prevent default** to event handlers to prevent event bubbling.

* Isolated the start button from the others by adding **#start** to the css **button** selector. Returned the provided button styles. The question options have a different treatment which stays as is.

* Now, how did console.log replace the first question? - a new bug 🐛 aargh! It's not a browser or cache problem because the same thing happens in Firefox and Edge ????

* Squashed the bug.🐛 It's something to do with how the question titles are ordered. It has to be in descending order. Who knows why?

* Added code to disable the submit button until the user adds their initials. For minimum accessibility, also provided an explanation.

* Added the time out confirm modal and following action. While there is a redirect to the end screen section, when initials are added and the submit button clicks the highest scores and intitials are not displayed. I decided to simply direct the user to the start screen if they want to start again (press ok), if they don't want to start again (press cancel), an alert "bye".
  
* Two complex issues to be handled at a later date:
    1. Adding seconds if a question is correct, subtracting seconds when incorrect
    2. Concatenating the initials with the score while maintaining initials of previous players

* Another attempt at adding/subtracting sections to no avail. Added the code following time out again as it had disappeared for some reason.
  
* And it's a wrap for now!

* Another few days after - I was able to add the code to increase the timer by 10 seconds when the answer is correct, and decrease by 10 seconds if incorrect. However, I still can't resolve the problem of different initials in the highest scores list. Speak to a TA in office hours on Tuesday.

---

### Code Logic - What are we trying to do

1. This is a quiz with a timer.
2. The user presses the start button to start the quiz.
3. A screen with a question and four possible answers is presented and the timer starts to count down - the countdown is displayed on the top right of the screen.
4. The user clicks the button that they believe is the answer to each question
5. An alert model pops up and indicates if the answer was correct or incorrect. If incorrect, the correct answer is provided. The next screen displays.
6. If the timer times out, a prompt modal is displayed - the user is asked whether they wish to start again. If yes, the Start Screen is displayed, and if no, an alert "bye" message.
7. After five questions, the quiz finishes and displays the score. The user is asked to add their intials before clicking the Highest Scores button. They can also access the Highscores page by a link on the top right of the screen.
8. Once in the Highscores screen, the five highest answers are displayed alongside the users' initials. 
9. The user can clear the high scores by clicking the Clear Highscores button.
10. The user can choose to play again by pressing the Play Again? button

---

### References

Ode to VSCode Snippets
https://mercedesbernard.com/blog/ode-to-snippets/<br>

Node: textContent property
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent<br>

Document: createElement() method
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement<br>

Node: appendChild() method
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild<br>

Element: setAttribute() method
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute<br>

HTML DOM Element setAttribute()
https://www.w3schools.com/jsref/met_element_setattribute.asp<br>

Element: removeAttribute() method
https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute<br>

Create buttons from UL elements
https://readlearncode.com/code-and-stuff/creating-buttons-from-ul-element/<br>

Element: after() method
https://developer.mozilla.org/en-US/docs/Web/API/Element/after<br>

CSS Lists, Markers, And Counters
https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/<br>

JavaScript insertBefore
https://www.javascripttutorial.net/javascript-dom/javascript-insertbefore/<br>

Element: firstElementChild property
https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild<br>

JavaScript HTML DOM EventListener
https://www.w3schools.com/js/js_htmldom_eventlistener.asp<br>

Event Object = Introduction to Browser Events
https://javascript.info/introduction-browser-events#event-object<br>

JavaScript Array sort()
https://www.w3schools.com/jsref/jsref_sort.asp<br>

JavaScript Array pop()
https://www.w3schools.com/jsref/jsref_pop.asp<br>

JavaScript Number toString()
https://www.w3schools.com/jsref/jsref_tostring_number.asp<br>

Storage: setItem() method
https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem<br>

Storage getItem() Method
https://www.w3schools.com/jsref/met_storage_getitem.asp<br>

Speed Up JavaScript Array Processing
https://medium.com/@techsuneel99/speed-up-javascript-array-processing-1f878158f4f1<br>

4 Ways to Remove the Last Element from an Array in JavaScript
https://medium.com/@iamdarius/4-ways-to-remove-the-last-element-from-an-array-in-javascript-17749b12be0c<br>

Window localStorage
https://www.w3schools.com/jsref/prop_win_localstorage.asp<br>

LocalStorage-Sign-up-form - renderLastRegistered() function
https://github.com/EvgeniiI7/LocalStorage-Sign-up-form<br>

How to store objects or arrays in browser local storage
https://www.freecodecamp.org/news/how-to-store-objects-or-arrays-in-browser-local-storage/<br>

ChatGBT-3.5
https://chat.openai.com/<br>

How can I make a button redirect my page to another page?
https://stackoverflow.com/questions/16562577/how-can-i-make-a-button-redirect-my-page-to-another-page<br>

HTML Button onclick – JavaScript Click Event Tutorial
https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/<br>

Storage: clear() method
https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear<br>

How to force refresh a page in JavaScript
https://medium.com/@devdo/how-to-force-refresh-a-page-in-javascript-e282c308f214<br>

Difference Between preventDefault and stopPropagation in JavaScript
https://iq.js.org/questions/javascript/whats-the-difference-between-eventpreventdefault-and-eventstoppropagation-methods<br>

How to disable or enable buttons using javascript and jquery
https://flexiple.com/javascript/disable-button-javascript<br>

Never forget type="button" on generated buttons!
https://lea.verou.me/blog/2018/05/never-forget-typebutton-on-generated-buttons/<br>

Never, ever disable buttons — Why not?
https://uxdesign.cc/never-ever-disable-buttons-part-1-why-not-73d16a0fb32b<br>

Never, ever disable buttons — Requirements for an accessible solution
https://uxdesign.cc/never-ever-disable-buttons-requirements-for-an-accessible-solution-acaf9c5191f9<br>

Never, ever disable buttons — More accessible alternatives
https://uxdesign.cc/never-ever-disable-buttons-more-accessible-alternatives-5f415d79ce40<br>

setInterval() global function
https://developer.mozilla.org/en-US/docs/Web/API/setInterval<br>

