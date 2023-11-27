// This is the section (x5) that holds the quiz questions
const quizQuestions1 = document.getElementById("questions");
const quizQuestions2 = document.getElementById("questions");
const quizQuestions3 = document.getElementById("questions");
const quizQuestions4 = document.getElementById("questions");
const quizQuestions5 = document.getElementById("questions");

// get the heading (h2) element and create the five quiz questions as values
const questionTitle5 = document.getElementById("question-title");
questionTitle5.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

const questionTitle4 = document.getElementById("question-title");
questionTitle4.textContent = "String values must be enclosed within __________ when being assigned to variables.";

const questionTitle3 = document.getElementById("question-title");
questionTitle3.textContent = "Arrays in JavaScript can be used to store __________.";

const questionTitle2 = document.getElementById("question-title");
questionTitle2.textContent = "The condition in an if/else statement is enclosed with __________.";

const questionTitle1 = document.getElementById("question-title");
questionTitle1.textContent = "Commonly used data types do not include:";

//  Append the titles to the questions section
quizQuestions1.appendChild(questionTitle1);
quizQuestions2.appendChild(questionTitle2);
quizQuestions3.appendChild(questionTitle3);
quizQuestions4.appendChild(questionTitle4);
quizQuestions5.appendChild(questionTitle5);

// Create five ordered lists of choices
const ol1 = document.createElement("ol");
const ol2 = document.createElement("ol");
const ol3 = document.createElement("ol");
const ol4 = document.createElement("ol");
const ol5 = document.createElement("ol");

// Add this class to be used in css to style li elements as buttons
ol1.setAttribute("class", "hidden buttons");
ol2.setAttribute("class", "hidden buttons");
ol3.setAttribute("class", "hidden buttons");
ol4.setAttribute("class", "hidden buttons");
ol5.setAttribute("class", "hidden buttons");

// Insert (after() not appendChild()) 
questionTitle1.after(ol1);
questionTitle1.after(ol1);
questionTitle2.after(ol2);
questionTitle3.after(ol3);
questionTitle4.after(ol4);
questionTitle5.after(ol5);

// Create five sets of list elements
const li1a = document.createElement("li");
const li1b = document.createElement("li");
const li1c = document.createElement("li");
li1c.setAttribute("class", "correct");
const li1d = document.createElement("li");

const li2a = document.createElement("li");
const li2b = document.createElement("li");
const li2c = document.createElement("li");
li2c.setAttribute("class", "correct");
const li2d = document.createElement("li");

const li3a = document.createElement("li");
const li3b = document.createElement("li");
const li3c = document.createElement("li");
const li3d = document.createElement("li");
li3d.setAttribute("class", "correct");

const li4a = document.createElement("li");
const li4b = document.createElement("li");
const li4c = document.createElement("li");
li4c.setAttribute("class", "correct");
const li4d = document.createElement("li");

const li5a = document.createElement("li");
const li5b = document.createElement("li");
const li5c = document.createElement("li");
const li5d = document.createElement("li");
li5d.setAttribute("class", "correct");

// Create anchor element
const anchor1a = document.createElement("a");
const anchor1b = document.createElement("a");
const anchor1c = document.createElement("a");
const anchor1d = document.createElement("a");

const anchor2a = document.createElement("a");
const anchor2b = document.createElement("a");
const anchor2c = document.createElement("a");
const anchor2d = document.createElement("a");

const anchor3a = document.createElement("a");
const anchor3b = document.createElement("a");
const anchor3c = document.createElement("a");
const anchor3d = document.createElement("a");

const anchor4a = document.createElement("a");
const anchor4b = document.createElement("a");
const anchor4c = document.createElement("a");
const anchor4d = document.createElement("a");

const anchor5a = document.createElement("a");
const anchor5b = document.createElement("a");
const anchor5c = document.createElement("a");
const anchor5d = document.createElement("a");

// Set the href property.
anchor1a.href = "#";
anchor1b.href = "#";
anchor1c.href = "#";
anchor1d.href = "#";

anchor2a.href = "#";
anchor2b.href = "#";
anchor2c.href = "#";
anchor2d.href = "#";

anchor3a.href = "#";
anchor3b.href = "#";
anchor3c.href = "#";
anchor3d.href = "#";

anchor4a.href = "#";
anchor4b.href = "#";
anchor4c.href = "#";
anchor4d.href = "#";

anchor5a.href = "#";
anchor5b.href = "#";
anchor5c.href = "#";
anchor5d.href = "#";

// Create the text node for anchor element.

const choice1a = document.createTextNode("strings");
const choice1b = document.createTextNode("booleans");
const choice1c = document.createTextNode("alerts"); // Correct! alerts are functions - the rest are primitive data types
const choice1d = document.createTextNode("numbers");

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

// Append the text node to anchor element.
anchor1a.appendChild(choice1a);
anchor1b.appendChild(choice1b);
anchor1c.appendChild(choice1c);
anchor1d.appendChild(choice1d);

anchor2a.appendChild(choice2a);
anchor2b.appendChild(choice2b);
anchor2c.appendChild(choice2c);
anchor2d.appendChild(choice2d);

anchor3a.appendChild(choice3a);
anchor3b.appendChild(choice3b);
anchor3c.appendChild(choice3c);
anchor3d.appendChild(choice3d);

anchor4a.appendChild(choice4a);
anchor4b.appendChild(choice4b);
anchor4c.appendChild(choice4c);
anchor4d.appendChild(choice4d);

anchor5a.appendChild(choice5a);
anchor5b.appendChild(choice5b);
anchor5c.appendChild(choice5c);
anchor5d.appendChild(choice5d);

// Set the title attribute.
anchor1a.title = "link";
anchor1b.title = "link";
anchor1c.title = "link";
anchor1d.title = "link";

anchor2a.title = "link";
anchor2b.title = "link";
anchor2c.title = "link";
anchor2d.title = "link";

anchor3a.title = "link";
anchor3b.title = "link";
anchor3c.title = "link";
anchor3d.title = "link";

anchor4a.title = "link";
anchor4b.title = "link";
anchor4c.title = "link";
anchor4d.title = "link";

anchor4a.title = "link";
anchor4b.title = "link";
anchor4c.title = "link";
anchor4d.title = "link";

// Append the anchor element to the li element
li1a.appendChild(anchor1a);
li1b.appendChild(anchor1b);
li1c.appendChild(anchor1c);
li1d.appendChild(anchor1d);

li2a.appendChild(anchor1a);
li2b.appendChild(anchor1b);
li2c.appendChild(anchor1c);
li2d.appendChild(anchor1d);

li3a.appendChild(anchor1a);
li3b.appendChild(anchor1b);
li3c.appendChild(anchor1c);
li3d.appendChild(anchor1d);

li4a.appendChild(anchor1a);
li4b.appendChild(anchor1b);
li4c.appendChild(anchor1c);
li4d.appendChild(anchor1d);

li5a.appendChild(anchor1a);
li5b.appendChild(anchor1b);
li5c.appendChild(anchor1c);
li5d.appendChild(anchor1d);

// Append the li element to the ol element
ol1.appendChild(li1a);
ol1.appendChild(li1b);
ol1.appendChild(li1c);
ol1.appendChild(li1d);

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
