'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; (오브젝트는 key와 value의 집합체이다. 우리가 접근할 수 있는 properties와 그 properties가 가지고 있는 값 두가지로 나누어 진다.)
//1. Literals and properties
const obj1 = {}; // ' {};이것을 object literal' syntax부른다. //오브젝트를 만드는 방법(1), {} << 퀄리 브라켓을 이용하여 오브젝트를 만들 수가 있다.
const obj2 = new Object(); // 'new Object();를 object constructor라고 부른다.' syntax
//오브젝트를 만드는 방법(2),클래스를 이용해서 new라는 키워드 중에서 클래스를 템플릿을 이용하여 오브젝트를 만들 수가 있다.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; //자바스크립트에서는 class가 없어도 괄호를 이용해서 오브젝트를 생성할 수 있다. 여기서의 키는 name과 age이고 value는 ellie와 4이다.
print(ellie); //간편하게 데이터를 관리할 수가 있다.

// with JavaScript magic (dynamically typed language(자바스크립트는 동적으로 타입이 runtime일 때 결정되는 언어이다.))
// can add properties later(뒤늦게 하나의 properties를 추가 할 수 있다. 단 유지보수가 힘들기 때문에 많이 쓰지는 말고 가능하다 정도만 알아두기!)
ellie.hasJob = true; //properties추가
console.log(ellie.hasJob); //true출력

// can delete properties later(하나의 properties를 삭제도 할수 있다.)
delete ellie.hasJob; //properties삭제
console.log(ellie.hasJob);//undefined 출력

// 2. Computed properties(계산된 properties라고 한다.)
// key should be always string // 주의할 점 properties는 string type으로 해야된다. 
console.log(ellie.name); // 우리가 오브젝트 안에있는 데이터에 접근할 때는 닷(.)을 이용해서 데이터를 접근했다. 그리고 코딩하는 그 순간 우리가 정말 그 키에 해당하는 값을 받아오고 싶을 때 (.)을 써서 코딩한다. 보통은 .을 사용하는 게 맞음.
console.log(ellie['name']); //다른 방법은 []괄호를 이용해서 name이라는 string 즉, 오브젝트 안에있는 변수의 이름을 string형태로 접근이 가능하다. 그리고 [] 이것을 사용할 때는 우리가 정확하게 어떤 키가 필요한지 모를 때, 즉 런타임에서 결정될 때 []쓰게된다. 우리가 실시간으로 원하는 키의 값을 받아오고 싶다면 []을 쓴다. 
ellie['hasJob'] = true; //ellie라는 object에 true라고 할당하게되면 'true'로 나온다.
console.log(ellie.hasJob); //true값 출력

function printValue(obj, key) { //오브젝트와 키를 받음
  console.log(obj[key]);        //키 출력 나중에 동적으로 키에 관련된 value를 받아 와야 될 때 유용하게 쓸수있다.
}
printValue(ellie, 'name'); //키는 항상 string type으로 전달해야됨
printValue(ellie, 'age');  //키는 항상 string type으로 전달해야됨

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };//person1 오브젝트 생성
const person2 = { name: 'steve', age: 3 };//person2 오브젝트 생성
const person3 = { name: 'dave', age: 4 };//person3 오브젝트 생성
const person4 = new Person('elile', 30);//이렇게 하면 자바스크립트 엔진이 알아서 오브젝트를 생성해준다.
console.log(person4);

// 4. Constructor Function(생성자 함수)
function Person(name, age) {
  // this = {}; (여기에서 생략된 것은 우리가 새로운 오브젝트를 만들어서 this에다가 새로운 properties를 넣고 결국은 이 this를 리턴하는 함수이다.)
  this.name = name;
  this.age = age;
  // return this; (this 리턴)
}

// 5. in operator: property existence check (key in obj//해당하는 오브젝트 안에 키가 있는지 없는지 확인하는 것이다. in이라는 키워드를 이용해서 해당하는 키가 오브젝트 안에 있는지 확인할 수가 있다.
console.log('name' in ellie); //name이라는 키카 ellie오브젝트안에 있는 지 확인해보면 true라고 나온다.
console.log('age' in ellie); // 나이로 하면 오브젝트 안에 들어있으니까 true로 나온다.
console.log('random' in ellie); //우리가 정의하지 않는 어떤 다른 키를 사용하게되면 false가 나온다. 
console.log(ellie.random);//우리가 정의하지 않는 어떤 다른 값을 사용하게되면 undefined이 나온다. 

// 6. for..in vs for..of //나중에 프로젝트를 하게되면 굉장히 유용하게 사용할 수가 있다.
// for (key in obj)
console.clear(); //clear을 이용하면 이전에 있던 것들이 모두 지워진다. 
for (let key in ellie) {//그래서 모든 키를 받아와서 일들을 처리하고 싶을 때 이렇게 for과 in을 사용하는 것이 좋다.
  console.log(key); //console에 키를 출력하게되면 ellie안에있는 모든 키들이 출력되어 진다.
}

// for (value of iterable) //for of는 오브젝트를 쓰는 것이 아니라 배열과 같은 배열리스트 iterable한 아이들을 사용한다.
const array = [1, 2, 4, 5]; //순차적으로 데이터가 담겨져있다.
for (let value of array) { //이 데이터의 모든 값들을 찍으로려면 for of를 사용하면 된다. array에 있는 모든 값들이 value에 할당되면서 block안에서 순차적으로 출력하거나 값을 이렇게 개선할 수가 있다.
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' }; //user라는 곳에 오브젝트를 만듬.
const user2 = user; //user2가 user을 가르킨다.
console.log(user);

// old way
const user3 = {}; //텅텅 비어있는 오브젝트를 만듬.
for (let key in user) {
  user3[key] = user[key]; //user3에 key에는 user에있던 value를 할당해주는 것이다.
}
console.clear(); //이전에 사용되었던 log는 지움.
console.log(user3); //user3값 출력

const user4 = Object.assign({}, user);//target을 만들면 텅텅 비어져 있는 것을 정리한 다음에 //오브젝트는 자바스트립트에 있는 기본적으로 탑재되어 있는 오브젝트 중에 하나이다. 그리고 자바스크립트에 있는 모든 오브젝트는 이 오브젝트를 상속한다. assign은 복사하고자 하는 target과 복사를 하려고하는 그 소스를 같이 전달해줘야되고 T값은 target과 복사하는 것이 통합된 아이가 리턴되는 것을 확인할 수가있다.
console.log(user4); //console.log로 user4출력

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);//위에 두개에 공통된 것은 color가 있는데 두개를 합치려면 mixed를 사용하면된다.
console.log(mixed.color); //정답 blue, 뒤에 나오는 아이일수록 동일한 properties가 있다면 값을 계속 덮어씌워지기 때문이다.
console.log(mixed.size); //정답 big