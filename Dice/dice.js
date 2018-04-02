var body = document.getElementById("body");

function rollTheDice() {

displayUser = document.getElementById("userroll");
displayCpu = document.getElementById("cpuroll");
displayResult = document.getElementById("result");

body.removeChild(displayUser);
body.removeChild(displayCpu);
body.removeChild(displayResult);

insertUser = document.createElement("p");
insertUser.setAttribute("id", "userroll");
insertCpu = document.createElement("p");
insertCpu.setAttribute("id", "cpuroll");
insertResults = document.createElement("p");
insertResults.setAttribute("id", "result");

body.appendChild(insertUser);
body.appendChild(insertCpu);
body.appendChild(insertResults);

userDice = Math.floor((Math.random() * 6) + 1);
cpuDice = Math.floor((Math.random() * 6) + 1);

displayUser = document.getElementById("userroll");
displayCpu = document.getElementById("cpuroll");
displayResult = document.getElementById("result");

userRoll = document.createTextNode("You rolled: " + userDice);
cpuRoll = document.createTextNode("Computer rolled: " + cpuDice);
displayUser.appendChild(userRoll, userRoll);
displayCpu.appendChild(cpuRoll, cpuRoll);
if (userDice > cpuDice) {
    results = document.createTextNode("You win!");
} else if (cpuDice == userDice) {
    results = document.createTextNode("Draw.");
} else {
    results = document.createTextNode("You lose!");
}
displayResult.appendChild(results, results);
}