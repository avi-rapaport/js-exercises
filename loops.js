import input from "analiza-sync";

//1
for (let i = 0; i < 11; i++) {
  console.log(i);
}

//2
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//3

const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (const num of numbers) {
  total += num;
}
console.log(total);

//4
const names = ["דנה", "יוסי", "מיכל", "רון"];
for (const name of names) {
  console.log(name);
}

//5
const nums = [2, 5, 8, 11, 14, 17, 20];
for (const num of nums) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

//6
const numbers2 = [3, 99, 12, 45, 78];
let max = numbers2[0];
for (const num of numbers2) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

//7
const word = "javascript";
for (const letter of word) {
  console.log(letter);
}

//8
const numbers3 = [1, 2, 3, 4];
for (const num of numbers3) {
  console.log(num * 2);
}

//9
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}

////10
// let inp = input("enter:");
// while (inp !== "stop") {
//   inp = input("enter:");
// }

////11
// let num = +input("enter a number:");
// let sum = 0;
// while (num != 0) {
//   sum += num;
//   num = +input("enter a number:");
// }
// console.log(sum);
////12
// const secret = 7;
// let guess = input("enter your guess:");
// while (guess != secret) {
//   guess = input("enter your guess:");
// }
// console.log("correct");
////13
// let x = 1;
// while (x < 20) {
//   console.log(x);
//   x++;
// }

// //14
// let password = input("enter the password:");
// while (password !== "1234") {
//   password = input("enter the password:");
// }
// console.log("loggin");
// //15
// let count = 0;
// do {
//   console.log(count);
// } while (count < -5);

// //16
// let choice;
// do {
//   choice = input("enter your choice:");
// } while (choice != "exit");
// console.log("exit");

//17
const numbers4 = [1, 3, 7, 9, 15, 2];
for (const num of numbers4) {
  if (num > 10) {
    break;
  }
  console.log(num);
}

//18
const numbers5 = [5, -1, 8, -3, 10];
for (const num of numbers5) {
  if (num < 0) {
    continue;
  }
  console.log(num);
}

//19
const ages = [12, 15, 18, 21, 25];
for (const age of ages) {
  if (age >= 18) {
    console.log(age);
    break;
  }
}

//20
const arr = [10, 20, 30, 40, 50];
for (const i of arr) {
  console.log(i);
}

//21
const numbers6 = [1, 2, 3, 4, 5, 6];
let arrSum = 0;
for (const num of numbers6) {
  if (num % 2 == 0) {
    arrSum += num;
  }
}
console.log(arrSum);

//22
const target = 25;
const numbers7 = [10, 15, 20, 25, 30];
let found = `the number${target} not found`;
for (const num of numbers7) {
  if (num === target) {
    found = `the number ${target} found successfully`;
    break;
  }
}
console.log(found);

//23
const word2 = "hello world";
for (const letter of word2) {
  console.log(letter.toUpperCase());
}

//24
const numbers8 = [2, 4, 6, 8, 10, 12];
for (const num of numbers8) {
  if (num > 8 && num % 2 == 0) {
    console.log(num);
    break;
  }
}

//25
const students = [
  { name: "דנה", grade: 55 },
  { name: "יוסי", grade: 90 },
  { name: "מיכל", grade: 78 },
  { name: "רון", grade: 45 },
];

for (const student of students) {
  if (student.grade === 100) {
    break;
  }
  if (student.grade > 60) {
    console.log(student.name);
  }
}
