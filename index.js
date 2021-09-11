var input = require('readline-sync');
const chalk = require('chalk');

var userName = input.question(chalk.blue("Hi! Please enter your Name "));
console.log("Hi", userName, "Let's start this game\nHow well you know Abhi? ");
var score = 0;
function play(question, answer, userAnswer){
  if (userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log("Right Answer");
    score = score + 1;
  }
  else{
    console.log("Wrong Answer");
  }
}
var questionOne = {question: "Who is my fav GOT character? ",
  answer: "Arya Stark"
};
var questionTwo = {question: "What is my dream company? ",
  answer: "Netflix"
};
var questionThree = {question: "What is my fav Movie? ",
  answer: "The Dark Knight"
};
var questionFour = {question: "What is my fav Dessert? ",
  answer: "Icecream"
};
var questionFive = {question: "Am I a Foodie? ",
  answer: "Yes"
};
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i].question;
  userAnswer = input.question(currentQuestion);
  play(questions[i].question,questions[i].answer,userAnswer);
}

console.log("You scored", score)

