/* 1 = rock
2 = paper
3 = scissors */
userDisp = document.getElementById("userDisp");
cpuDisp = document.getElementById("cpuDisp");
result = document.getElementById("results");

function rock(){
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1){
        userDisp.innerHTML = "You chose &#9751;."
        cpuDisp.innerHTML = "CPU chose &#9751;."
        result.innerHTML = "Tie."
    } else if (cpuChoice == 2) {
        userDisp.innerHTML = "You chose &#9751;."
        cpuDisp.innerHTML = "CPU chose &#9778;."
        result.innerHTML = "You lose."
        result.innerHTML = "You lose."
    } else if (cpuChoice == 3) {
        userDisp.innerHTML = "You chose &#9751;."
        cpuDisp.innerHTML = "CPU chose &#9988;."
        result.innerHTML = "You win!"
    }
}

function paper(){
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1){
        userDisp.innerHTML = "You chose &#9778;."
        cpuDisp.innerHTML = "CPU chose &#9751;."
        result.innerHTML = "You win!"
    } else if (cpuChoice == 2) {
        userDisp.innerHTML = "You chose &#9778;."
        cpuDisp.innerHTML = "CPU chose &#9778;."
        result.innerHTML = "Tie."
    } else if (cpuChoice == 3) {
        userDisp.innerHTML = "You chose &#9778;."
        cpuDisp.innerHTML = "CPU chose &#9988;."
        result.innerHTML = "You lose."
    }
}

function scissors(){
    cpuChoice = Math.floor(Math.random() * 3) + 1;
    if (cpuChoice == 1){
        userDisp.innerHTML = "You chose &#9988;."
        cpuDisp.innerHTML = "CPU chose &#9751;."
        results.innerHTML = "You lose."
    } else if (cpuChoice == 2) {
        userDisp.innerHTML = "You chose &#9988;."
        cpuDisp.innerHTML = "CPU chose &#9778;."
        result.innerHTML = "You win!"
    } else if (cpuChoice == 3) {
        userDisp.innerHTML = "You chose &#9988;."
        cpuDisp.innerHTML = "CPU chose &#9988;."
        result.innerHTML = "Tie."
    }
}