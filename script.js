const choices = ["rock", "paper", "scissors"];
const images = document.querySelectorAll(".choices img");
const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const winner = document.getElementById("winner");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const user = img.id;
    const computer = getComputerChoice();
    const win = whoIsWinner(user, computer);

    userChoice.textContent = `You chose: ${user}`;
    computerChoice.textContent = `Computer chose: ${computer}`;
    winner.textContent = `Result: ${win}`;
  });
});

function getComputerChoice() {
  const getRandom = Math.floor(Math.random() * choices.length);
  return choices[getRandom];
}

function whoIsWinner(user, computer) {
  if (user === computer) {
    return "It's a tie! ";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Win!";
  }
}
