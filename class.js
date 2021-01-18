'use strict';
// Object-oriendted programming
// class: template(class는 template에 속한다.)
// object: instance of a class(template 이용해서 실제로 데이터를 넣어서 만드는 것이 object이다.) 
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance9(편리함을 제공함.)

// 1. Class declarations
class Person { //사람이라는 클래스를 만듬
  // constructor
  constructor(name, age) { //생성자를 이용
    // fields
    this.name = name; //전달된 name과 age를 할당해주는것
    this.age = age;
  }

  // methods
  speak() { //speak 말하는 method도 존재한다. 
    console.log(`${this.name}: hello!`); //이름을 출력하면서 hello 이렇게 인사하는 것이다.
  }
}

const ellie = new Person('seungmin', 20); //새로운 object를 만들 때는 new를 사용한다.
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters //방어적인 자세로 만들수 있게 도와주는 것
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age Getter호출, = age; setters호출
  }

  get age() { //-1이 말이 안되기 때문에 get이라는 키워드를 이용해 값을 리턴할 수 있다.
    return this._age; //사용자가 get age를 호출하게 되면 우리는 바로 this.age를 리턴해야된다.
  }

  set age(value) { //set이라는 키워드를 이용해 값을 설정할 수 있다. 대신에 set은 값을 설정하기 때문에 value를 받아와야된다.
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value; //새로운 value를 받으면 우리가 this.age를 value로 설정하게 된다.
  }
}

const user1 = new User('Steve', 'Job', -1);  //사람의 나이가 -1이 되는 것이 말안됨!
console.log(user1.age);

// 3. Fields (public, private) //그냥 추가되었다 정도만 알아 두기.
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0; //해시기호는 클래스 내부에서만 값이 보여지고 접근이되고 값이 변경이 가능하지만, 클래스 외부에서는 값을 읽을 수도 변경할 수도 없다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods //이런 것이 있다는 정도만!
// Too soon!
class Article {
  static publisher = 'Dream Coding'; //클래스가 가지고 있는 고유한 값과 이런 데이터의 상관없이 동일하게 반복적으로 사용되어지는 method가 있을 수 있는데 그런 것들을 static이라는 키워드를 이용해서 붙이면 오브젝트에 상관없이 클래스 자체에 연결되어 있다.
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher(); //static함수를 호출할 때도 클래스 이름을 이용해서 프린트퍼블리셔라고 호출하면 드림코딩을 호출할 수 있다.

// 5. Inheritance (상속과 다양성)
// a way for one class to extend another class.
class Shape { //shape이라는 클래스 안에는 width, height, color 총 세가지가 있다.
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() { //draw라는 method 하나가 있고.
    console.log(`drawing ${this.color} color!`);
  }

  getArea() { //getArea라는 method가 있다.
    return this.width * this.height;
  }
}

class Rectangle extends Shape { } //extends 클래스를 이용해서 shape을 바로 연장할수 있다. 이렇게만 정의해도 우리가 shape에서 정의한 필드와 method가 자동적으로 Rectangle에 포함이 된다. extends Shape 연장한다는 키워드만 이용하게 되면 Shape에 있는 모든 것들이 Rectangle에 포함된다.
class Triangle extends Shape {
  draw() {
    super.draw();       //공통적으로 정의한 draw도 그려주면서 조금 더 색다롭게 그려주고싶다면 super(부모에 들어오라는 함수를 호출)을 이용!
    console.log('🔺'); //method를 오버라이딩해서 삼각형이 출력되도록 할 수 있다.
  }
  getArea() {
    return (this.width * this.height) / 2; //우리가 필요한 함수만 재정의해서 사용할 수 있다. 이것을 오버라이딩이라고 한다.

  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); //rectangle안에있는 draw라는 method호출
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf //왼쪽에 있는 object가 오른쪽에 있는 클래스의 인스턴스인지 아닌지 즉 이 오브젝트가 이 클래스를 이용해서 만들어진 아이인지 아닌지 확인하는 것이다.
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //shape을 상속했기 때문에 true
console.log(triangle instanceof Object); // 우리가 자바스크립트에서 만든 모든 오브젝트 클래스들은 자바스크립트에 있는 오브젝트를 상속한 것이다. true
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
