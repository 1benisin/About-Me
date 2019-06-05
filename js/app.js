
'use strict';   


var q1Truth = 'N';
var q2Truth = 'Y';
var q3Truth = 'Y';
var q4Truth = 'Y';
var q5Truth = 'Y';


var q1Answer = prompt('(Y/N) Is my full name Benjamin James Clark?').toUpperCase();
console.log(q1Answer);
if (q1Answer === 'N') {
    alert('Right, my son\'s middle name is James. Mine is Jacob.')
} else if (q1Answer === 'Y') {
    alert('Wrong, my son\'s middle name is James. Mine is Jacob.')
} else {
    alert('Type a \'Y\' for Yes and a \'N\' for No')
}

var q2Answer = prompt('(Y/N) Do I have more than 5 siblings?').toUpperCase();
console.log(q2Answer);
if (q2Answer === 'Y') {
    alert('You are correct. I have 7 siblings')
} else if (q2Answer === 'N'){
    alert('Nope, I\'m one of 8. My mom was busy')
} else {
    alert('Type a \'Y\' for Yes and a \'N\' for No')
}

var q3Answer = prompt('(Y/N) Do I live with parents?').toUpperCase();
console.log(q3Answer);
if (q3Answer === q3Truth) {
    alert('Wellllll... technically you\'re correct. My dad lives with me')
} else {
    alert('Wellllll... technically you\'re wrong. My dad lives with me')
}

var q4Answer = prompt('(Y/N) Have I ever had a parachute malfunction while jumping from a plane?').toUpperCase();
console.log(q4Answer);
if (q4Answer === q4Truth) {
    alert('Oooh. So you do know I\'m a dangerous devil')
} else {
    alert('Your wrong. I almost died. Wouldn\'t be the first time')
}

var q5Answer = prompt('(Y/N) Will you be my neighbor?').toUpperCase();
console.log(q5Answer);
if (q5Answer === q5Truth) {
    alert('Ahhh. Your so nice')
} else {
    alert('Hey, I\'m a nice guy. I promise not to walk around naked in front of the windows.')
}


