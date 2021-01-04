// 1. String concatenation
console.log('my' + ' cat'); //문자열과 문자열을 합쳐서 새로운 문자열을 만들수 있다.
console.log('1' + 2); //문자열에 숫자를 더하게 되면 숫자가 문자열로 변환되어서 나타난다.
console.log(`string literals: 1 + 2 = ${1 + 2}`); //백틱기호를 활용해서 string literals를 만들 수 있다. $달러 값을 이용하면 변수값을 계산해서 string을 포함해서 문자열을 만들게 된다.

// 2. Numeric operators(숫자를 연산하는 것)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators(카운터라는 변수가 있으면 값을 할당해주는 것이다.)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);
crement = --counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
ecrement = counter--;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators(연산할 때 +-, -+ 등으로 사용됨.)
let x = 3;
let y = 6;
x +- y; // x = x + y;
x -+ y;
x *= y;
x /= y;

// 5. Comparison operators (비교하는 조작자)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not) =>세 가지의 연사자가 있다.
const value1 = false;
const value2 = 4 < 2; // fales

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('#');
    }
    return true;
}

// || (or) => (하나라도 true가 있으면 true로 계산되는 값! 그리고 중요(or연산자는 처음으로 true가 나오면 거기서 멈춘다. 이유는 이제 true가 나와서 나는 할일이 없다고 생각하기 때문에!))
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value (모든 값이 true여야 true로 리턴하는 값! 처음 값이 false면 뒤에 true가 나오던 안나오던 상관안함.)
console.log(`and: ${value1 && value2 && check()}`);

// ! (not) => (not 연산자는 값을 반대로 바꿔준다.)

// often used to compress long if-statement
// nullableObject && nullableObject.something

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (두개의 ==(이꼴)을 사용하면 loose equality라고 한다.)
console.log(stringFive == numberFive); 
console.log(stringFive != numberFive);

// === strict equality, no type conversion (type이 다르면 다른 애들이라고 판단.)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // false
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switcj statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) { // swich 안에 있는 browser의 값
    case 'IE': // swich 안에 있는 browser의 값 IE이면 
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you!'); 
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    case 'Chrome': //Chrome과 Firefox값이 같기때문에 case를 묶어서 출력가능!
    case 'Firefox':
        console.log('love you!');
        break;    
    default:
        console.log('same all!');
        break;    
}

// 11. Loops (반복문)
// While loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // do-while loop는 block을 실핼한다음에 조건이 맞는지 안맞는지를 검사한다. 

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}


// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break(loop를 완전히 끝내는 것!), continue(현재단계는 스킵하고 다음단계로 넘어가는 것!)
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
