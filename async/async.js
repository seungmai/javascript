// async & await(Promise를 간결하고 간편하고 그리고 동기적으로 실행되는 것처럼 보이게 만들어주는 아이이다.)
//Syntatic Sugar: 프로그래밍 언어 차원에서 제공되는 논리적으로 간결하게 표현하는 것이고 또한 중복되는 로직을 간결하게 표현하기 위해 나타나게 되었다.
// clear style of using promise :) (깔금하게 promise를 사용할 수 있다.)

// 1. async
async function fetchUser() { //async를 쓰게되면 자동적으로 promise로 변환이 된다.
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log); 
  console.log(user);
  
  // 2. await ✨ //await은 async가 붙은 함수안에서만 사용할 수 있다.
  function delay(ms) { //delay라는 함수는 Promise를 리턴하는데 정해진 ms가 지나면 resolve를 호출하면 그런 promise를 리턴하게 된다.
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000); //2초가 지나면 resolve가 호출이 된다.
    //await라는 키워드를 쓰게되면 이 딜레이가 끝날 때까지 기다려 준다.
    return '🍎'; // 사과를 리턴하게 된다.
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨ // 유용한 APIs가 있다.
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);