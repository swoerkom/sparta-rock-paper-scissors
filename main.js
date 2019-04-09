resultUser = 0;
resultComputer = 0;

function compareChoice(choice1, choice2) {
  if (choice1 === choice2) {
    return "It's a tie!";
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors")
    resultUser++;
    return "You win this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
  } else {
    resultComputer++;
    return "You lose this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
}

  if (choice1 === "paper") {
    if (choice2 === "rock") {
      resultUser++;
      return "You win this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
    } else {
      resultComputer++;
      return "You lose this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
    }
  }
  if (choice1 === "scissors") {
    if (choice2 === "rock"){
      resultComputer++;
      return "You lose this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
    } else {
      resultUser++;
      return "You win this round! Your Score: " +resultUser + " Computer score: " +resultComputer;
    }
  }
}

while (resultComputer < 3 || resultUser < 3) {
  var userChoice = prompt("Rock, paper or scissors?");
  var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "paper"
    } else {
      computerChoice = "scissors";
    }
    alert(compareChoice(userChoice, computerChoice));
}
  alert("Your score: " +resultUser + " Computer Score: " + resultComputer);
