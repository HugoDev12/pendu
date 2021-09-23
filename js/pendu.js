
/*------------------Global Variables-----------------*/


let wordList = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla"
]

let pickRandomWord = wordList[Math.floor(Math.random() * wordList.length)];

let wordLetters = pickRandomWord.split("");

let mapWord = wordLetters.map(x => "_").join(" ");

alert(mapWord);

// for (let hideLetter of wordLetters){
//     hideLetter = "_";
    // console.log(hideLetter);
// }



// const correctLetter = (currentLetter) => currentLetter != "l";

// console.log(wordLetters.every(correctLetter));

//wordLetters.includes("l") ? console.log("true") : console.log("false");

//console.log(hideLetter);




// function wordGuess(wordLetters){
//     let attempts = 7;
//     let userLetter = prompt("choisissez une lettre");
// }








//alert("Bienvenue ! vous allez jouer au pendu !");