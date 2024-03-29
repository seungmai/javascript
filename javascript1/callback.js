'use strict';

console.log('1');
setTimeout(() => console.log('2'),1000);
console.log('3');

function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hollo'));

function printImmediately(print, timeout) {
    setTimeout(print, timeout);
}
printImmediately(()=> console.log('async callback'), 2000);







// Callback Hell example
class UserStorage {
    loginUser(id, passwrod, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && passwrod === 'dream') ||
                (id === 'coder' && passwrod === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
        getRoles(user, onSuccess, onError) {
            setTimeout(() => {
                if(user === 'ellie') {
                    onSuccess({ name: 'ellie', role: 'admin' });
                } else {
                    onError(new Error('no access'));
                }
            }, 1000);
        }
    }
    
    const userStorage = new UserStorage();
    const id = prompt('enter your id');
    const password = prompt('enter your passrod');
    userStorage.loginUser(
      id,
      password,
      user => {
        userStorage.getRoles(
          user,
          userWithRole => {
            alert(
              `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
            );
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );