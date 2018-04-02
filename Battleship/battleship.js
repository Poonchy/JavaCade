var gameOver = document.getElementById("lose-modal");
var winScreen = document.getElementById("win-modal");

var showTurn = document.getElementById("turnsLeft");
turnsLeft = 18;
showTurn.innerHTML = "You have " + turnsLeft + " turns left.";

board = document.getElementById("board");
var blockNumber = 1;
for (let i = 1; i <=6; i++) {
    boardRow = document.createElement("tr");
    boardRow.setAttribute("id", "row-" + i);
    board.appendChild(boardRow);
    for (let j = 1; j <=6; j++) {
        boardCol = document.createElement("td");
        boardCol.setAttribute("id", "row-" + i + "-col-" + j);
        boardCol.setAttribute("class", "boardblock block-" + blockNumber);
        blockNumber ++;
        boardRow.appendChild(boardCol);
    }
}

smolTableWidth = document.getElementById("board");
smolTableWidth.style.marginRight = "-250px;"

scoreBoard = document.getElementById("score");
scoreRow = document.createElement("tr");
scoreTurn = document.createElement("td");
scoreData = document.createElement("td");
var turn = 0;

//Creating the horiozntal ship
threeHorRow = Math.floor((Math.random() * 6) + 1);
threeHorColTwo = Math.floor((Math.random() * 4) + 2);
threeHorColOne = threeHorColTwo - 1
threeHorColThree = threeHorColTwo + 1

threeHorColTwoPoS = document.getElementById("row-"+threeHorRow+"-col-"+threeHorColTwo);
threeHorColOnePoS = document.getElementById("row-"+threeHorRow+"-col-"+threeHorColOne);
threeHorColThreePoS = document.getElementById("row-"+threeHorRow+"-col-"+threeHorColThree);

//creating the vertical ship
threeVerCol = Math.floor((Math.random() * 6) + 1);
threeVerRowTwo = Math.floor((Math.random() * 4) + 2);
threeVerRowOne = threeVerRowTwo - 1
threeVerRowThree = threeVerRowTwo + 1

while (("row-"+threeVerRowTwo+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColTwo) || ("row-"+threeVerRowTwo+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColOne) || ("row-"+threeVerRowTwo+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColThree) || ("row-"+threeVerRowOne+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColTwo) || ("row-"+threeVerRowOne+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColOne) || ("row-"+threeVerRowOne+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColThree) || ("row-"+threeVerRowThree+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColTwo) || ("row-"+threeVerRowThree+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColOne) || ("row-"+threeVerRowThree+"-col-"+threeVerCol == "row-"+threeHorRow+"-col-"+threeHorColThree)) {
    threeVerCol = Math.floor((Math.random() * 6) + 1);
    threeVerRowTwo = Math.floor((Math.random() * 4) + 2);
    threeVerRowOne = threeVerRowTwo - 1
    threeVerRowThree = threeVerRowTwo + 1
}

threeVerRowTwoPoS = document.getElementById("row-"+threeVerRowTwo+"-col-"+threeVerCol);
threeVerRowOnePoS = document.getElementById("row-"+threeVerRowOne+"-col-"+threeVerCol);
threeVerRowThreePoS = document.getElementById("row-"+threeVerRowThree+"-col-"+threeVerCol);

var userGuess;
var hitCounter = 0;

var block = document.getElementsByClassName("boardblock");
blockCount = block.length;
for (var j = 0; j< blockCount; j++) {
    block[j].onclick = function() {
        userGuess = this.id;
        if (turn == 18) {
            gameOver.style.display = "block";
        } else if (hitCounter == 6) {
            winScreen.style.display = "block";
        } else {
            if ((this.id == "sunk") || (this.id == "destroyed") || (this.id == "missed")) {
        } else if ((userGuess != threeVerRowTwoPoS.id) && (userGuess != threeVerRowOnePoS.id) && (userGuess != threeVerRowThreePoS.id) && (userGuess != threeHorColThreePoS.id) && (userGuess != threeHorColTwoPoS.id) && (userGuess != threeHorColOnePoS.id)) {
            missShip = document.createTextNode("X");
            this.appendChild(missShip);
            this.setAttribute("id", "missed");
            turn ++;
            userTurn = document.createTextNode("Turn: " + turn);
            userAction = document.createTextNode("Missed.");
            scoreRow[turn] = document.createElement("tr");
            scoreTurn[turn] = document.createElement("td");
            scoreData[turn] = document.createElement("td");
            scoreBoard.appendChild(scoreRow[turn]);
            scoreRow[turn].appendChild(scoreTurn[turn]);
            scoreRow[turn].appendChild(scoreData[turn]);
            scoreData[turn].appendChild(userAction);
            scoreTurn[turn].appendChild(userTurn);
            if (turn == 18){
                gameOver.style.display = "block";
            }
        } else if ((userGuess == threeVerRowTwoPoS.id) || (userGuess == threeVerRowOnePoS.id) || (userGuess == threeVerRowThreePoS.id) || (userGuess == threeHorColThreePoS.id) || (userGuess == threeHorColTwoPoS.id) || (userGuess == threeHorColOnePoS.id)) {
            hitShip = document.createTextNode("H");
            this.appendChild(hitShip);
            this.setAttribute("id", "sunk");
            turn ++;
            hitCounter ++;
            if (hitCounter == 6) {
                winScreen.style.display = "block";
            }
            if ((threeVerRowTwoPoS.id == "sunk") && (threeVerRowOnePoS.id == "sunk") && (threeVerRowThreePoS.id == "sunk")) {
                threeVerRowTwoPoS.id = "destroyed";
                threeVerRowOnePoS.id = "destroyed";
                threeVerRowThreePoS.id = "destroyed";
                threeVerRowTwoPoS.innerHTML = "D";
                threeVerRowOnePoS.innerHTML = "D";
                threeVerRowThreePoS.innerHTML = "D";
                userTurn = document.createTextNode("Turn: " + turn);
                userAction = document.createTextNode("Sunk vertical ship!");
                scoreRow[turn] = document.createElement("tr");
                scoreTurn[turn] = document.createElement("td");
                scoreData[turn] = document.createElement("td");
                scoreBoard.appendChild(scoreRow[turn]);
                scoreRow[turn].appendChild(scoreTurn[turn]);
                scoreRow[turn].appendChild(scoreData[turn]);
                scoreData[turn].appendChild(userAction);
                scoreTurn[turn].appendChild(userTurn);
            } else if ((threeHorColTwoPoS.id == "sunk") && (threeHorColOnePoS.id == "sunk") && (threeHorColThreePoS.id == "sunk")) {
                threeHorColTwoPoS.id = "destroyed";
                threeHorColOnePoS.id = "destroyed";
                threeHorColThreePoS.id = "destroyed";
                threeHorColTwoPoS.innerHTML = "D";
                threeHorColOnePoS.innerHTML = "D";
                threeHorColThreePoS.innerHTML = "D";
                userTurn = document.createTextNode("Turn: " + turn);
                userAction = document.createTextNode("Sunk horizontal ship!");
                scoreRow[turn] = document.createElement("tr");
                scoreTurn[turn] = document.createElement("td");
                scoreData[turn] = document.createElement("td");
                scoreBoard.appendChild(scoreRow[turn]);
                scoreRow[turn].appendChild(scoreTurn[turn]);
                scoreRow[turn].appendChild(scoreData[turn]);
                scoreData[turn].appendChild(userAction);
                scoreTurn[turn].appendChild(userTurn);
            } else {
                userTurn = document.createTextNode("Turn: " + turn);
                userAction = document.createTextNode("Hit a ship!");
                scoreRow[turn] = document.createElement("tr");
                scoreTurn[turn] = document.createElement("td");
                scoreData[turn] = document.createElement("td");
                scoreBoard.appendChild(scoreRow[turn]);
                scoreRow[turn].appendChild(scoreTurn[turn]);
                scoreRow[turn].appendChild(scoreData[turn]);
                scoreData[turn].appendChild(userAction);
                scoreTurn[turn].appendChild(userTurn);
            } 
        }
        turnsLeft = 18 - turn;
        if (turnsLeft == 1) {
            showTurn.innerHTML = "You have " + turnsLeft + " turn left.";
        } else {
            showTurn.innerHTML = "You have " + turnsLeft + " turns left.";
        }
    }
    }
}