//1
function greeting(name) {
  return `Hello ${name}`;
}

console.log(greeting("Moshe"));

//2
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//3
function even(num) {
  return num % 2 == 0;
}
console.log(even(5));

//4
function first(arr) {
  return arr[0];
}

console.log(first([1, 2, 3]));

//5
function upper(s) {
  return s.toUpperCase();
}
console.log(upper("avi"));

//6
let x = 5;

function test() {
  let x = 10;
  console.log(x);
}

test(); // 10
console.log(x); // 5

//7
let y;
function test2() {
  y = 10;
}

test2();
console.log(y);

//8
let x = 1;

function a() {
  console.log(x);
}

function b() {
  let x = 2;
  a();
}

b();

//9
if (true) {
  const x = 5;
}
function outScope() {
  console.log(x);
}
outScope();

//10
let count = 0;
function addCount(c) {
  c++;
  return c;
}
count = addCount(count);
count = addCount(count);
console.log(count);

//11
function sum(arr) {
  let total = 0;
  for (const i of arr) {
    total += i;
  }
  return total;
}
console.log(sum([1, 2, 3]));

//12
function sqr(n) {
  return n ** 2;
}

function calculate(fn, n) {
  return fn(n);
}
console.log(calculate(sqr, 5));

//13
let x = 10;

function test(x) {
  return x * 2;
}

console.log(test(5)); // 10 as a parameter not the global

//14
function onlyEven(arr) {
  for (const i of arr) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
onlyEven([1, 2, 3, 4, 5, 6]);

//15
function addToTotal(current, num) {
  return (current += num);
}

function reset() {
  return 0;
}

let total = 0;
total = addToTotal(total, 5);
total = addToTotal(total, 10);
total = reset(total);
console.log(total);
