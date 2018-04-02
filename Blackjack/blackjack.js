var userTotal = 0;
var userScore = 0;
var userCard;
var cpuTotal = 0;
var cpuScore = 0;
var cpuCard;
var cardValue;
var btnHold = document.getElementById("buttonHold");
var scoresDisp = document.getElementById("score");
var whatHappened = document.getElementById("boardState");
var cpuBtn = document.getElementById("cpuBtn");
var userBtn = document.getElementById("userBtn");
var userScoreDisp = document.getElementById("userScoreDisp");
var cpuScoreDisp = document.getElementById("cpuScoreDisp");

function generateCard() {
    card = Math.floor(Math.random() * 52) + 1;
    if ((card > 0) && (card < 5)) {
        cardValue = prompt("One or Eleven");
        while ((cardValue != 1) && (cardValue != 11)){
            cardValue = prompt("Not a valid number. One or eleven.");
        }
    } else if ((card > 4) && (card < 9)) {
        cardValue = 2;
    } else if ((card > 8) && (card < 13)) {
        cardValue = 3;
    } else if ((card > 12) && (card < 17)) {
        cardValue = 4;
    } else if ((card > 16) && (card < 21)) {
        cardValue = 5;
    } else if ((card > 20) && (card < 25)) {
        cardValue = 6;
    } else if ((card > 24) && (card < 29)) {
        cardValue = 7;
    } else if ((card > 28) && (card < 33)) {
        cardValue = 8;
    } else if ((card > 32) && (card < 37)) {
        cardValue = 9;
    } else {
        cardValue = 10;
    }
}

function generateCpuCard() {
    card = Math.floor(Math.random() * 52) + 1;
    if ((card > 0) && (card < 5)) {
        cardValue = 1;
    } else if ((card > 4) && (card < 9)) {
        cardValue = 2;
    } else if ((card > 8) && (card < 13)) {
        cardValue = 3;
    } else if ((card > 12) && (card < 17)) {
        cardValue = 4;
    } else if ((card > 16) && (card < 21)) {
        cardValue = 5;
    } else if ((card > 20) && (card < 25)) {
        cardValue = 6;
    } else if ((card > 24) && (card < 29)) {
        cardValue = 7;
    } else if ((card > 28) && (card < 33)) {
        cardValue = 8;
    } else if ((card > 32) && (card < 37)) {
        cardValue = 9;
    } else {
        cardValue = 10;
    }
}

function userPlay() {
    generateCard();
    cardValue = cardValue - 1;
    cardValue = cardValue + 1;
    userTotal = userTotal + cardValue;
    space = document.createElement("br");
    superSpace = document.createElement("br");
    whatCard = document.createTextNode("You drew a: " + cardValue)
    whatHappened.appendChild(whatCard);
    whatHappened.appendChild(superSpace);
    totalDisp = document.createTextNode("Your total is now: " + userTotal)
    whatHappened.appendChild(totalDisp);
    whatHappened.appendChild(space);
    if (userTotal == 21) {
        setTimeout(function() {
            alert("You win!");
            userScore += 1;
            userTotal = 0;
            cpuTotal = 0;
            userScoreDisp.innerHTML = "Your score: " + userScore;
            whatHappened.innerHTML = "";
        },1);
    } else if (userTotal > 21) {
        setTimeout(function() {
            alert("You lose!");
            cpuScore += 1;
            userTotal = 0;
            cpuTotal = 0;
            cpuScoreDisp.innerHTML = "CPU score: " + cpuScore;
            whatHappened.innerHTML = "";
        },1);
    }
}

function cpuPlay() {
    btnHold.removeChild(cpuBtn);
    btnHold.removeChild(userBtn);
    seperation = document.createElement("p");
    whatHappened.appendChild(seperation);
    cpuTotal = 0;
    while (cpuTotal <= userTotal) {
        generateCpuCard();
        cardValue = cardValue - 1;
        cardValue = cardValue + 1;
        cpuTotal = cpuTotal + cardValue;
        space = document.createElement("br");
        superSpace = document.createElement("br");
        whatCard = document.createTextNode("CPU drew a: " + cardValue)
        whatHappened.appendChild(whatCard);
        whatHappened.appendChild(superSpace);
        totalDisp = document.createTextNode("CPU total is now: " + cpuTotal)
        whatHappened.appendChild(totalDisp);
        whatHappened.appendChild(space);
    }
    if (cpuTotal > 21) {
        setTimeout(function() {
            alert("You win!");
            userScore += 1;
            userTotal = 0;
            cpuTotal = 0;
            userScoreDisp.innerHTML = "Your score: " + userScore;
            whatHappened.innerHTML = "";
        },1);
    } else {
        setTimeout(function() {
            alert("You lose!");
            cpuScore += 1;
            userTotal = 0;
            cpuTotal = 0;
            cpuScoreDisp.innerHTML = "CPU score: " + cpuScore;
            whatHappened.innerHTML = "";
        },1);
    }
    btnHold.appendChild(userBtn);
    btnHold.appendChild(cpuBtn);
}

