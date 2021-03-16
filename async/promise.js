'use strict';

// Promise is a JavaScript object for asynchronous operation. (promise는 자바스크립트 안에 내장되어져 있는 오브젝트이다. 그리고 비동기적인 것을 수행할 때 콜백 함수 대신에 유용하게 쓰일수 있는 오브젝트이다.)
// State: pending(오퍼레이션이 수행중인 상태) -> fulfilled or rejected(오퍼레이션을 성공적으로 끝낸 상태, 아니면 파일을 찾을 수가 없거나 네트워크에 문제가 생긴다면 rejected가 된다.)
// Producer(제작자) vs Consumer(소비자),(우리가 원하는 데이터를 제공하는 사람과 제공된 데이터를 필요를 하는 사람)
// Promise: 비동기를 간편하게 처리할 수 있는 오브젝트
// 1. Producer(생산자)
// when new Promise is created, the executor runs automatically.(새로운 promise가 만들어질 때는 우리가 전달한 executor라는 콜백 함수가 바로 실행이된다.)
const promise = new Promise((resolve, reject) => { //Promise라는 object를 만듬. resolve: 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수, reject: 기능을 수행하다가 중간에 문제가 생기면 호출하게될 콜백함수
  // doing some heavy work (network, read files), 보통 promise안에서 어려운 작업들을 한다. 왜냐하면 우리가 네트워크에서 데이터를 받아오거나 파일에서 무언가 큰 데이터를 읽어오는 과정은 시간이 꽤 걸린다.그런 것을 동기적으로 처리하게 되면 우리가 파일을 읽어오고 네트워크에서 데이터를 받아오는 동안 그 다음라인에 코드가 실행되지 않기 때문에 시간이 조금 걸리는 일들은 promise를 만들어서 비동기적으로 처리하는 것이 좋다. 그래서 네크워크 통신하던지 파일을 읽어서 온다던
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); //"우리가 잘 해냈어"리거 한다면 resolve라는 함수를 호출하면 된다.
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //promise라는 프로듀서를 만들어 놨으니 이것을 이용해서 한번 만들어본다.
  .then(value => { //promise값이 잘 수행이 된다면 then, then이라는 것은 promise 정상적으로 잘 수행이 되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 이 값이 여기 value의 파라미터 값에 들어오는 것을 확인 할 수 있다.
    console.log(value);
  })
  .catch(error => { // catch라는 함수를 이용해서 에러가 발생했을 때 어떻게 처리할 것인지 콜백함수를 등록해주면 된다.
    console.log(error);
  })
  .finally(() => { // finally는 성공하든 실패하는 것이랑 상관없이 무조건 마지막에 호출되어 지는 것이다. 즉 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 finally를 사용하면 된다.
    console.log('finally');
  });

// 3. Promise chaining(연결하기)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2) //then 값은 바로 전달 할 수 있다.
  .then(num => num * 3) //then 값은 바로 전달 할 수 있다.
  .then(num => {
    return new Promise((resolve, reject) => { //이제는 새로운 Promise를 리턴할 것이다.
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling //catch로 error를 헨들링 할 수 있다. error가 발생해도 catch를 이용하면 전체적인 Promise체인에 문제가 발생하지 않도록 빵꾸처리를 할 수 있다.
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); //new Error를 이용한다(실패되는 경우).
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
  
