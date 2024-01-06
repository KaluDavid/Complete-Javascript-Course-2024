// lets play a game with what we've learnt so far
/*
const quiz = prompt('Is javascript a programming language');
let js;
if (quiz === 'yes') {
    js = 'you are correct';

} else if (quiz === 'maybe') {
    js = "looks like you ain't sure"
} else {
    js = 'you are not correct';
}


if (quiz !== "I don't know") {
    js = 'Hint: why not try something else';
}
console.log(js);
*/

/*

LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation

*
// task 1
let numNeighbours = prompt('How many neighboring countries does your country have?');
numNeighbours = Number(`${numNeighbours}`);
console.log(typeof numNeighbours)
let border;

if (numNeighbours === 1) {
    border = 'Only 1 border!'
} else if (numNeighbours > 1) {
    border = 'More than 1 border'
} else {
    border = 'No borders'
}

console.log(border);

*/
