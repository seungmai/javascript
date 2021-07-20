'use strict';
let globalName = 'globalName';
{
let name = 'seungmin';
console.log(name);

name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

{
var name = 'se';
console.log(name);
}
console.log(name);

age = 4;
var age;

console.log(age);

const a = 17;
const b = 18.1;
console.log(`value: ${a}, type: ${typeof a}`);
console.log(`value: ${b}, type: ${typeof b}`);

console.log(b);

const as = 1 / 0;
console.log(as);
const asa = -1 / 0;
console.log(asa);
const asdasd = "nas" / 1;
console.log(asdasd);

const char = 'c';
console.log(char);
const brendan = 'brendan';
console.log(brendan);
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

const zxc = false;
console.log(`value: ${zxc}, type: ${typeof zxc}`);
const zxcv = 1 < 1;
console.log(`value: ${zxcv}, type: ${typeof zxcv}`);

let ha = null;
console.log(`value: ${ha}, type: ${typeof ha}`);

let ah;
console.log(`value: ${ah}, type: ${typeof ah}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

const seungmin = {name: 'seungmin', age: 25};
console.log(seungmin);
seungmin.age = 21;
console.log(seungmin);

const haa = {name: 'hahaha', age: 55};
console.log(haa);
haa.name = 'sad';
console.log(haa);

