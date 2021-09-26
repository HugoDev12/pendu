
/*------------------Global Variables-----------------*/


const WORDLIST = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla",
    "formation",
    "galipettes"
];


//get a random word from WORDLIST
let pickRandomWord = WORDLIST[Math.floor(Math.random() * WORDLIST.length)];

//split the word to guess into underscores instead of letters
let guessWord = pickRandomWord.split("").map(x => "_");

let userScore = 7;



/*---------------------------Functions-----------------*/


function main (){

let hiddenWord = guessWord.toString().replaceAll(","," "); //transform the object guessWord into a string to replace "","" by space.
let userChoice = prompt (`Trouvez le mot \n\n${hiddenWord}\n\nChoisissez une lettre.\n(Il vous reste ${userScore} essais.)`); 
let index = pickRandomWord.indexOf(userChoice);


// first if to verify is user imput is correct, else userscore --. 
    if ((pickRandomWord[index]) && (/^[a-zA-Z]+$/.test(userChoice))){
        for (let i=0; i < guessWord.length; i++){

            if (pickRandomWord[i] === userChoice)
            {
            guessWord[i] = userChoice; //push letters found by the user in a loop.
            };
        };
    } else userScore --;
};


/*------------------Logic----------------*/

alert ("Vous allez jouer à un pendu!");

//call main function in a loop
while ((userScore != 0) && (guessWord.includes("_"))){
    main();
}

// if userscore = 0, display loose, if word is found, display win
userScore === 0 ? alert (`Vous avez perdu, le mot était ${pickRandomWord}.`) : alert (`Vous avez gagné, vous avez trouvé le mot ${pickRandomWord}.`);


