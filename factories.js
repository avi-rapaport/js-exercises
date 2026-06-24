//1
function factory(name) {
  return { name };
}

const name = factory("avi");
console.log(name);

//2
function greet(obj) {
  return `Hi, i'm ${obj.name}`;
}

console.log(greet(name));

//3
const name1 = factory("yanki");
name1.name = "a";
const name2 = factory("eli");
console.log(name1);
console.log(name2);

//4
function factory2(obj, age) {
  return { ...obj, age };
}

const addedAge = factory2(name, 23);
console.log(addedAge);

//5
function ageCheck(obj) {
  return obj.age > 18;
}

console.log(ageCheck(addedAge));

//6
function createCounter(initialValue = 0) {
  let count = initialValue;
  return function (action = "increment") {
    if (action === "increment") {
      count++;
      return count;
    } else if (action === "decrement") {
      count--;
      return count;
    } else if (action === "get") {
      return count;
    }
  };
}

//7
const counterFromZero = createCounter();

console.log(counterFromZero());
console.log(counterFromZero());
console.log(counterFromZero());

//8
const counterFromTen = createCounter(10);

console.log(counterFromTen());
console.log(counterFromTen());
console.log(counterFromTen());
//9
console.log(counterFromTen("decrement"));
console.log(counterFromTen("decrement"));
console.log(counterFromTen("decrement"));

//10
console.log(counterFromTen("get"));

//11
function createCounter2() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter1 = createCounter2(0);
console.log(counter1.increment());
console.log(counter1.increment());

//12
// console.log(counter1.count);

//13
console.log(counter1.reset());

//14
const counterA = createCounter2();
const counterB = createCounter2();

console.log(counterA.increment());

console.log(counterB.increment());

console.log(counterA.increment());

//15
function product(name, price, stock = 0) {
  if (price < 1) {
    throw new Error("invalid price!");
  }
  return {
    name,
    price,
    stock,

    isAvailable() {
      return this.stock > 0;
    },
  };
}

const leptop = product("leptop", 5000, 10);
console.log(leptop);

console.log(leptop.isAvailable());

//19
function createMultiplier(x) {
  return () => x * 2;
}

const double = createMultiplier(10);
console.log(double());

//20
function createPrefixer(prefix) {
  return function (name) {
    return prefix + " " + name;
  };
}
const prefix = createPrefixer("hello");
console.log(prefix("avi"));

//21
function createMessageSystem() {
  const messages = [];

  return {
    addMessage(message) {
      messages.push(message);
      return "Message added";
    },

    getMessages() {
      return [...messages];
    },

    deleteMessage(index) {
      if (index >= 0 && index < messages.length) {
        const deleted = messages.splice(index, 1);
        return `Deleted: "${deleted[0]}"`;
      }
      return "Invalid index";
    },
  };
}

//24
function createUser(name) {
  let loginCount = 0;

  return {
    name: name,
    login() {
      loginCount++;
      return `${this.name} logged in. Total logins: ${loginCount}`;
    },
    getLoginCount() {
      return loginCount;
    },
  };
}

//25
function createRoleManager() {
  const roles = new Set();

  return {
    add(role) {
      roles.add(role);
    },
    remove(role) {
      roles.delete(role);
    },
    check(role) {
      return roles.has(role);
    },
  };
}
