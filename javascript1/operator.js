'use strict'

console.log('cat' + ' dog');
console.log('1' + 2 );
console.log(`a: 1 + 5 = ${1 + 5}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 1);
console.log(2 ** 3);


 const name = 'seungmin';
 if(name === 'seungmin') {
     console.log('Welcome, Seungmin!');
 } else if(name === 'coder') {
     console.log('You are amazing coder');
 } else{
     console.log('unkwnon');
 }

 console.log(name === 'seungmin' ? 'a' : 'b');

 const browser = 'Firefox';
 switch(browser) {
     case 'IE':
         console.log('abc');
         break;
     case 'Chrom':
     case 'Firefox':
         console.log('def');
         break;
     default:
         console.log('same all');
         break;
 }

 for (let i = 0; i < 11; i++ ){
     if(i % 2 === 0){
         continue;
     }
     console.log(`q1. ${i}`);
 }

 for (let i = 0; i < 11; i++) {
     if(i < 8) {
         break;
     }
     console.log(`q1. ${i}`);
 }