"use strict";

// JSON
// JavaScript Object Notation
// HTTP(HyperText Transfer Protocol), 하이퍼텍스 전송 프로토콜, 하이퍼텍스트는 웹사이트에서 이용되어지는 Rink들만 얘기하는 것이 아니라 모든 리소스(문서, 이미지 파일 등)를 포함한다. 브라우저 위에서 동작하고 있는 웹사이트나 웹 APP같은 Client들이 어떻게 Server와 통신할 수 있는지를 정의 한것을 HTTP라 한다. HTTP를 이용해서 Server에서 Date를 요청해서 받아올 수 있는 방법으로 AJAX라는 것이 있다.

//AJAX(Asynchronous Javascript And XML), 비동기 Javascript, XML이다. 웹페이지에서 동적으로 Server에게 Date를 주고 받을 수 있는 기술을 의미한다. 대표적인 브라우저 API로는 XMLHttpRequest, fetch가 존재한다. AJAX로 Data를 주고 받을 때의 포맷으로 JSON을 많이 사용한다.

//JSON(JavaScript Object Notation), Javascript 객채 표기법이다. 가장 간단한 데이터 교환방식이다. 가벼운 텍스트 기반 구조이다. 읽기가 쉽다. key-value의 쌍으로 이루어져 있다. 네트워크 연결 간 데이터 직렬화 및 전송에 사용한다. 독립적인 프로그래밍 언어 및 플랫폼(= 프로그래밍 언어나 플랫폼에 상관없이 쓸수가 있다.). 거의 모든 언어가 JSON -> Object(해당 언어의 문법에 맞춰서..), Object -> JSON으로 변환하는 것을 지원한다.

// 1. Object to JSON (오브젝트를 제이슨으로 변환하는 방법)
// stringfy(obj)(우리가 stringify을 어떻게 사용할 수 있는지)
let json = JSON.stringify(true); //stringify을 이용하면 json으로 변환할 수 있다.
console.log(json);

// 배열을 제이슨으로 변환
json = JSON.stringify(["apple", "banana"]); //싱글쿼트가 들어가는 것이라니라 제이슨은 더블 쿼트가 들어간다(제이슨의 규격사항).
console.log(json);

// 오브젝트를 제이슨으로 변환
const rabbit = {
  //토끼라는 오브젝트 만듬.
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(), //데이트라는 오브젝트를 정의함
  jump: function () {
    //점프라는 함수, 제이슨에는 포함되지않는다.
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
//함수 형태로 전달해도 되고 배열형태로 전달해도 상관없다.
console.log(json); //

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object (제이슨을 오브젝트로 변환하는 방법)
// )parse(json(우리가 만들어진 제이슨을 어떻게 다시 오브젝트로 만들수 있는지)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
