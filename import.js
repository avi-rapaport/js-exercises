//1
const add = require("./export");
console.log(add(1, 2));

//2
const greet = require("./export");
console.log(greet("avi"));

//3
const student = require("./export");
console.log(Object.values(student));

//4
const { add2, multiply } = require("./export");
console.log(add2(1, 2));
console.log(multiply(2, 2));

//5
const { add3, sub, multiply2 } = require("./export");
console.log(sub(4, 2));

6;
const isEven = require("./export");
console.log(isEven(2));
console.log(isEven(7));

//8
const numbers = require("./export");
const sum = numbers.reduce((acc, current) => acc + current);
console.log(sum);

//9
const { add3, sub, multiply, div } = require("./export");
console.log(div(6, 3));

//10
const logger = require("./export");
console.log(logger("INFO", "imported successfully!"));

//part 2

//1
import { sum } from "./export.js";
console.log(sum(5, 6));

//2
import { greet } from "./export.js";
console.log(greet("avi"));

//3
import { pi } from "./export.js";
console.log(pi);

//4
import mul from "./export.js";
console.log(mul(2, 5));

//5
import { div } from "./export";

//6
import user from "./export.js";
console.log(user.name);

//8
import add, { sub } from "./export.js";
console.log(add(1, 2));
console.log(sub(5, 4));
