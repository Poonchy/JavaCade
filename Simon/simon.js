board = document.getElementById("simonBoard");

pattern = [];
userpattern = [];

function randomColor() {
    colorPicker = Math.floor((Math.random() * 4) + 1);
    pattern.push(colorPicker);
}

spacedInterval = 1000;

randomColor();
randomColor();
randomColor();

var cpuTurn = true;
var userTurn = false;

blue = document.getElementById("blue");
red = document.getElementById("red");
green = document.getElementById("green");
yellow = document.getElementById("yellow");

function blueBlink() {
    blue.style.backgroundColor = "blue";
    setTimeout(function() {
        blue.style.backgroundColor = "rgb(0,0,125)";
    }, 500);
}

function blueRevBlink() {
    blue.setAttribute("class", "square");
    setTimeout(function() {
        if (whosTurn.innerText!= "Computer's turn."){
            blue.setAttribute("class", "square canHover");
        }
    }, 100);
}

function greenBlink() {
    green.style.backgroundColor = "rgb(0, 255, 0)";
    setTimeout(function() {
        green.style.backgroundColor = "rgb(0,125,0)";
    }, 500);
}

function greenRevBlink() {
    green.setAttribute("class", "square");
    setTimeout(function() {
        if (whosTurn.innerText!= "Computer's turn."){
            green.setAttribute("class", "square canHover");
        }
    }, 100);
}

function redBlink() {
    red.style.backgroundColor = "red";
    setTimeout(function() {
        red.style.backgroundColor = "rgb(125,0,0)";
    }, 500);
}

function redRevBlink() {
    red.setAttribute("class", "square");
    setTimeout(function() {
        if (whosTurn.innerText!= "Computer's turn."){
            red.setAttribute("class", "square canHover");
        }
    }, 100);
}

function yellowBlink() {
    yellow.style.backgroundColor = "yellow";
    setTimeout(function() {
        yellow.style.backgroundColor = "rgb(125,125,0)";
    }, 500);
}

function yellowRevBlink() {
    yellow.setAttribute("class", "square");
    setTimeout(function() {
        if (whosTurn.innerText!= "Computer's turn."){
            yellow.setAttribute("class", "square canHover");
        }
    }, 100);
}

var turn = 0;
title = document.getElementById("title");
whosTurn = document.getElementById("whosturn");
whatTurn = document.getElementById("whatturn");


function beginGame() {
    turn = 0;
    turn ++;
    goButton = document.getElementById("beginGame");
    title.removeChild(goButton);
    whosTurn.innerHTML = "Computer's turn.";
    whatTurn.innerHTML = "Turn: " + turn;
    var squares = document.getElementsByClassName("square");
    blue.setAttribute("class", "square");
    red.setAttribute("class", "square");
    green.setAttribute("class", "square");
    yellow.setAttribute("class", "square");
    patternCount = pattern.length;
    userTurn = false;
    cpuTurn = true;
    setTimeout(function (){
        for (let i = 0; i < patternCount; i++){
            setTimeout( function timer() {
                squarePicker = squares[pattern[i] - 1].id;
                if (squarePicker == "blue") {
                    blue.style.backgroundColor = "blue";
                    setTimeout(blueBlink(), (2000*i));
                }
                if (squarePicker == "green") {
                    green.style.backgroundColor = "blue";
                    setTimeout(greenBlink(), (2000*i));
                }
                if (squarePicker == "red") {
                    red.style.backgroundColor = "red";
                    setTimeout(redBlink(), (2000*i));
                }
                if (squarePicker == "yellow") {
                    yellow.style.backgroundColor = "yellow";
                    setTimeout(yellowBlink(), (2000*i));
                }
            }, 1000 * i);
            setTimeout( function turntimer() {
                whosTurn.innerHTML = "Your turn!";
                blue.setAttribute("class", "square canHover");
                red.setAttribute("class", "square canHover");
                green.setAttribute("class", "square canHover");
                yellow.setAttribute("class", "square canHover");
                userTurn = true;
                cpuTurn = false;
            }, 1000 * patternCount);
        }
    }, 1000);
}

var squares = document.getElementsByClassName("square");
patternCount = pattern.length;
for (var j = 0; j<= patternCount; j++) {
    squares[j].onclick = function() {
        if (!userTurn) {
        } else {
            userGuess = this.id;
        if (userGuess == "blue") {
            userpattern.push(1);
            blueRevBlink();
        } else if (userGuess == "green") {
            userpattern.push(2);
            greenRevBlink();
        } else if (userGuess == "red") {
            userpattern.push(3);
            redRevBlink();
        } else if (userGuess == "yellow") {
            userpattern.push(4);
            yellowRevBlink();
        }
        for (i in userpattern) {
            if (userpattern[i] != pattern[i]){
                whosTurn.innerHTML = "You guessed wrong! Game over.";
                whatTurn.innerHTML = "Play again?";
                title.appendChild(goButton);
                userpattern = [];
                pattern = [];
                randomColor();
                randomColor();
                randomColor();
            }
        }
        if (userpattern.length == pattern.length) {
            userpattern = [];
            randomColor();
            var squares = document.getElementsByClassName("square");
            blue.setAttribute("class", "square");
            red.setAttribute("class", "square");
            green.setAttribute("class", "square");
            yellow.setAttribute("class", "square");
            patternCount = pattern.length;
            turn ++;
            whosTurn.innerHTML = "Computer's turn.";
            whatTurn.innerHTML = "Turn: " + turn;
            setTimeout(function (){
                for (let i = 0; i < patternCount; i++){
                    blue.setAttribute("class", "square");
                    red.setAttribute("class", "square");
                    green.setAttribute("class", "square");
                    yellow.setAttribute("class", "square");
                    setTimeout( function timer() {
                        squarePicker = squares[pattern[i] - 1].id;
                        if (squarePicker == "blue") {
                            blue.style.backgroundColor = "blue";
                            setTimeout(blueBlink(), (2000*i));
                        }
                        if (squarePicker == "green") {
                            green.style.backgroundColor = "blue";
                            setTimeout(greenBlink(), (2000*i));
                        }
                        if (squarePicker == "red") {
                            red.style.backgroundColor = "red";
                            setTimeout(redBlink(), (2000*i));
                        }
                        if (squarePicker == "yellow") {
                            yellow.style.backgroundColor = "yellow";
                            setTimeout(yellowBlink(), (2000*i));
                        }
                    }, 1000 * i);
                    setTimeout( function turntimer() {
                        whosTurn.innerHTML = "Your turn!";
                        blue.setAttribute("class", "square canHover");
                        red.setAttribute("class", "square canHover");
                        green.setAttribute("class", "square canHover");
                        yellow.setAttribute("class", "square canHover");
                        userTurn = true;
                        cpuTurn = false;
                    }, 1000 * patternCount);
                }
            }, 1000);
        }
    }
    }
}

