var hardWinScreen = document.getElementById("hard-win-modal");
var easyWinScreen = document.getElementById("easy-win-modal");
function createCSSSelector (selector, style) {
    if (!document.styleSheets) return;
    if (document.getElementsByTagName('head').length == 0) return;
  
    var styleSheet,mediaType;
  
    if (document.styleSheets.length > 0) {
      for (var i = 0, l = document.styleSheets.length; i < l; i++) {
        if (document.styleSheets[i].disabled) 
          continue;
        var media = document.styleSheets[i].media;
        mediaType = typeof media;
  
        if (mediaType === 'string') {
          if (media === '' || (media.indexOf('screen') !== -1)) {
            styleSheet = document.styleSheets[i];
          }
        }
        else if (mediaType=='object') {
          if (media.mediaText === '' || (media.mediaText.indexOf('screen') !== -1)) {
            styleSheet = document.styleSheets[i];
          }
        }
  
        if (typeof styleSheet !== 'undefined') 
          break;
      }
    }
  
    if (true) {
      var styleSheetElement = document.createElement('style');
      styleSheetElement.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
  
      for (i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].disabled) {
          continue;
        }
        styleSheet = document.styleSheets[i];
      }
  
      mediaType = typeof styleSheet.media;
    }
  
    if (mediaType === 'string') {
      for (var i = 0, l = styleSheet.rules.length; i < l; i++) {
        if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase()==selector.toLowerCase()) {
          styleSheet.rules[i].style.cssText = style;
          return;
        }
      }
      styleSheet.addRule(selector,style);
    }
    else if (mediaType === 'object') {
      var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
      for (var i = 0; i < styleSheetLength; i++) {
        if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
          styleSheet.cssRules[i].style.cssText = style;
          return;
        }
      }
      styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
    }
  }

function hardMode() {
    body = document.getElementById("body");
    easyBtn = document.getElementById("easy");
    hardBtn = document.getElementById("difficult");
    body.removeChild(easyBtn);
    body.removeChild(hardBtn);

    cardsTable = document.getElementById("cards");
    var card = 1;
    for (let i = 1; i <=7; i++) {
        cardsRow = document.createElement("tr");
        cardsRow.setAttribute("id", "row-" + i);
        cardsTable.appendChild(cardsRow);
        for (let j = 1; j <=7; j++) {
            cardsCol = document.createElement("td");
            cardsCol.setAttribute("id", "row-" + i + "-col-" + j);
            cardsCol.setAttribute("class", "cards");
            card ++;
            cardsRow.appendChild(cardsCol);
        }
    }
    middleCard = document.getElementById("row-4-col-4");
    middleCard.innerHTML = "❤";
    
    alphabet = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
    colors = ["black","red","blue","green","purple","brown","orange","teal","yellow","gold","black","red","blue","green","purple","brown","orange","teal","yellow","gold","purple","green","red","orange"];
    
    cardsUsed = [];

    
    alphabetcount = alphabet.length * 2;
    
    for (let c = 0; c <= alphabetcount; c++) {
        randomCol = Math.floor((Math.random() * 7) + 1);
        randomRow = Math.floor((Math.random() * 7) + 1);
        cardSlot = "row-" + randomRow + "-col-" + randomCol;
        while (cardsUsed.includes(cardSlot)) {
            randomCol = Math.floor((Math.random() * 7) + 1);
            randomRow = Math.floor((Math.random() * 7) + 1);
            cardSlot = "row-" + randomRow + "-col-" + randomCol;
        }
        cardsUsed.push(cardSlot);
    }
    
    middleIndex = cardsUsed.indexOf("row-4-col-4")
    cardsUsed.splice(middleIndex, 1);
    
    remainingCards = cardsUsed.length;
    
    for (i = 0; i < remainingCards; i+=2) {
        firstLetter = document.getElementById(cardsUsed[i]);
        prevClass = document.getElementById(cardsUsed[i]).className;
        firstInsert = alphabet[(i/2)];
        firstLetter.setAttribute("class", prevClass + " " + firstInsert);
        createCSSSelector("." + firstInsert, "color: " + colors[(i/2)] + ";");
    }
    
    for (i = 1; i < remainingCards; i+=2) {
        firstLetter = document.getElementById(cardsUsed[i]);
        prevClass = document.getElementById(cardsUsed[i]).className;
        firstInsert = alphabet[(i-1) / 2];
        firstLetter.setAttribute("class", prevClass + " " + firstInsert);
        createCSSSelector("." + firstInsert, "color: " + colors[(i-1) / 2] + ";");
    }
    
    heartBox = document.getElementById("row-4-col-4");
    heartBox.setAttribute("class", "matched");
    
    var userCards = document.getElementsByClassName("cards");
    availableCards = userCards.length;
    for (var j = 0; j< availableCards; j++) {
        userFirst = "";
        userSecond = "";
        userCards[j].onclick = function() {
            matchedCheck = this.className;
            if ((matchedCheck == "matched " + firstLetter)){
    
            } else {
                if (userFirst != "") {
                    secondGuess = this;
                    userSecond = this.className;
                    secondLetterIndex = userSecond.length;
                    secondLetter = userSecond.charAt(secondLetterIndex - 1);
                    this.innerHTML = secondLetter;
                    if (userFirst == userSecond) {
                        firstGuess.setAttribute("class", "matched " + firstLetter);
                        secondGuess.setAttribute("class", "matched " + secondLetter);
                        userFirst = "";
                        userSecond = "";
                        var totalMatched = document.getElementsByClassName("matched");
                        matchedCount = totalMatched.length;
                        if (matchedCount == 49) {
                            hardWinScreen.style.display = "block";
                        }
                    } else {
                        if (userSecond == "matched " + secondLetter) {
                            userSecond = "";
                        } else {
                        firstGuess.setAttribute("class", "matched " + firstLetter);
                        secondGuess.setAttribute("class", "matched " + secondLetter);
                        setTimeout(function() {
                            alert ("Not a match!");
                            firstGuess.setAttribute("class", "cards " + firstLetter);
                            secondGuess.setAttribute("class", "cards " + secondLetter);
                            firstGuess.innerHTML = "";
                            secondGuess.innerHTML = "";
                            userFirst = "";
                            userSecond = "";
                        }, 1);
                    }
                    }
                } else {
                    firstGuess = this;
                    userFirst = this.className;
                    firstLetterIndex = userFirst.length;
                    firstLetter = userFirst.charAt(firstLetterIndex - 1);
                    this.innerHTML = firstLetter;
                    this.setAttribute("class", "matched " + firstLetter);
                }
            }
        }
    }
}

function easyMode() {
    body = document.getElementById("body");
    easyBtn = document.getElementById("easy");
    hardBtn = document.getElementById("difficult");
    body.removeChild(easyBtn);
    body.removeChild(hardBtn);

    cardsTable = document.getElementById("cards");
    var card = 1;
    for (let i = 1; i <=4; i++) {
        cardsRow = document.createElement("tr");
        cardsRow.setAttribute("id", "row-" + i);
        cardsTable.appendChild(cardsRow);
        for (let j = 1; j <=4; j++) {
            cardsCol = document.createElement("td");
            cardsCol.setAttribute("id", "row-" + i + "-col-" + j);
            cardsCol.setAttribute("class", "cards");
            card ++;
            cardsRow.appendChild(cardsCol);
        }
    }
    
    alphabet = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P"];
    colors = ["black","red","blue","green","purple","brown","orange","teal","yellow","gold","black","red","blue","green","purple","brown","orange","teal","yellow","gold","purple","green","red","orange"];
    
    cardsUsed = [];

    
    alphabetcount = alphabet.length;
    
    for (let c = 0; c <= alphabetcount; c++) {
        randomCol = Math.floor((Math.random() * 4) + 1);
        randomRow = Math.floor((Math.random() * 4) + 1);
        cardSlot = "row-" + randomRow + "-col-" + randomCol;
        while (cardsUsed.includes(cardSlot)) {
            randomCol = Math.floor((Math.random() * 4) + 1);
            randomRow = Math.floor((Math.random() * 4) + 1);
            cardSlot = "row-" + randomRow + "-col-" + randomCol;
        }
        cardsUsed.push(cardSlot);
    }
    
    remainingCards = cardsUsed.length;
    
    for (i = 0; i < remainingCards; i+=2) {
        firstLetter = document.getElementById(cardsUsed[i]);
        prevClass = document.getElementById(cardsUsed[i]).className;
        firstInsert = alphabet[(i/2)];
        firstLetter.setAttribute("class", prevClass + " " + firstInsert);
        createCSSSelector("." + firstInsert, "color: " + colors[(i/2)] + ";");
    }
    
    for (i = 1; i < remainingCards; i+=2) {
        firstLetter = document.getElementById(cardsUsed[i]);
        prevClass = document.getElementById(cardsUsed[i]).className;
        firstInsert = alphabet[(i-1) / 2];
        firstLetter.setAttribute("class", prevClass + " " + firstInsert);
        createCSSSelector("." + firstInsert, "color: " + colors[(i-1) / 2] + ";");
    }
    
    var userCards = document.getElementsByClassName("cards");
    availableCards = userCards.length;
    for (var j = 0; j< availableCards; j++) {
        userFirst = "";
        userSecond = "";
        userCards[j].onclick = function() {
            matchedCheck = this.className;
            if ((matchedCheck == "matched " + firstLetter)){
    
            } else {
                if (userFirst != "") {
                    secondGuess = this;
                    userSecond = this.className;
                    secondLetterIndex = userSecond.length;
                    secondLetter = userSecond.charAt(secondLetterIndex - 1);
                    this.innerHTML = secondLetter;
                    if (userSecond == "matched " + secondLetter) {
                        userSecond = "";
                    } else if(userFirst == userSecond) {
                        firstGuess.setAttribute("class", "matched " + firstLetter);
                        secondGuess.setAttribute("class", "matched " + secondLetter);
                        userFirst = "";
                        userSecond = "";
                        var totalMatched = document.getElementsByClassName("matched");
                        matchedCount = totalMatched.length;
                        if (matchedCount == 16) {
                            easyWinScreen.style.display = "block";
                        }
                    } else {
                        if (userSecond == "matched " + secondLetter) {
                            userSecond = "";
                        } else {
                            firstGuess.setAttribute("class", "matched " + firstLetter);
                            secondGuess.setAttribute("class", "matched " + secondLetter);
                            setTimeout(function() {
                                alert ("Not a match!");
                                firstGuess.setAttribute("class", "cards " + firstLetter);
                                secondGuess.setAttribute("class", "cards " + secondLetter);
                                firstGuess.innerHTML = "";
                                secondGuess.innerHTML = "";
                                userFirst = "";
                                userSecond = "";
                            }, 1);
                        }
                    }
                } else {
                    firstGuess = this;
                    userFirst = this.className;
                    firstLetterIndex = userFirst.length;
                    firstLetter = userFirst.charAt(firstLetterIndex - 1);
                    this.innerHTML = firstLetter;
                    this.setAttribute("class", "matched " + firstLetter);
                }
            }
        }
    }
}