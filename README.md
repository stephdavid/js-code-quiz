# js-code-quiz
## Module 6 Challenge - Working with Web APIs: Code Quiz

Challenge - build a timed coding quiz with multiple-choice questions which will use dynamically updated HTML and CSS from JavaScript code and have a clean, polished, and responsive user interface.

### Process

* To start, I've created and cloned a GitHub repo, and started writing this README. :ballot_box_with_check:

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

* Added an onclick function to redirect to the highscores.html page 

* Created the button event listener to clear the highest scores (localStorage.clear) and reload the page (location.reload(true))

* Sunday morning. I created an initials array and put it in local storage. TO DO: keep the individuals initials connected to the results.



### Code Logic - What are we trying to do

1. A quiz with a timer
2. The user presses a button to start the quiz.
3. A screen with a question and four possible answers is presented.
4. The user clicks the button that they believe is the answer to each question - the colour of the button changes...
5. The next screen displays, and indicates if the answer was correct or incorrect.
6. After five rounds, the quiz finishes and displays high scores.The user adds their intials, then clears their intials and starts over.




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





