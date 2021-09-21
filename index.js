//Variables
let userChoice;
let randomNumber;
let computerChoice;

//userChoice = window.prompt("Heads or Tails?");
userChoice = window.prompt("Please choose either: heads, or tails!");

//Generate Random Number
randomNumber = Math.round(Math.random());

//Conditional
if (randomNumber == 0){
    computerChoice = "heads";
}else {
    computerChoice = "tails";
} 

//Message to User
if (userChoice == computerChoice){
    alert("You guessed right!, the coin flip landed on: " + userChoice);
} else {
    alert("Sorry, the coin flip landed on: " + userChoice);
}

//Console confirmation behind the scenes
console.log(computerChoice);
