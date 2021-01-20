'use strict';

// JavaScript is synchronous.(자바스크립트는 동기적인 아이이다.)
// Execute the code block by orger after hoisting.(호이스팅이 된 이후부터 코드가, 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말이다.)
// hoisting: var, function declaration(보기와 같은 var, function declaration 함수 선언들이 자동적으로 제일 위로 올라가는 것이 호이스팅이다. 그래서 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다.)
// 동기: 앞의 일이 끝나야 다음일을 처리할 수 있다.
// 비동기: 각자의 일을 처리하고 서로에게 영향을 주지 않는다.
// 비동기프로그래밍을 하는 이유: 가장 큰이유는 속도이다.
// synchronous: 정해진 순서에 맞게 코드가 실행되는 것!
// Asynchronous: 비동기적으로 언제 코드가 실행될 지 예측할 수 없는 것을 말한다.
// 콜백함수: "야 우리가 전달해준 함수를 나중에 니가 불러줘"라는 개념이다.
console.log('1'); //console.log '1'출력
setTimeout(() => console.log('2'), 1000); //setTimeout 이라는 웹 api가 있는데 이것은 브라우저에서 제공하는 api로 우리가 지정한 시간이 지나면 우리가 전달한 콜백함수를 호출하는 것이다. 그리고 이런 브라우저 api는 무조건 브러운저 안에 먼저 요청을 보내게 된다. 또한 응답을 기다리지않고 바로 console.log로 넘어가게 된다. => console.log '2'출력
console.log('3'); //console.log '3'출력

// Synchronous callback(즉각적으로 동기적으로 실행하는 Synchronous callback이다.)
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback(나중에 예측할수 없고 언제 실행될지 모르는 Asynchronous callback가 있다.)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage { // UserStorage class를 만듬.
  loginUser(id, password, onSuccess, onError) { // 아이디 , 비밀번호, 로그인성공, 로그인실패)
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) { //정보를 다시 받아오는 api
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

 //클래스를 이용해서 코딩하기 
 //1. 사용자에게 아이디와 패스워드를 입력을 받아오고, 입력받아온 아이디와 패스워드를 이용해서 로그인을 해보고 로그인이 성공적으로 된다면 우리가 로그인한 사용자의 아이디를 다시 받아오게되는데 받아온 아이디를 이용해서 역할을 한번 다시 요청해서 받아올 것이다. 역할을 요청해서 역할이 성공적으로 받아와 진다면 우리에게는 사용자의 오브젝트가 있는데 이름과 역할이 들어있는 것을 출력해보는 것을 해보아라.
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);