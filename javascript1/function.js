'use strict'

function a(){
    console.log('s');
}
console.log('hello');

function log(message) {
    console.log(message);
}
console.log('g');
console.log(123);
console.log(`value: ${log}, type: ${typeof log}`);

function changeName(obj) {
    obj.name = 'coder';
}
const seungmin = {name : 'seungmin'};
changeName(seungmin);
console.log(seungmin);

function showMessage(message, from = 'unknown') {
    console.log(`${message}, by ${from}`);
}
showMessage('hi');


let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

function sum(a, b) {
    return a + b;
}
const result = sum(1, 4);
console.log(`sum: ${sum(1, 4)}`);

const print = function() {
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 5));

function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() {
    console.log('yes!');
}

const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

(function hello(){
    console.log('hesda');
})();

function calculate(command, a ,b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a = b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remaider':
            return a % b;
        default: 
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));