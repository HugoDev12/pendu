
/*------------------Global Variables-----------------*/


const WORDLIST = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla"


]

let pickRandomWord = WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
let guessWord = pickRandomWord.split("").map(x => "_");//.join(" ");
//let hiddenWord = guessWord.toString().replaceAll(","," ");

//guessWord = guessWord.replaceAll(","," ");
let userScore = 7;
console.log(pickRandomWord);
// let index = pickRandomWord.indexOf(userChoice);


/*---------------------------Functions-----------------*/


function main (){

let hiddenWord = guessWord.toString().replaceAll(","," ");
let userChoice = prompt (`Trouvez le mot \n\n${hiddenWord}\n\nChoisissez une lettre.\n(Il vous reste ${userScore} essais.)`);
let index = pickRandomWord.indexOf(userChoice);


    if ((pickRandomWord[index]) && (/^[a-zA-Z]+$/.test(userChoice))){
        for (let i=0; i < guessWord.length; i++){

            if (pickRandomWord[i] === userChoice)
            {
            guessWord[i] = userChoice;
            };
        };
    } else userScore --;

    // guessWord = guessWord.toString();
    // guessWord = guessWord.replaceAll(","," ");
};


/*------------------Logic----------------*/

alert ("Vous allez jouer à un pendu!");

while ((userScore != 0) && (guessWord.includes("_"))){
    main();
}

userScore === 0 ? alert ("Vous avez perdu") : alert ("Vous avez gagné");

console.log(guessWord, userScore);





//let userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);

    //= prompt(guessWord + "\n\n\n Choisissez une lettre.");

    //= prompt (`${userScore}\n\n${guessWord}\n\n\n Choisissez une lettre.`);

//let index = pickRandomWord.indexOf(userChoice);

//guessWord = guessWord.replace(guessWord.charAt(index),userChoice);

//guessWord[index] = userChoice;









//function main(userScore){

//let userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);
// let userChoice = "";
// // let index = pickRandomWord.indexOf(userChoice);


// // for (let i=0; i < guessWord.length; i++){

// //     if (pickRandomWord[i] === userChoice)
// //     {
// //         guessWord[i] = userChoice;
// //     };
// // };

// function main (userChoice, userScore){

//        userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);
//    let index = pickRandomWord.indexOf(userChoice);


//     while ((/^[a-zA-Z]+$/.test(userChoice)) || (pickRandomWord[index]))
//     {
//         for (let i=0; i < guessWord.length; i++){

//             if (pickRandomWord[i] === userChoice)
//             {
//                 guessWord[i] = userChoice;
//             } else userScore --;
//         };
        
//     }

//     return userChoice, userScore;
// };

// main(userChoice, userScore);

// console.log(guessWord, userScore);


//     if (/^[a-zA-Z]+$/.test(userChoice)){

//         for (let i=0; i < guessWord.length; i++){

//             if (pickRandomWord[i] === userChoice)
//             {
//                 guessWord[i] = userChoice;
//             };
//         };
//     } else {
//       console.log("test");
//     }
// return userScore;
// }


// function main(userScore){

// let userChoice = prompt (`Il vous reste ${userScore} essais\n\n${guessWord}\n\n\n Choisissez une lettre.`);
// let index = pickRandomWord.indexOf(userChoice);

// if (pickRandomWord[index]){
//     for (let i=0; i < guessWord.length; i++){

//         if (pickRandomWord[i] === userChoice)
//         {
//             guessWord[i] = userChoice;
//         };
//     };
// } else userScore--;

// return userScore;
// };


// if (/^[a-zA-Z]+$/.test(userChoice)){

//     while (guessWord.includes("_") || userScore === 0){
//     main(userScore);
//     }
// } else main(userScore);


// for (let i=0; i < guessWord.length; i++){

//     if (pickRandomWord[i] === userChoice)
//     {
//         guessWord[i] = userChoice;
//     };
// };


//function scrollGuessWord 
// while (index){
//     guessWord[index] = userChoice;
// }

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