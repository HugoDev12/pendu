
/*------------------Global Variables-----------------*/


const WORDLIST = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla"


]

let pickRandomWord = WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
let userScore = 7;

//WORDLIST[Math.floor(Math.random() * WORDLIST.length)];



console.log(pickRandomWord);

let guessWord = pickRandomWord.split("").map(x => "_")//.join(" ");

console.log(guessWord.length);

//let userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);

    //= prompt(guessWord + "\n\n\n Choisissez une lettre.");

    //= prompt (`${userScore}\n\n${guessWord}\n\n\n Choisissez une lettre.`);

//let index = pickRandomWord.indexOf(userChoice);

//guessWord = guessWord.replace(guessWord.charAt(index),userChoice);

//guessWord[index] = userChoice;



function main(userScore){

let userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);
let index = pickRandomWord.indexOf(userChoice);

    if (pickRandomWord[index]){

        for (let i=0; i < guessWord.length; i++){

            if (pickRandomWord[i] === userChoice)
            {
                guessWord[i] = userChoice;
            };
        };
    } else userScore--;
return userScore;
}


while (guessWord.includes("_") || userScore === 0){
main(userScore);
}


//function scrollGuessWord 
// while (index){
//     guessWord[index] = userChoice;
// }

console.log(guessWord, userScore);
//console.log(guessWord.charAt((index*2)-1));

// alert(pickRandomWord);
// alert(guessWord);

//let guessWord = wordLetters.map(x => "_")//.join(" ");

//console.log(typeof guessWord);

// let userChoice = prompt(guessWord + "\n\n\n Choisissez une lettre.");

// let idx = pickRandomWord.indexOf(userChoice);

// console.log(guessWord.charAt((idx*2)-1));

// //guessWord = guessWord.replace((guessWord.charAt(idx*2)),userChoice);
// guessWord = guessWord.replace(guessWord.charAt(19), userChoice);

// alert(guessWord);

//let element = userChoice;

//let indices = [];
//console.log(guessWord.charAt(10));// = userChoice;

// let idx = pickRandomWord.indexOf(userChoice);
// while (idx != -1){
//     guessWord.charAt(idx*2) = userChoice;
//     indices.push(idx);
//     idx = pickRandomWord.indexOf(userChoice, idx +1);
// }

//alert(guessWord);

//console.log(guessWord);

//console.log(mapWord.fill())


//let fillLetter = wordLetters.indexOf(userChoice, userChoice);
//wordLetters.indexOf(userChoice);





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