
/*------------------Global Variables-----------------*/


const WORDLIST = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla"


]

let pickRandomWord = WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
let guessWord = pickRandomWord.split("").map(x => "_");
let userScore = 7;
console.log(pickRandomWord);



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
};


/*------------------Logic----------------*/

alert ("Vous allez jouer à un pendu!");

while ((userScore != 0) && (guessWord.includes("_"))){
    main();
}

userScore === 0 ? alert (`Vous avez perdu, le mot était ${pickRandomWord}.`) : alert (`Vous avez gagné, vous avez trouvé le mot ${pickRandomWord}.`);


