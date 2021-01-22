// 1. String concatenation
console.log('my' + ' cat'); //문자열과 문자열을 합쳐서 새로운 문자열을 만들수 있다.
console.log('1' + 2); //문자열에 숫자를 더하게 되면 숫자가 문자열로 변환되어서 나타난다.
console.log(`string literals: 1 + 2 = ${1 + 2}`); //백틱기호를 활용해서 string literals를 만들 수 있다. $달러 값을 이용하면 변수값을 계산해서 string을 포함해서 문자열을 만들게 된다.
 
// 2. Numeric operators(숫자를 연산하는 것)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder 나누고 나머지 값
console.log(1 ** 1); // exponentiation 2에 3승 값

// 3. Increment(증가) and decrement(감소) operators(카운터라는 변수가 있으면 값을 할당해주는 것이다.)
let counter = 2;
const preIncrement = ++counter;//++기호를 써주면 preIncrement라고 한다.
// counter = counter + 1; (위에 코드랑 동일한 코드)
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++; //반대로 counter변수 다음에 ++가 붙으면 
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preIncrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment(할당) operators(연산할 때 +-, -+ 등으로 사용됨. 앞으로 많이 생략해서 쓰게 된다.)
let x = 3;
let y = 6;
x += y; // x = x + y; (반복되는 x는 생략)
x -= y;
x *= y;
x /= y;

// 5. Comparison(비교) operators (비교하는 조작자)
console.log(10 < 6); // less than(false)
console.log(10 <= 6); // less than or equal(false)
console.log(10 > 6); // greater than(true)
console.log(10 >= 6); // greater than or equal(true)

// 6. Logical(논리적) operators: || (or), && (and), ! (not) =>세 가지의 연사자가 있다.(논리연산을 할 때는, 연산량이 많은 함수를 뒤 쪽에 배치시키는게 효율적이다.)
const value1 = false;
const value2 = 4 < 2; // fales

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('#');
    }
    return true;
}

// || (or) => (하나라도 true가 있으면 true로 계산되는 값! 그리고 중요(or연산자는 처음으로 true가 나오면 거기서 멈춘다. 이유는 이제 true가 나와서 나는 할일이 없다고 생각하기 때문에!))
console.log(`or: ${value1 || value2 || check()}`); //함수를 맨뒤에 호출하는 것이 효율적인 코드이다.

// && (and), finds the first falsy value (모든 값이 true여야 true로 리턴하는 값! 처음 값이 false면 뒤에 true가 나오던 안나오던 상관안함.)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableobject != null) {
    nullableobject.something;
}

// ! (not) => (not 연산자는 값을 반대로 바꿔준다.)
//true를 false로 혹은 false를 true로 반대로 바꿔주는 것이다.
console.log(!value1);
console.log(!value2);
console.log(!check);

// 7. Equality(평등)
const stringFive = '5';
const numberFive = 5;

// == loose(느슨한) equality, with type conversion (두개의 ==(이꼴)을 사용하면 loose equality라고 한다.)
console.log(stringFive == numberFive); //문자열이든 숫자든 똑같다고 판단.
console.log(stringFive != numberFive); //문자열이든 숫자든 똑같지 않다고 판단.

// === strict(엄격한) equality, no type conversion (type이 다르면 다른 애들이라고 판단.)
console.log(stringFive === numberFive); //"야 너네는 다른 타입이잖아!"문자열이든 숫자든 똑같이 않다고 판단.
console.log(stringFive !== numberFive); //문자열이든 숫자든 똑같다고 판단.

// object equality by reference
const ellie1 = { name: 'ellie' }; //'ellie라는 똑같은 데이터 값을 저장하고 있지만 reference에서는 다른 값이 저장되어있다.
const ellie2 = { name: 'ellie' }; //'ellie라는 똑같은 데이터 값을 저장하고 있지만 reference에서는 다른 값이 저장되어있다.
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //ellie1과 ellie2에는 각각 다른 reference가 저장되어 있기 떄문에 false
console.log(ellie1 === ellie2); //ellie1과 ellie2가 똑같은 type이든 아니든 다른 reference이기 때문에 false
console.log(ellie1 === ellie3); //ellie1과 ellie3는 ellie3이 ellie1으로 할당했기 때문에 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // 불리언 타입이 아니기때문에 true
console.log('' === false); // 불리언 다른 타입이기 때문에 false
console.log(null == undefined); // 같은 타입이기 때문에 true
console.log(null === undefined); // 다른 타입이기 때문에 false

// 8. Conditional(조건부) operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary(삼항) operator: ?
// condition ? value : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); //ellie가 true면 퀘션마크 옆에 있는 것을 실행하고 아니면 : 옆에 있는 것을 실행한다.

// 10. Switch statement(스위치 문)
// use for multiple if checks(여러 if 검사에 사용)
// use for enum-like value check(열거 형 값(enum-like value)확인 사용)
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
while (i > 0) { //while같은 경우는 (i > 0)가 false로 나오기 전까지는 무한대로 반복해서 계속해서 도는 것을 말한다.
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition. do + while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // do-while loop는 block을 실행한다음에 조건이 맞는지 안맞는지를 검사한다. 

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
// Q1. iterate from 0 to 10 and print only even number 숫자를  0부터 10까지 짝수인 아이들만 프린트하는 것을 continue만 이용해서 한번만들어보기.(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break), 주어진 숫자의 범위 0부터 10까지 높잉하는 것을 작성하되 숫자 8을 만나면 그만하는 것을 한번 작성하기.
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
