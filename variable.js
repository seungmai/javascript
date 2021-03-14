// play 놀이 적응해 가는 중!!!
// 월요일부터 복습!!!
// 1. Use strict
// added in Es 5
// use this for Valina JavaScript

// async vs defer
// async: 브라우저에 스크립트 파일이 비동기적으로 실행될 수 있음을 나타내기 위해 사용된다.
// defer: HTML 구문 분석이 완전히 완료되면 스크립트 파일을 실행하도록 브라우저에 지시한다.

'use strict'; // => JavaScript 사용할 때는 맨처음에 선언을 해두고 하는 게 좋다. 시용하는 이유는 자바스크립트 엔진이 조금 더 효율적으로 더 빠르게 자바스크립트를 분석할 수 있기 때문이다.

// 2. Variable => (변수:변경될 수 있는 값이라고 한다.) , rw(read/write)Variable은 메모리에 읽고 쓰는 것이 가능하다.  
// let (added in ES6) =>(let은 ES6에 추가된 언어이다. 또한 JavaScript에서 변수를 선언할 수 있는 것은 let이다.).
let globalName = "global name"; // =>(Global scope라고 하는데 어느 곳에서나 내용을 볼 수 있다.).

let name = 'seungmin' // => (name이라는 변수에 "승민"값을 할당한 것.)
console.log(name);
name = 'hello'; // => (name이라는 변수에 "hello"값을 할당한 것.)
console.log(name);

{ // => ("{}" Block scope라고 하는데 밖에서 더이상 블럭 안에있는 내용은 보지 못한다.)
let name = 'seungmin' // => (name이라는 변수에 "승민"값을 할당한 것.)
console.log(name);
name = 'hello'; // =>(name이라는 변수에 "hello"값을 할당한 것.)
console.log(name);
}

console.log(name);
console.log(globalName);

// var (dont ever use this!) =>(절대 쓰지마!!! 왜? 선언도하기 전에 출력할 수 있으니까!)
// var hoisting (move dexlaration from bottom to top) => (hoisting은 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말한다.)
// has no block scope =>(block scope이 없음.)
{
    age = 4;
    var age;
}
console.log(age);

console.log(age);
age = 4;
console.log(age);
var ago;

// 3. Constant => (Constant는 한번 할당하면 값이 절대 바뀌지 않는 값 const=lmmutable, 반대되는 값은 let=Mutable) ,read 읽기만 가능하다. 쓰는 것은 x
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types(데이터 자체를 절대 바꾸지 못하는 것!): premitive types, frozen objects (i.e. object. freeze())
// Mutable data type(데이터 자체를 바꿀 수 있는 것!): all objects by default are mutable in JS
// favor immutable data type always for a few reasons: =>(왠만해서는 값이 변경되는 않는 값을 사용하라는 뜻임.)
// - security =>(보안이 좋음. 다른해커들이 접근 불가)
// - thread safety => (어플리케이션을 효율적으로 도와줌.)
// - reduce human mistakes => (인간의 실수를 잡아줄 수도 있다.)

//중간 정리 => JavaScript에 변수를 선언할 때 Mutable과 let, immutable과 const가 있다.

// 4. Variable types 
// 메모리의 값이 저장되는 방법 primitive type(값 자체가 메모리에 저장됨.) 인지 object type(너무커서 메모리에 한번에 다 올라갈 수가 없다.)인지에 따라서 메모리의 값이 다른 방식으로 저장된다.
// primitive, single item(primitive type은 더 이상 작은 값으로 나눠질 수 없는 한 가지의 아이템을 말한다.): number, string, boolean, null, undefiedn, symbol 등이 있음.
// object(single item들을 여러개 묶어서 한 단위로 묶어서 한 박스로 관리할 수 있게 해주는 값), box container
//function, first-class function(function, first-class도 다른 데이터에 할당이 가능하다. 그렇기 때문에 인자로도 전달이 된다. 리턴도 가능.)

const count = 17; // integer(정수)
const size = 17.1; // decimal number(소수점에 숫자)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speiclal numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //숫자를 0으로 나누면 무한대의 숫자값이 생기는 것을 볼수가 있는데 이것을 Infinity라고 한다.
const negativeInfinity = -1 / 0; // -(마이너스)네거티브 벨류를 0으로 나누면 -가된다.
const nAn = 'not a number' / 2; //(숫자가 아닌 스트링을 숫자로 나누게되면 nan값이 출력이 된다.)
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) => (숫자에 n만 붙여도 bigInt로 간주된다.)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string => (한가지 글자든 여러개의 글자든 할당이 가능하다. 스트링으로 나옴)
const char = 'c';
const brendan = 'brendan';
const greating = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = `h1 ${brendan}!`; // template literals (string) 백틱기호 안에 h1과 달러값안에 brendan이 합쳐져서 나올수 있다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 굳이 +를 해서 할 필요없이 백틱기호를 사용해서 하면 훨씬 간편하다.

// boolean => (참과 거짓)
// false: 0, null, undefined, NaN, '' 
// true: any other value 등이 있다.
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null => (텅텅 비어있어, 너는 아무것도 아닌 값이라는 것을 지정해주는 것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined => (선언은 되었지만 아무것도 값이 지정되어 있지 않음. 그래서 텅텅 비었는지 값이 들어가있는지 그런것이 아직 정해지지 않은 상태.)
let x; //아무것도 값이 할당되어있지 않은 경우에도 undefined이다.
let x = 'undefined'; //값이 할당되게 undefined을 적어줘도 된다.
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id'); //동일한 스트링을 작성했어도 다른 Symbol로 만들어지기 때문에 주어지는 스트링에 상과없이 고유한 식별자를 만들 때 사용되어 진다.
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // => fales (동일한 Symbol을 만들어도 다른 Symbol로 만들어 진다.)

const gSymbol1 = Symbol.for('id'); //동일한 심볼을 만들고 싶다면 Symbol을 g, for을 사용하면된다.
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // => true (동일한 Symbol을 만듬)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //Symbol을 바로 출력하게 되면 에러가 발생하게 되는데 항상 description을 이용해서 스프레이어로 변환해서 출력을 해야된다.

//object(물건 물체를 대표하는 박스형태), real-life object, data structure
const seungmin = {name: 'seungmin', age: 20}; //const는 변수를 바꿀 수없지만 그안에 있는 name or age는 값이 변경이 가능하다.
seungmin.age = 21;

// 5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0));//h 프로그래밍 언어에서 인덱싱은 배열을 쓸 때는 항상 0부터 시작된다.
console.log(`value: ${text}, type: ${typeof text}`);
//스트링으로 표긴된다.
text = 1; //text에 다시 숫자 1을 할당하게되면 number로 표기된다.
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // => (오류뜸)
//JS는 ㄴ런타임에서 타입이 정해지는데, 이 때 error가 참 많이 발생, 그래서 나온게 TypeScript!