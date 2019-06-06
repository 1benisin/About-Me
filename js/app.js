
'use strict';

/*
1. we need to do some functions that ask questions
   that means we put the questions loops into function code blocks
call functions

2. fix the letter entering problem for 
   first we check the answer and turn them into uppercase

3. q1 again when guess is not Y/N.

4. array of questions and answers

*/ 

var q1Truth = 'N';
var q2Truth = 'Y';
var q3Truth = 'Y';
var q4Truth = 'Y';
var q5Truth = 'Y';

var userCorrectAnswers = 0;

var trueAnswers = ['N','Y','Y','Y','Y'];
var questions = ['Is my full name Benjamin James Clark?', 
                'Do I have more than 5 siblings?',
                'Do I live with parents?',
                'Have I ever had a parachute malfunction while jumping from a plane?',
                'Will you be my neighbor?'];
var correctResponse = ['Right, my son\'s middle name is James. Mine is Jacob.',
                    'You are correct. I have 7 siblings',
                    'Wellllll... technically you\'re correct. My dad lives with me', 
                    'Oooh. So you do know I\'m a dangerous devil',
                    'Ahhh. Your so nice. I promise not to walk around naked in front of the windows.'];
var inCorrectResponse = ['Wrong, my son\'s middle name is James. Mine is Jacob.',
                        'Nope, I\'m one of 8. My mom was busy',
                        'Wellllll... technically you\'re wrong. My dad lives with me',
                        'Your wrong. I almost died. Wouldn\'t be the first time',
                        'Hey, You\'re wrong. I\'m a nice guy. I promise not to walk around naked in front of the windows.'];

// ___ Ask users name

var userName = prompt('What is you\'re name?');

//simplfied question 1-5
askYNQuestion();
q6();
q7();


function normalizeYesNo (answer) {
    return answer.charAt(0).toUpperCase();
}

function askYNQuestion () {
    for(var i = 0; i < questions.length; i++){
        var answer = 'banana';
        while(answer !== 'Y' && answer !== 'N'){
            answer = prompt(questions[i] +'\n answer yes or no' );
            answer = normalizeYesNo(answer);
            if (answer === 'Y' || answer === 'N'){
                break;
            }
            alert('answer Y or N');
        }
        if(answer === trueAnswers[i]){
            alert(correctResponse[i]);
            userCorrectAnswers++;
        }else {
            alert(inCorrectResponse[i]);
        }
                
            
        
    }

}





// ___ Question 6
function q6 () {
    var guessedCorrect = false;
    var bucketListLength = 100;

    // guessing loop
    while (!guessedCorrect) {
        // guess how many things are on my bucket list
        var userGuessQ6 = null;
        userGuessQ6 = parseInt(prompt('Guess how many things are on my bucket list. \n Enter a number: '));
        // if correct. you're correct
        if (userGuessQ6 === bucketListLength) {
            alert('That\'s right. 100 things still on my bucket list. I\'ve barely lived');
            console.log('guessed Q6 correct');
            guessedCorrect = true;
            // if too low guess again
        } else if (userGuessQ6 < bucketListLength) {
            alert('Too Low');
            console.log('Too Low');
            // if too high guess again
        } else if (userGuessQ6 > bucketListLength) {
            alert('Too High');
            console.log('Too High');
            // check for weird stuff
        } else {
            alert('Weird entry. You have to enter a number');
        }
    }
    userCorrectAnswers++;
}


// ___ Question 7

function q7 () {
    // - Uppercase array of visited countries
    var countriesVisitedPrint = ['United States', 'Spain', 'France', 'United Kingdom', 'England', 'Scotland', 'Ireland', 'Italy', 'India', 'Canada', 'Mexico', 'Australia'];
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
        var userGuessQ7 = prompt('Guess the name of a country I\'ve visited? You only get 5 guesses').toUpperCase();
        console.log(userGuessQ7);
        // - check array for match
        for (var index = 0; index < countriesVisited.length; index++) {
            // - exit loop if right
            if (countriesVisited[index] === userGuessQ7) {
                console.log('user guessed correct.', ' User\'s guess: ', userGuessQ7)
                gotItRightQ7 = true;
                break;
            }
        }
        numberOfGuessesQ7--;
    }
    // alert user of Q7 result
    if (gotItRightQ7) {
        alert('You got question 7 right. ' + userGuessQ7 + " is a country I\'ve visited. I've also visited " + countriesVisitedPrint);
        userCorrectAnswers++;
    } else {
        alert('Sorry. You\'ve used all you guesses. I\'ve visited: ' + countriesVisitedPrint);
    }
}
// ___ Thanks for playing

alert('Thanks for playing my little game, ' + userName + ' You got ' + userCorrectAnswers + ' out of 7 right. Cheers');
