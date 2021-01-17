// Function
// - fundamental building block in the program
// - subprogram can be used multiple times (여러번 재사용이 가능하다.)
// - performs a task or calculates a value // 작업을 수행하거나 값을 계산한다.

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb 동사형태로 지정해야된다.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (function은 object이다.)
function printHello() { //fuction과 함수 이름
    console.log('Hello');
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@'); // log함수를 이용해서 원하는 정보를 입력할 수 있다.
  log(1234); // 숫자도 입력할 수 있다.
  
  // 2. Parameters
  // premitive parameters: passed by value(value가 전달된다.)
  // object parameters: passed by reference(reference가 전달 된다.)
  function changeName(obj) {  // ellie의 이름이 coder로 바뀐다.
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie);
  
  // 3. Default parameters (added in ES6)
  function showMessage(message, from = 'unknown') { // showMessage 안에 두개의 parameters가 있다.
    console.log(`${message} by ${from}`); //누구로 부터 메시지가 왔는지 확인 할 수 있다.
  }
  showMessage('Hi!');
  
  // 4. Rest parameters (added in ES6)
  function printAll(...args) { //닷 닷 닷이라고 써져있는데 이것은 배열 형태로 전달된다.
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  
    for (const arg of args) { //for of를 이용하여 간단하게 출력도 가능하다.
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg)); //더 간단하게 하고싶으면 fotEach라고 함수형 언어를 이용해서 출력이 가능하다.
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope(jsvascript에서 scope은 밖에서는 안을 볼수 없고 안에서만 밖을 볼 수 있다.)
  let globalMessage = 'global'; // global variable(밖에서는 안을 볼수 없고 안에서만 밖을 볼 수 있다.)
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable(지역변수는 안에서만 접근이 가능하다.)
    console.log(globalMessage);
    function printAnother() {  // 중첩된 함수
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b; //보통 return값이 안들어가있는 곳은 return undefined이다. 여기에서는 return값을 적어서 값을 return할수 있다.
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) { //{}블럭 안에서 로직을 작성하면 가독성이 떨어진다.
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  function upgradeUser(user) {
    if (user.point <= 10) { //조건이 맞지않을 때는 빨리 return을 해서 함수를 종료하고 조건이 맞을 때만 필요한 logic들을 실행하는 것이 좋은 것이다.
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable(함수가 다른 변수와 같이 처리된다.)
  // can be assigned as a value to variable(변수 값으로 할당할 수 있다.)
  // can be passed as an argument to other functions.(인수로 다른 함수에 전달할 수 있다.)
  // can be returned by another function(다른 기능으로 반환할 수 있다.)
  
  // 1. Function expression(위에 것을 가능하게 한것이 Function expression이다.)
  // a function declaration can be called earlier than it is defiend. (hoisted)(함수 선언은 정의되기 전에 호출될 수 있다.)
  // a function expression is created when the execution reaches it.(함수 식은 실행이 도달할 때 생성된다.)
  const print = function () {
    // anonymous function(함수에 이름이 없는 것을 anonymous라 부른다.)
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression(전달하는 함수를 Callback function이라고 한다.)
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes(); // 정답인 경우
    } else {
      printNo(); // 정답이 아닌경우
    }
  }
  // anonymous function (함수에 이름이 없는 것)
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function(함수에 이름이 있는 것)
  // better debugging in debugger's stack traces
  // recursions(함수안에서 함수자기 스스로를 부르는 것)
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function (함수를 간결하게 만들어 주는 것, 이름이없는 function ) 
  // always anonymous
  const simplePrint = function () {
  console.log('simplePrint!');
  };
  
  //const simplePrint = () => console.log('simplePrint!');
  //const add = (a, b) => a + b;
  //const simpleMultiply = (a, b) => {
    // do something more
  //  return a * b;
  //};
  
  // IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE'); //함수를 바로바로 실행시키고 싶을때 사용한다. 함수 밖에 괄호를 해서 마지막에 괄호를 사용해서 함수를 호출할 수 있다.
  })();
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unkonwn command');
    }
  }
  console.log(calculate('add', 2, 3));