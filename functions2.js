//1
function triple(n) {
  return n * 3;
}
console.log(triple(3));

//2
function len(s) {
  return s.length;
}
console.log(len("avi"));

//3
function status(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(status(5));

//4
function isBigger(a, b) {
  if (a > b) {
    return "a is bigger";
  } else if (b > a) {
    return "b is bigger";
  } else {
    return "theyr'e even";
  }
}

console.log(isBigger(4, 5));

//5
function arrLen(arr) {
  return arr.length;
}
console.log(arrLen([1, 2, 3, 4]));

//6
let a = 3;

function test() {
  a = 7;
}

test();
console.log(a); // 7

//7
function test2() {
  let a = 5;
}

test2();
console.log(a);

//8
let x = 10;

function change() {
  let x = 20;
}

console.log(x);

//9
let num = 1;

function first() {
  num++;
}

function second() {
  num = num + 2;
}

first();
second();

console.log(num);

//10

function print() {
  let message = "Hi";
  console.log(message);
}

print();

//11
function min(arr) {
  let result = arr[0];
  for (const num of arr) {
    if (num < result) {
      result = num;
    }
  }
  return result;
}

console.log(min([9, 1, 4, 2, 6, 3]));

//12
function isDivided(a, b) {
  return a % b == 0;
}
console.log(isDivided(6, 4));

//13
const arrJoin = (arr) => arr.join(" ");
console.log(arrJoin(["avi", "rapaport"]));

//14
let x = 5;

function test(x) {
  x = x + 10;
  return x;
}

let result = test(x);
console.log(x); //5
console.log(result); //15

//15
function counting(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
counting(5);

//16
function Noduplication(arr) {
  const newArr = [];
  for (const i of arr) {
    let found = false;
    for (const x of newArr) {
      if (i == x) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(Noduplication([1, 1, 1]));

//17
function add(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const sum1 = add([1, 2]);
const sum2 = add([3, 4]);

console.log(sum1);
console.log(sum2);

//18
function evenSum(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(evenSum([1, 2, 3, 4]));

//19
let x = 1;

function a() {
  let x = 2;

  function b() {
    console.log(x);
  }

  b();
}

a(); // 2

//20
let discount = 0.1;

function getPrice(price, discountPercentage) {
  return price - price * discountPercentage;
}

console.log(getPrice(100, discount));
