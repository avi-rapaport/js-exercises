function createLogger() {
  const hello = "hello";

  function inner() {
    console.log(hello);
  }
  return inner;
}

const logger = createLogger();
logger();

//2
function createGreeting(name) {
  function inner() {
    console.log(`Hello ${name}`);
  }
  return inner;
}

const greeting = createGreeting("avi");
greeting();

//3
function createCounter() {
  let counter = 0;

  function inner() {
    counter++;
    return counter;
  }
  return inner;
}
const counter = createCounter();
console.log(counter());
console.log(counter());

//4
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

const fn = outer();
fn(); // 10

//5
function createMultiplier(x) {
  return (y) => x * y;
}

const double = createMultiplier(2);
console.log(double(5));

//6
function createAdder(n1) {
  return (n2) => n1 + n2;
}

const add5 = createAdder(5);
console.log(add5(3));

//7
function createSecret() {
  let secret = "secret";
  return {
    getSecret: () => secret,
    setSecret: (value) => (secret = value),
  };
}
const secret = createSecret();
secret.setSecret("new secret");
console.log(secret.getSecret());

//8
function once(fn) {
  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      return fn();
    }
  };
  return false;
}

function hi() {
  console.log("Hi");
}
const runOnce = once(hi);
runOnce();
runOnce();

//12
function createStack(number) {
  const stack = [];

  return {
    push: (value) => stack.push(value),
    pop: () => stack.pop(),
    peek: () => stack.at(-1),
  };
}

const stack1 = createStack();
stack1.push("avi");
console.log(stack1.peek());

//13
function createIdGenerator() {
  let id = 1;
  return () => id++;
}

const gen = createIdGenerator();
console.log(gen());
console.log(gen());

//15
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => (balance += amount),
    withdraw: (amount) => (balance -= amount),
    getBalance: () => balance,
  };
}

const BankAccount = createBankAccount(0);
BankAccount.deposit(100);
console.log(BankAccount.getBalance());
BankAccount.withdraw(60);
console.log(BankAccount.getBalance());
