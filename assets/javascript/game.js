// Creating my variables
var wins = 0;
var losses = 0;
var guessesleft = 9;
var whatyouguessed = "";
var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "u", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

// Writing my function
document.onkeyup = function (event) {

    var userguess = event.key;
    var computerGuess = chars[Math.floor(Math.random() * chars.length)];


        if (userguess === computerGuess) {
            wins++;
        }

        else 
            console.log(computerGuess);
                document.getElementById("letters").innerHTML = userguess;
      
                var html =
                "<p>You chose: " + userGuess + "</p>" +
                "<p>The computer chose: " + computerGuess + "</p>" +
                "<p>wins: " + wins + "</p>" +
                "<p>losses: " + losses + "</p>" +
                "<p>ties: " + ties + "</p>";
                document.querySelector("#game").innerHTML = html;
    };