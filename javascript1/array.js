'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);

console.clear();
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruits) => console.log(fruits));

fruits.push("🍓", "🍑");
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

fruits.unshift("🍓", "🍋");
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, "🍏", "🍉");
console.log(fruits);

const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf("🍎")); 
console.log(fruits.lastIndexOf('🥥'));