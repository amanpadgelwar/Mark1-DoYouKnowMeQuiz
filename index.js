var readlineSync = require('readline-sync');
var score = 0;

//welcoming the user
function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW Aman?");
}


//var  for asking questions

var q1 = {
  question: "Where does Aman live?",
  answer: "Stuttgart"
}
var q2 = {
  question: "When is Aman's birthday?",
  answer: "7th March"
}
var q3 = {
  question: "Does Aman like Bikes?",
  answer: "Yes"
}
var q4 = {
  question: "Does Aman have 11 fingers?",
  answer: "No"
}
var q5 = {
  question: "Is Aman Vegetarian?",
  answer: "No"
}

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct Answer");
    score = score + 1
  }
  else {
    console.log("Incorrect  Answer");

  }
  console.log("current score: ", score)
  console.log("-------------")
}


//game fuction
var questionsArray = [q1, q2, q3, q4, q5];


function game() {
  for (var i = 0; i <5; i++)
    var currentQuestions = questionsArray[i];
  play(currentQuestions.question, currentQuestions.answer)
}


//scores
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}



welcome();
game();
showScores();
