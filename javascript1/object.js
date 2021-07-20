'use strict';

const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const seungmin ={name: 'seungmin', age: 20};
print(seungmin);

seungmin.hasJob = true;
console.log(seungmin.hasJob);

delete seungmin.hasJob;
console.log(seungmin.hasJob);

console.log(seungmin.name);
console.log(seungmin['name']);
seungmin['hasJob'] = true;
console.log(seungmin.hasJob);

function printValue(obj , key) {
    console.log(obj[key]);
}
printValue(seungmin, 'name');
printValue(seungmin, 'age');

const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('seungmin', 30);
console.log(person4);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log('name' in seungmin);
console.log('age' in seungmin);
console.log('random' in seungmin);
console.log(seungmin.random);

console.clear();
for (let key in seungmin) {
    console.log(key);
}

const array= [1, 2, 3, 4, 5];
for (let value of array){
    console.log(value);
}

