
/*------------------Global Variables-----------------*/


const WORDLIST = [
    "poisson",
    "chenille",
    "scorpion",
    "whisky",
    "godzilla",
    "formation",
    "oreiller"
];

const COMMANDS = [
    ["j" , "jouer"],
    ["r" , "règles"],
    ["q" , "quitter"]
];


//get a random word from WORDLIST
let pickRandomWord = WORDLIST[Math.floor(Math.random() * WORDLIST.length)];

//split the word to guess into underscores instead of letters
let guessWord = pickRandomWord.split("").map(x => "_");

let userScore = 7;

let gameInterface = null;

let toContinue = false;

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


// first prompt before the game get started
function interface(COMMANDS){

gameInterface = prompt(`${COMMANDS[0][0]} : ${COMMANDS[0][1]} \n${COMMANDS[1][0]} : ${COMMANDS[1][1]} \n${COMMANDS[2][0]} : ${COMMANDS[2][1]}`);

    return gameInterface;
    
};


/*------------------Logic----------------*/

// first prompt box to list all commands
interface(COMMANDS);



// check user input according to gameInterface
if (gameInterface === "j")
{
    toContinue = true;
    while ((userScore != 0) && (guessWord.includes("_"))){
        main();
    }
}
else if (gameInterface === "r")
{
    alert("règles");
} 
else if (gameInterface === "q")
{
    alert("Aurevoir !");
} else interface(COMMANDS);



// if userscore = 0, display loose, if word is found, display win, condition is activate only if the user pressed j at gameInterface.
if (toContinue)
userScore === 0 ? alert (`Vous avez perdu, le mot était ${pickRandomWord}.`) : alert (`Vous avez gagné, vous avez trouvé le mot ${pickRandomWord}.`);


