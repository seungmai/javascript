'use strict';

// Array🎉(배열)

// 1. Declaration(배열을 선언할수 있는 방법)
const arr1 = new Array(); //첫번째, new를 적어서 선언하는 방법
const arr2 = [1, 2]; // 두번째, []안에 적어서 선언하는 방법

// 2. Index position
const fruits = ['🍎', '🍌'];//두개의 문자열의 데이터가 있고 사과와 바나나가 있다.
console.log(fruits); //fruits 출력
console.log(fruits.length);
console.log(fruits[0]); //사과 값출력, 배열은 숫자 인덱스를 전달하게되면 그 인덱스에 해당하는 value들을 받을 수가 있다.
console.log(fruits[1]);// 바나나 값출력
console.log(fruits[2]); //없는 것을 출력하면 undefined
console.log(fruits[fruits.length - 1]); //배열에 제일 마지막에 있는 아이템을 찾을 때는 우리가 배열레 length에 -1을 해서 마지막 데이터를 접근 할 수 가있다. 배열은 0부터 시작하기 때문에 총길이의 -1을 붙이면 제일 마지막 인덱스를 받아올 수 있다.
console.clear();
// 3. Looping over an array(전체적인 데이터 안에서 돌면서 출력하는 것)
// print all fruits (과일 안에있는 모든 과일들을 출력을 하라.)
// a. for (for을 이용해서)
for (let i = 0; i < fruits.length; i++) { //i++은 계속 증가하는 것
  console.log(fruits[i]);
} //사과와 바나나가 출력된다.

// b. for of (for of를 이용하여 출력)
for (let fruit of fruits) {
  console.log(fruit);
}//사과와 바나나가 출력된다.

// c. forEach (forEach를 사용하여 출력), forEach는 배열안에 들어있는 value들 마다 내가 전달한 함수를 출력한다.
fruits.forEach((fruit) => console.log(fruit));//사과와 바나나가 출력된다.

// 4. Addtion, deletion, copy (더하기, 빼기, 복사)
// push: add an item to the end(아이템을 어떤 value들의 배열에 제일 마지막에다 넣고싶다.)
fruits.push('🍓', '🍑'); //이런식으로 데이터를 추가 할수 있다.
console.log(fruits);

// pop: remove an item from the end(아이템을 어떤 value들의 배열에 제일 마지막에다 빼고싶다.)
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging(아이템을 어떤 value들의 배열에 앞에서부터 넣고싶다.)
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging(아이템을 어떤 value들의 배열에 앞에서부터 빼고싶다.)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push(shift와 unshift는 정말 느리다 pop과 push보다!!!)
// splice: remove an item by index position //position을 지정된 자리에서 바꾸는 것 splice를 이용하면 된다.
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); //시작하는 인덱스 1, 지우고싶은 인덱스 1
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); //딸기와 사과가 지워진 자리에 사과와 수박이 들어간다.
console.log(fruits);

// combine two arrays(두가지의 배열을 묶어서도 만들수 있다.)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //기존에 있던 fruits와 우리가 만든 fruits2를 묶어서 나타낼 수 있다.
console.log(newFruits);

// 5. Searching
// indexOf: find the index(우리가 배열안에 어떤값이 몇번째 인덱스에 있는지 알고 싶을 때 유용하게 사용할 수 있다. indexOf를 사용하면 된다.)
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); //0
console.log(fruits.indexOf('🍉')); //2
console.log(fruits.indexOf('🥥')); // -1(배열언에 해당하는 값이 없을 때는 -1이 출력이 된다.)

// includes(배열에 수박이 있는지 없는지를 true로 또는 false로 return하는 함수이다.)
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); //첫번째 인덱스가 나온다.
console.log(fruits.lastIndexOf('🍎'));//마지막 인덱스가 나온다.
console.log(fruits.lastIndexOf('🥥'));