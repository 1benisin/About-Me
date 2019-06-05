
'use strict';   


// var q1Truth = 'N';
// var q2Truth = 'Y';
// var q3Truth = 'Y';
// var q4Truth = 'Y';
// var q5Truth = 'Y';

// // ___ Question 1
// var q1Answer = prompt('(Y/N) Is my full name Benjamin James Clark?').toUpperCase();
// console.log(q1Answer);
// if (q1Answer === 'N') {
//     alert('Right, my son\'s middle name is James. Mine is Jacob.')
// } else if (q1Answer === 'Y') {
//     alert('Wrong, my son\'s middle name is James. Mine is Jacob.')
// } else {
//     alert('Type a \'Y\' for Yes and a \'N\' for No')
// }

// // ___ Question 2
// var q2Answer = prompt('(Y/N) Do I have more than 5 siblings?').toUpperCase();
// console.log(q2Answer);
// if (q2Answer === 'Y') {
//     alert('You are correct. I have 7 siblings')
// } else if (q2Answer === 'N'){
//     alert('Nope, I\'m one of 8. My mom was busy')
// } else {
//     alert('Type a \'Y\' for Yes and a \'N\' for No')
// }

// // ___ Question 3
// var q3Answer = prompt('(Y/N) Do I live with parents?').toUpperCase();
// console.log(q3Answer);
// if (q3Answer === q3Truth) {
//     alert('Wellllll... technically you\'re correct. My dad lives with me')
// } else {
//     alert('Wellllll... technically you\'re wrong. My dad lives with me')
// }

// // ___ Question 4
// var q4Answer = prompt('(Y/N) Have I ever had a parachute malfunction while jumping from a plane?').toUpperCase();
// console.log(q4Answer);
// if (q4Answer === q4Truth) {
//     alert('Oooh. So you do know I\'m a dangerous devil')
// } else {
//     alert('Your wrong. I almost died. Wouldn\'t be the first time')
// }

// // ___ Question 5
// var q5Answer = prompt('(Y/N) Will you be my neighbor?').toUpperCase();
// console.log(q5Answer);
// if (q5Answer === q5Truth) {
//     alert('Ahhh. Your so nice')
// } else {
//     alert('Hey, I\'m a nice guy. I promise not to walk around naked in front of the windows.')
// }

// // ___ Question 6


// ___ Question 7

    // - Uppercase array of visited countries
var countriesVisited = ['USA', 'US', 'united states of america', 'spain', 'france', 'uk', 'united kingdom', 'england', 'scotland', 'ireland', 'italy', 'india', 'canada', 'mexico', 'australia'];
for (var i = 0; i < countriesVisited.length; i++) {
    countriesVisited[i] = countriesVisited[i].toUpperCase();
}
console.log(countriesVisited);

    // - test if user guess is in array
var gotItRightQ7 = false;
var numberOfGuessesQ7 = 5;

while (!gotItRightQ7 && numberOfGuessesQ7 > 0) {
            // - propt question
        var userGuess = prompt('Guess the name of a country I\'ve visited? You only get 5 guesses').toUpperCase();
        console.log(userGuess);
        // - check array for match
    for (var index = 0; index < countriesVisited.length; index++) {
            // - exit loop if right
        if (countriesVisited[index] === userGuess) {
            console.log('user guessed correct.', ' User\'s guess: ', userGuess)
            gotItRightQ7 = true;
            break;
        }
    }
    numberOfGuessesQ7--;
}
    // alert user of Q7 result
if (gotItRightQ7){
    alert('You got question 7 right. ' + userGuess + " is a country I\'ve visited. I've also visited " + countriesVisited);
} else{
    alert('Sorry. You\'ve used all you guesses. I\'ve visited: ' + countriesVisited);
}
