//We are going to create a javascript quiz 
//It will ask a series of questions and evaluate each answer.
//The program should keep track of the number of questions answered correctly.
//After all the questions are answered the program should display the number of questions that were correctly answered. And the number that the player got wrong.

var score = 0;
var correctAnswer = false;




//Two Dimensional Array
var questions = [
  //Create a two dimensional array with at least three questions in it.
  //Each element of the array represents one question and is itself an array
  ['1. What colour is the grass?', 'green'],
  ['2. What colour are bananas?', 'yellow'],
  ["3. What's the opposite of heavy?", "light"]
];

function print(message) {
  document.write("<p>" + message + "</p>");
}

function askQuestion(questionNumber) {
  var response = prompt(questions[questionNumber][0]);
  if (response === questions[questionNumber][1]) {
    score += 1;
    correctAnswer = true;
    print("You got this right: " + questions[questionNumber][0] + " " + questions[questionNumber][1]);
    console.log(score);
    console.log(correctAnswer);
  } else {
    print("Oh no, you got this wrong: " + questions[questionNumber][0] + " " + questions[questionNumber][1]);
    correctAnswer = false;
    console.log(score);
    console.log(correctAnswer);
  }
}

//For Loop
for (var i = 0; i <= 2; i+= 1) {
//You'll need to use a loop to cycle through each question.
//Ask it, and compare the response from the player to the answer in the array.
//You can use the prompt method to ask the question.
askQuestion(i);
}


//You'll then use a conditional statement to see if the player's answer was correct
if (score === 3) {
  //Print to the screen??
  print("Congratulations! You finished top of the class with " + score + " points.");
} else if (score === 1 || score === 2) {
  print("Oh well, at least you tried. Let's see if you can get higher than " + score + " points next time.");
} else {
  print("O-oh! You got " + score + " points. I think you need more practice!");
}

