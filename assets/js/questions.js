// This is the section (x5) that holds the quiz questions
const quizQuestions1 = document.getElementById('questions');
const quizQuestions2 = document.getElementById('questions');
const quizQuestions3 = document.getElementById('questions');
const quizQuestions4 = document.getElementById('questions');
const quizQuestions5 = document.getElementById('questions');

var hideMe = document.querySelector(".show");
hideMe.setAttribute("class", "hide");

var hideButton = document.getElementById("start");
hideButton.setAttribute("class", "hide");

quizQuestions1.removeAttribute("class");
quizQuestions2.removeAttribute("class");
quizQuestions3.removeAttribute("class");
quizQuestions4.removeAttribute("class");
quizQuestions5.removeAttribute("class");

// get the heading (h2) element and create the five quiz questions as values
const questionTitle1 = document.getElementById("question-title");
questionTitle1.textContent = "Commonly used data types do not include:";
/*
const questionTitle2 = document.getElementById("question-title");
questionTitle2.textContent = "The condition in an if/else statement is enclosed with __________.";

const questionTitle3 = document.getElementById("question-title");
questionTitle3.textContent = "Arrays in JavaScript can be used to store __________.";

const questionTitle4 = document.getElementById("question-title");
questionTitle4.textContent = "String values must be enclosed within __________ when being assigned to constiables.";

const questionTitle5 = document.getElementById("question-title");
questionTitle5.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
*/
//  Append the titles to the questions section
quizQuestions1.appendChild(questionTitle1);
/*
quizQuestions2.appendChild(questionTitle2);
quizQuestions3.appendChild(questionTitle3);
quizQuestions4.appendChild(questionTitle4);
quizQuestions5.appendChild(questionTitle5);
*/

// works at least for first question up to here

// Create five ordered lists of choices
const ol1 = document.createElement("ol");
/*
const ol2 = document.createElement("ol");
const ol3 = document.createElement("ol");
const ol4 = document.createElement("ol");
const ol5 = document.createElement("ol");
*/


// Add this class which will be used in css to style the li elements of this list as buttons
ol1.setAttribute("class", "buttons");
/*
ol2.setAttribute("id", "buttons");
ol3.setAttribute("id", "buttons");
ol4.setAttribute("id", "buttons");
ol5.setAttribute("id", "buttons");
*/

// ok

// Append the ordered lists of choices to their respective question titles

// Insert the ordered lists after their respective titles 

questionTitle1.after(ol1);

//questionTitle1.appendChild(ol1);
//questionTitle2.appendChild(ol2);
//questionTitle3.appendChild(ol3);
//questionTitle4.appendChild(ol4);
//questionTitle5.appendChild(ol5);

// Create five sets of list elements
// e.g. const node = document.createElement("li");
// this and other examples from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
const li1a = document.createElement("li");
const li1b = document.createElement("li");
const li1c = document.createElement("li");
const li1d = document.createElement("li");

/*
const li2a = document.createElement("li");
const li2b = document.createElement("li");
const li2c = document.createElement("li");
const li2d = document.createElement("li");

const li3a = document.createElement("li");
const li3b = document.createElement("li");
const li3c = document.createElement("li");
const li3d = document.createElement("li");

const li4a = document.createElement("li");
const li4b = document.createElement("li");
const li4c = document.createElement("li");
const li4d = document.createElement("li");

const li5a = document.createElement("li");
const li5b = document.createElement("li");
const li5c = document.createElement("li");
const li5d = document.createElement("li");
*/

// Create anchor element
const anchor1a = document.createElement("a");
const anchor1b = document.createElement("a");
const anchor1c = document.createElement("a");
const anchor1d = document.createElement("a");

//TO DO = 4 other questions

// Set the href property.
anchor1a.href = "#";
anchor1b.href = "#";
anchor1c.href = "#";
anchor1d.href = "#";

//TO DO = 4 other questions

// Create the text node for anchor element.
//var linkchoice1a = document.createTextNode("This is link");

// Create the text content options
// e.g const textnode = document.createTextNode("Water");
const choice1a = document.createTextNode("strings");
const choice1b = document.createTextNode("booleans");
const choice1c = document.createTextNode("alerts"); // Correct! alerts are functions - the rest are primitive data types
const choice1d = document.createTextNode("number");
/*
const choice2a = document.createTextNode("quotes");
const choice2b = document.createTextNode("curly brackets");
const choice2c = document.createTextNode("parentheses"); // plural of parenthesis - Correct!
const choice2d = document.createTextNode("square brackets");

const choice3a = document.createTextNode("numbers and strings");
const choice3b = document.createTextNode("other arrays");
const choice3c = document.createTextNode("booleans");
const choice3d = document.createTextNode("all of the above");// Correct! But an array can only contain one of these as elements - objects can contain different values (properties)

const choice4a = document.createTextNode("commas");
const choice4b = document.createTextNode("curly brackets");
const choice4c = document.createTextNode("quotes");
const choice4d = document.createTextNode("parentheses"); // plural of parenthesis - but still Wrong!

const choice5a = document.createTextNode("JavaScript"); // Wrong!
const choice5b = document.createTextNode("terminal/bash");
const choice5c = document.createTextNode("for loops");
const choice5d = document.createTextNode("console.log"); // Correct!
*/
// Append the text node to anchor element.
anchor1a.appendChild(choice1a);
anchor1b.appendChild(choice1b);
anchor1c.appendChild(choice1c);
anchor1d.appendChild(choice1d);

// Append the textContent to its respective list(li) item
//e.g. node.appendChild(textnode);
/*
li1a.appendChild(choice1a);
li1b.appendChild(choice1b);
li1c.appendChild(choice1c);
li1d.appendChild(choice1d);
*/
/*
li2a.appendChild(choice2a);
li2b.appendChild(choice2b);
li2c.appendChild(choice2c);
li2d.appendChild(choice2d);

li3a.appendChild(choice3a);
li3b.appendChild(choice3b);
li3c.appendChild(choice3c);
li3d.appendChild(choice3d);

li4a.appendChild(choice4a);
li4b.appendChild(choice4b);
li4c.appendChild(choice4c);
li4d.appendChild(choice4d);

li5a.appendChild(choice5a);
li5b.appendChild(choice5b);
li5c.appendChild(choice5c);
li5d.appendChild(choice5d);
*/

// Set the title attribute.
/*
anchor1a.title = "link";
anchor1b.title = "link"
anchor1c.title = "link"
anchor1d.title = "link"
*/
// TO DO: 4 more sets of links



// Append the anchor element to the li element
li1a.appendChild(anchor1a);
li1b.appendChild(anchor1b);
li1c.appendChild(anchor1c);
li1d.appendChild(anchor1d);


// Append the li element to the ol element
//e.g. document.getElementById("myList").appendChild(node);
ol1.appendChild(li1a);
ol1.appendChild(li1b);
ol1.appendChild(li1c);
ol1.appendChild(li1d);
/*
ol2.appendChild(li2a);
ol2.appendChild(li2b);
ol2.appendChild(li2c);
ol2.appendChild(li2d);

ol3.appendChild(li3a);
ol3.appendChild(li3b);
ol3.appendChild(li3c);
ol3.appendChild(li3d);

ol4.appendChild(li4a);
ol4.appendChild(li4b);
ol4.appendChild(li4c);
ol4.appendChild(li4d);

ol5.appendChild(li5a);
ol5.appendChild(li5b);
ol5.appendChild(li5c);
ol5.appendChild(li5d);
*/