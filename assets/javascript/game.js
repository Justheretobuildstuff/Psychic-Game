// Creating my variables
var wins = 0;
var losses = 0;
var guessesleft = 0;
var whatyouguessed = "";
var chars = ["abcdefghijklmnopqurstuvwxyz"];

// Writing my function
document.onkeyup = function(event) {

    var userguess = event.key;
    var computerGuess = chars[Math.floor(Math.random() * chars.length)];

    if (userguess === chars) {
        if ((userguess === "a") && (computerGuess === "a")) {
            wins++;
        }
    }
    document.querySelector("#game").innerHTML = index.html;
};