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



