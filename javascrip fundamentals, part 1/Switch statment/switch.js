// Switch statement to fix lectures for every week
// const day = prompt('Input a day to see the course you have that day!');
const day = 'monday'
let result;
switch (day) {
    case 'monday':
        result = 'French';
        break;
    case 'tuesday':
        result = 'Writing and orthography';
        break;
    case 'wednesday':
        result = 'computational Linguistics';
        break;
    case 'thursday':
        result = 'Geography';
        break;
    case 'friday':
        result = 'African Communication System';
        break;
    case 'saturday':
    case 'sunday':
        result = 'Rest, its weekend :)';
        break;
    default:
        result = 'Not a valid day (:';
}
console.log(result);


// You can else use the if else statement

if (day === 'monday') {
    result = 'French';
} else if (day === 'tuesday') {
    result = 'Writing and orthography';
} else if (day === 'wednesday') {
    result = 'computational Linguistics';
} else if (day === 'thursday') {
    result = 'Geography';
} else if (day === 'friday') {
    result = 'African Communication System';
} else if (day === 'saturday' || day === 'sunday') {
    result = 'Rest, its weekend :)';
} else {
    result = 'Not a valid day (:';
}
console.log(result);
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/
// answer

const language = 'chinese';

switch (language) {
    case 'chinese':
    case 'mandarin':
        result = 'MOST number of native speakers!';
        break;
    case 'spanish':
        result = '2nd place in number of native speakers';
        break;
    case 'english':
        result = '3rd place';
        break;
    case 'hindi':
        result = 'Number 4';
        break;
    case 'arabic':
        result = '5th most spoken language';
        break;

    default:
        result = 'Great language too :D';
        break;
}
console.log(result);
