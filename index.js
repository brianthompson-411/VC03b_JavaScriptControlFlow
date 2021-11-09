//Variables
let userChoice;
let randomNumber;
let computerChoice;
let birthYear;
let currentYear;
let age;

//Part I

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


//Part II
birthYear = window.prompt("What year were you born in?");
currentYear = new Date().getFullYear();
age = currentYear - birthYear;

if (age > 21){
    window.alert("You are old enough to drink in the US");
} else if(age =21){
    window.alert("You are old enough to drink in the US...barley");
} else{
    window.alert("Sorry, you are not old enough to drink in the US");
}



