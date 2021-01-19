"use strict";

// JSON
// JavaScript Object Notation

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
// parse(json)(우리가 만들어진 제이슨을 어떻게 다시 오브젝트로 만들수 있는지)
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
